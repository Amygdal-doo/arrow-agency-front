"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { AxiosResponse } from "axios";
import { apiService } from "@/core/services/apiService";
import { ICompanyLogo, useProfile } from "@/providers/ProfileInfoProvider";
import Image from "next/image";

const userFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  logoId: z.string().min(2, { message: "Logo must be selected." }),
  companyName: z
    .string()
    .min(2, { message: "Company Name must be at least 2 characters." }),
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
  const { profile } = useProfile();
  const [fileName, setFileName] = useState<string | null>(null);
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [techInput, setTechInput] = useState("");
  const [isLogoDropdownOpen, setIsLogoDropdownOpen] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState<ICompanyLogo | null>(null);

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
      companyName: "",
      name: "",
      surname: "",
      email: "",
      phone: "",
      technologies: [],
      logoId: "",
    },
  });

  const onSubmit = async (data: UserFormInputs) => {
    console.log("Form Data:", data);
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("companyName", data.companyName);
      formData.append("surname", data.surname);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("logoId", "b0e7655b-679d-475f-a302-54153616be0e");
      formData.append("templateId", "cv2");

      if (data.file) {
        formData.append("file", data.file);
      }

      if (data.technologies && data.technologies.length > 0) {
        data.technologies.forEach((tech) =>
          formData.append("technologies[]", tech)
        );
      }

      // if (data.technologies && data.technologies.length > 0) {
      //   formData.append("technologies", JSON.stringify(data.technologies));
      // }

      const response: AxiosResponse = await apiService.post(
        "applicant/create",
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
    <div className="space-y-6 p-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Create CV</h2>
        <div className="h-px flex-1 bg-gray-700 mx-4" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Company Logo Selection */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg relative z-10">
          <label className="block text-sm font-medium text-gray-300 mb-4">
            Company Logo
          </label>
          <div className="relative">
            <div
              onClick={() => setIsLogoDropdownOpen(!isLogoDropdownOpen)}
              className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-4 text-gray-300 cursor-pointer flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                {selectedLogo ? (
                  <>
                    <Image
                      src={selectedLogo.url}
                      alt={selectedLogo.name}
                      width={40}
                      height={40}
                      className="rounded-md"
                    />
                    <span>{selectedLogo.name}</span>
                  </>
                ) : (
                  <span className="text-gray-500">Select Company Logo</span>
                )}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-transform ${
                  isLogoDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {isLogoDropdownOpen && profile?.companyLogos && (
              <div className="absolute z-50 w-full mt-2 bg-gray-800 backdrop-blur-sm border border-gray-700 rounded-lg shadow-xl">
                {profile.companyLogos.map((logo) => (
                  <div
                    key={logo.id}
                    onClick={() => {
                      setSelectedLogo(logo);
                      setIsLogoDropdownOpen(false);
                      setValue("logoId", logo.id);
                    }}
                    className="flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-700 transition-colors"
                  >
                    <Image
                      src={logo.url}
                      alt={logo.name}
                      width={40}
                      height={40}
                      className="rounded-md"
                    />
                    <span className="text-gray-300">{logo.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Basic Information */}
        <div className="bg-gray-800/50 backdrop-blur-sm relative z-0 rounded-xl p-6 border border-gray-700/50 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <input
                {...register("companyName")}
                placeholder="Company Name"
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
              {errors.companyName && (
                <p className="mt-1 text-red-400 text-sm">
                  {errors.companyName.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("name")}
                placeholder="First Name"
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
              {errors.name && (
                <p className="mt-1 text-red-400 text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("surname")}
                placeholder="Last Name"
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
              {errors.surname && (
                <p className="mt-1 text-red-400 text-sm">
                  {errors.surname.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("email")}
                type="email"
                placeholder="Email"
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
              {errors.email && (
                <p className="mt-1 text-red-400 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <input
                {...register("phone")}
                placeholder="Phone Number"
                className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
              {errors.phone && (
                <p className="mt-1 text-red-400 text-sm">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* File Upload */}
        <div className="bg-gray-800/50  relative z-0 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-all"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            Upload PDF Resume
          </label>
          {fileName && (
            <p className="mt-2 text-orange-400 text-sm flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {fileName}
            </p>
          )}
          {errors.file && (
            <p className="mt-1 text-red-400 text-sm">{errors.file.message}</p>
          )}
        </div>

        {/* Technologies */}
        <div className="bg-gray-800/50 relative z-0 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
          <label className="block text-sm font-medium text-gray-300 mb-4">
            Technologies
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={techInput}
              onChange={(e) => setTechInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Add technology"
              className="flex-1 bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
            <button
              type="button"
              onClick={handleAddTechnology}
              className="px-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-lg font-medium hover:from-orange-700 hover:to-orange-800 transition-all duration-200"
            >
              Add
            </button>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group bg-gray-700/50 px-3 py-1.5 rounded-lg flex items-center gap-2"
              >
                <span className="text-gray-300">{tech}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveTechnology(index)}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white p-3 rounded-lg font-medium hover:from-orange-700 hover:to-orange-800 transition-all duration-200 shadow-lg"
        >
          Create CV
        </button>
      </form>
    </div>
  );
};

export default CVForm;
