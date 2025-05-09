"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { Eye, EyeOff } from "lucide-react";
import { useToast } from "@/providers/ToastProvider";
import { IApiError } from "@/core/interfaces/apiError.interface";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

type LoginInputs = z.infer<typeof loginSchema>;

type LoginFormProps = {
  toggleContent: () => void;
  onClose: () => void;
};

const LoginForm = ({ toggleContent, onClose }: LoginFormProps) => {
  const { showError, showSuccess } = useToast();
  const [loading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginInputs) => {
    // setLoading(true);
    setErrorMessage("");

    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (res?.status === 200) {
      onClose();
      showSuccess("You logged in successfully!");
    }

    if (res?.error) {
      showError(res.error);
      setErrorMessage(res.error);
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md mx-auto space-y-4 pb-16 pt-8 px-8 rounded-md shadow-2xl"
    >
      <div className="flex justify-center flex-col items-center">
        <p className="text-2xl font-bold text-white pr-10">Amygdal</p>
        <p className="text-2xl font-bold text-orange-600 pl-20">CV Editor</p>
      </div>

      <div className="py-4 px-16">
        <p className="text-gray-500 font-medium text-center">
          Please enter your email and password to log in.
        </p>
      </div>

      {errorMessage && (
        <p className="text-red-500 text-sm text-center">{errorMessage}</p>
      )}

      <div>
        <label className="block text-sm font-bold text-gray-300">Email</label>
        <input
          {...register("email")}
          type="email"
          className="w-full border p-2 rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-300">
          Password
        </label>
        <div className="relative">
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            className="w-full border p-2 rounded"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      <p className="font-medium text-md text-gray-300">
        Don&apos;t have an account?
        <span
          onClick={toggleContent}
          className="text-orange-600 font-bold cursor-pointer"
        >
          {" "}
          Sign up here
        </span>
      </p>
      <button
        type="submit"
        className="w-full bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white p-3 rounded-lg font-bold  transition-all duration-200 shadow-lg"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
