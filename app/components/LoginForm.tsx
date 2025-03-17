"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { signIn } from "next-auth/react";

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
  const [loading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
    console.log("login data", data);

    // Call the signIn method from next-auth
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (res) {
      onClose();
    }

    if (res?.error) {
      console.error("Sign-in error:", res.error);
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
        <input
          {...register("password")}
          type="password"
          className="w-full border p-2 rounded"
        />
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
        className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white p-3 rounded-lg font-bold hover:from-orange-700 hover:to-orange-800 transition-all duration-200 shadow-lg"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
