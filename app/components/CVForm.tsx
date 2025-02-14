"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";

const userFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  surname: z
    .string()
    .min(2, { message: "Surname must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(6, { message: "Phone number must be valid." }),
  file: z
    .instanceof(File, { message: "File is required and must be a PDF." })
    .refine((file) => file.type === "application/pdf", {
      message: "Only PDF files are allowed.",
    }),
  technologies: z.array(z.string()).optional(),
});

type UserFormInputs = z.infer<typeof userFormSchema>;

const CVForm = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [techInput, setTechInput] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<UserFormInputs>({
    resolver: zodResolver(userFormSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      technologies: [],
    },
  });

  const onSubmit = async (data: UserFormInputs) => {
    console.log("Form Data:", data);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("surname", data.surname);
      formData.append("email", data.email);
      formData.append("phone", data.phone);

      if (data.file) {
        formData.append("file", data.file);
      }

      if (data.technologies && data.technologies.length > 0) {
        formData.append("technologies", JSON.stringify(data.technologies));
      }

      const response: AxiosResponse = await axios.post(
        "https://arrow-agency-back-production.up.railway.app/api/pdf/cv",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log("CV Saved Successfully:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error saving CV:", error);
      throw error;
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) {
      setError("file", {
        type: "manual",
        message: "File is required and must be a PDF.",
      });
      return;
    }

    if (file.type !== "application/pdf") {
      setError("file", {
        type: "manual",
        message: "Only PDF files are allowed.",
      });
      return;
    }

    setFileName(file.name);
    setValue("file", file);
    clearErrors("file"); // Remove error message when a valid file is uploaded
  };

  const handleAddTechnology = () => {
    if (techInput.trim() !== "") {
      const updatedTechnologies = [...technologies, techInput];
      setTechnologies(updatedTechnologies);
      setValue("technologies", updatedTechnologies);
      setTechInput("");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddTechnology();
    }
  };

  const handleRemoveTechnology = (index: number) => {
    const updatedTechnologies = technologies.filter((_, i) => i !== index);
    setTechnologies(updatedTechnologies);
    setValue("technologies", updatedTechnologies);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md min-2-lg mx-auto space-y-4 pb-16 pt-8 px-8 rounded-md shadow-2xl"
    >
      <div className="flex justify-center pb-8 flex-col items-center">
        <p className="text-2xl font-bold text-gray-500 pr-10">Amygdal</p>
        <p className="text-2xl font-bold text-orange-500 pl-20">CV Editor</p>
      </div>

      <div>
        <label className="block text-sm font-bold">Name</label>
        <input {...register("name")} className="w-full border p-2 rounded" />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-bold">Surname</label>
        <input {...register("surname")} className="w-full border p-2 rounded" />
        {errors.surname && (
          <p className="text-red-500 text-sm">{errors.surname.message}</p>
        )}
      </div>

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
        <label className="block text-sm font-bold">Phone Number</label>
        <input {...register("phone")} className="w-full border p-2 rounded" />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-bold">Upload PDF</label>
        <div className="relative w-full">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="bg-gray-500 text-white text-sm w-full font-bold py-2 px-4 rounded cursor-pointer inline-block text-center"
          >
            Upload File
          </label>
        </div>
        {fileName && (
          <p className="text-sm mt-2 font-bold text-orange-500">
            Selected file: {fileName}
          </p>
        )}
        {errors.file && (
          <p className="text-red-500 text-sm">{errors.file.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-bold">Technologies</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={techInput}
            onChange={(e) => setTechInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-full border p-2 rounded"
            placeholder="Add technology"
          />
          <button
            type="button"
            onClick={handleAddTechnology}
            className="bg-gray-500 text-sm font-bold text-white py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center group bg-gray-200 py-2 px-4 rounded"
            >
              <span>{tech}</span>
              <button
                type="button"
                onClick={() => handleRemoveTechnology(index)}
                className="ml-3 text-red-300 group-hover:text-red-600 font-bold"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 text-sm font-bold text-white p-2 rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default CVForm;
