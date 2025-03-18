"use client";
import { apiService } from "@/core/services/apiService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { z } from "zod";

const registrationSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

type RegistrationInputs = z.infer<typeof registrationSchema>;

type RegistrationFormProps = {
  toggleContent: () => void;
};

const RegistrationForm = ({ toggleContent }: RegistrationFormProps) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationInputs>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationInputs) => {
    console.log("Registration successful:", data);
    setLoading(true);
    setErrorMessage("");
    try {
      await apiService.post("auth/register", data);
      toggleContent();
    } catch (error) {
      setErrorMessage(
        `Failed to register. Please try again. Error: ${JSON.stringify(error)}`
      );
    } finally {
      setLoading(false);
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
          Please enter your details to create an account.
        </p>
      </div>

      {errorMessage && (
        <p className="text-red-500 text-sm text-center">{errorMessage}</p>
      )}

      <div>
        <label className="block text-sm font-bold text-gray-300">
          First Name
        </label>
        <input
          {...register("firstName")}
          type="text"
          className="w-full border p-2 rounded"
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-bold text-gray-300">
          Last Name
        </label>
        <input
          {...register("lastName")}
          type="text"
          className="w-full border p-2 rounded"
        />
        {errors.lastName && (
          <p className="text-red-500 text-sm">{errors.lastName.message}</p>
        )}
      </div>

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

      <p className="text-gray-300 font-medium text-md">
        Already have an account?
        <span
          onClick={toggleContent}
          className="text-orange-600 font-bold cursor-pointer"
        >
          {" "}
          Log in here
        </span>
      </p>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white p-3 rounded-lg font-bold hover:from-orange-700 hover:to-orange-800 transition-all duration-200 shadow-lg"
        disabled={loading}
      >
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default RegistrationForm;
