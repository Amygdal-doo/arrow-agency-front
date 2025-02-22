"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { getSession, signIn } from "next-auth/react";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

type LoginInputs = z.infer<typeof loginSchema>;

type LoginFormProps = {
  toggleContent: () => void;
};

const LoginForm = ({ toggleContent }: LoginFormProps) => {
  const [loading, ] = useState(false);
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

    // Call the signIn method from next-auth
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res?.error) {
      console.error("Sign-in error:", res.error);
      setErrorMessage(res.error);
      return;
    }

    // Wait for session to be updated
    const session = await getSession();

    console.log("session", session);
  };

  // const onSubmit = async (data: LoginInputs) => {
  //   console.log("Login successful:", data);
  //   setLoading(true);
  //   setErrorMessage("");
  //   try {
  //     //   const response = await axios.post("/api/login", data);
  //     console.log("Login successful:", response.data);
  //   } catch (error) {
  //     setErrorMessage("Invalid email or password. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md mx-auto space-y-4 pb-16 pt-8 px-8 rounded-md shadow-2xl"
    >
      <div className="flex justify-center flex-col items-center">
        <p className="text-2xl font-bold text-text-[#0a0a23] pr-10">Amygdal</p>
        <p className="text-2xl font-bold text-purple-600 pl-20">CV Editor</p>
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
        <label className="block text-sm font-bold">Email</label>
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
        <label className="block text-sm font-bold">Password</label>
        <input
          {...register("password")}
          type="password"
          className="w-full border p-2 rounded"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      <p className="text-gray-500 font-medium text-md">
        Don&apos;t have an account?
        <span
          onClick={toggleContent}
          className="text-purple-600 font-bold cursor-pointer"
        >
          {" "}
          Sign up here
        </span>
      </p>
      <button
        type="submit"
        className="w-full bg-purple-600 text-sm font-bold text-white p-2 rounded"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
