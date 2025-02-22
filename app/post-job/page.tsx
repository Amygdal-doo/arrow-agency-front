"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { skillsList } from "../conts/list";

const jobCategories = [
  "Fullstack",
  "Frontend",
  "Backend",
  "Customer Support",
  "DevOps",
  "Sales and Marketing",
  "Management and Finance",
  "Product",
  "All Other Remote",
];

const salaryRanges = [
  "Prefer not to say",
  "$10,000 - $25,000",
  "$25,000 - $40,000",
  "$40,000 - $55,000",
  "$55,000 - $70,000",
  "$70,000 - $85,000",
  "$85,000 - $100,000",
  "$100,000+"
];

const formSchema = z.object({
  // Job Details
  title: z.string().min(1, "Job title is required"),
  category: z.string().min(1, "Category is required"),
  skills: z.array(z.string()).min(1, "At least one skill is required"),
  isWorldwide: z.boolean(),
  salaryRange: z.string().min(1, "Salary range is required"),
  jobType: z.enum(["fulltime", "contract"]),
  applicationLink: z.string().url("Please enter a valid URL").or(z.string().email("Please enter a valid email")),
  jobDescription: z.string().min(50, "Job description must be at least 50 characters"),
  
  // Company Details
  companyName: z.string().min(1, "Company name is required"),
  companyHQ: z.string().min(1, "Company HQ is required"),
  companyLogo: z.any(),
  companyUrl: z.string().url("Please enter a valid URL"),
  companyEmail: z.string().email("Please enter a valid email"),
  companyDescription: z.string().min(50, "Company description must be at least 50 characters")
});

type FormData = z.infer<typeof formSchema>;

export default function PostJob() {
  const [currentStep, setCurrentStep] = useState(1);
  const [previewLogo, ] = useState<string | null>(null);
  const [availableSkills, setAvailableSkills] = useState<string[]>(skillsList);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isWorldwide: false,
      jobType: "fulltime",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

//   const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreviewLogo(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#01070a]">
      <div className="max-w-4xl mx-auto">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div
              className={`flex-1 h-2 ${
                currentStep >= 1 ? "bg-orange-600" : "bg-gray-200"
              }`}
            />
            <div
              className={`flex-1 h-2 ${
                currentStep >= 2 ? "bg-orange-600" : "bg-gray-200"
              }`}
            />
            <div
              className={`flex-1 h-2 ${
                currentStep === 3 ? "bg-orange-600" : "bg-gray-200"
              }`}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span
              className={`text-sm font-medium ${
                currentStep >= 1 ? "text-orange-600" : "text-gray-500"
              }`}
            >
              Job Details
            </span>
            <span
              className={`text-sm font-medium ${
                currentStep >= 2 ? "text-orange-600" : "text-gray-500"
              }`}
            >
              Company Info
            </span>
            <span
              className={`text-sm font-medium ${
                currentStep === 3 ? "text-orange-600" : "text-gray-500"
              }`}
            >
              Purchase
            </span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 bg-gray-800 p-8 rounded-lg shadow"
        >
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-8">
                Post a New Job
              </h2>

              {/* Job Title */}
              <div>
                <label className="block text-sm font-medium text-white">
                  Job Title
                </label>
                <input
                  type="text"
                  {...register("title")}
                  className="p-2 mt-1 block w-full rounded-md bg-gray-700 border-orange-500 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-white"
                />
                {errors.title && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* Category and Skills */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white">
                    Category
                  </label>
                  <select
                    {...register("category")}
                    className="p-2 mt-1 block w-full rounded-md bg-gray-700 border-orange-500 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-white"
                  >
                    <option value="" className="bg-gray-700">
                      Select a category
                    </option>
                    {jobCategories.map((category) => (
                      <option
                        key={category}
                        value={category}
                        className="bg-gray-700"
                      >
                        {category}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.category.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white">
                    Required Skills
                  </label>
                  <select
                    value=""
                    onChange={(e) => {
                      const skill = e.target.value;
                      if (skill) {
                        setSelectedSkills([...selectedSkills, skill]);
                        setAvailableSkills(
                          availableSkills.filter((s) => s !== skill)
                        );
                      }
                    }}
                    className="p-2 mt-1 block w-full rounded-md bg-gray-700 border-orange-500 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-white"
                  >
                    <option value="" className="bg-gray-700">
                      Select a skill
                    </option>
                    {availableSkills.map((skill) => (
                      <option key={skill} value={skill} className="bg-gray-700">
                        {skill}
                      </option>
                    ))}
                  </select>

                  {/* Selected Skills */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedSkills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center bg-gray-700 px-3 py-1 rounded-md text-white"
                      >
                        <span>{skill}</span>
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedSkills(
                              selectedSkills.filter((s) => s !== skill)
                            );
                            setAvailableSkills([...availableSkills, skill]);
                          }}
                          className="ml-2 text-gray-400 hover:text-white"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                  {errors.skills && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.skills.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Worldwide and Job Type */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Is This Role Open Worldwide?
                  </label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        {...register("isWorldwide")}
                        value="true"
                        className="form-radio text-orange-500"
                      />
                      <span className="ml-2 text-white">Yes</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        {...register("isWorldwide")}
                        value="false"
                        className="form-radio text-orange-500"
                      />
                      <span className="ml-2 text-white">No</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Job Type
                  </label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        {...register("jobType")}
                        value="fulltime"
                        className="form-radio text-orange-500"
                      />
                      <span className="ml-2 text-white">Full-time</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        {...register("jobType")}
                        value="contract"
                        className="form-radio text-orange-500"
                      />
                      <span className="ml-2 text-white">Contract</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Salary Range */}
              <div>
                <label className="block text-sm font-medium text-white">
                  Salary Range
                </label>
                <select
                  {...register("salaryRange")}
                  className="p-2 mt-1 block w-full rounded-md bg-gray-700 border-orange-500 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-white"
                >
                  {salaryRanges.map((range) => (
                    <option key={range} value={range} className="bg-gray-700">
                      {range}
                    </option>
                  ))}
                </select>
                {errors.salaryRange && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.salaryRange.message}
                  </p>
                )}
              </div>

              {/* Application Link/Email */}
              <div>
                <label className="block text-sm font-medium text-white">
                  Application Link or Email
                </label>
                <input
                  type="text"
                  {...register("applicationLink")}
                  className="p-2 mt-1 block w-full rounded-md bg-gray-700 border-orange-500 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-white"
                  placeholder="https://... or email@example.com"
                />
                {errors.applicationLink && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.applicationLink.message}
                  </p>
                )}
              </div>

              {/* Job Description */}
              <div>
                <label className="block text-sm font-medium text-white">
                  Job Description
                </label>
                <textarea
                  {...register("jobDescription")}
                  rows={6}
                  className="p-2 mt-1 block w-full rounded-md bg-gray-700 border-orange-500 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-white"
                />
                {errors.jobDescription && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.jobDescription.message}
                  </p>
                )}
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-8">
                Company Information
              </h2>

              {/* Company Name and HQ */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white">
                    Company Name
                  </label>
                  <input
                    type="text"
                    {...register("companyName")}
                    className="p-2 mt-1 block w-full rounded-md bg-gray-700 border-orange-500 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-white"
                  />
                  {previewLogo && (
                    <Image
                      height={2000}
                      width={3000}
                      src={previewLogo}
                      alt="Company logo preview"
                      className="h-12 w-12 object-contain rounded mt-2"
                    />
                  )}
                </div>
              </div>

              {/* Company URL and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white">
                    Company Website
                  </label>
                  <input
                    type="url"
                    {...register("companyUrl")}
                    className="p-2 mt-1 block w-full rounded-md bg-gray-700 border-orange-500 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-white"
                    placeholder="https://example.com"
                  />
                  {errors.companyUrl && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.companyUrl.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white">
                    Company Email
                  </label>
                  <input
                    type="email"
                    {...register("companyEmail")}
                    className="p-2 mt-1 block w-full rounded-md bg-gray-700 border-orange-500 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-white"
                    placeholder="contact@example.com"
                  />
                  {errors.companyEmail && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.companyEmail.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Company Description */}
              <div>
                <label className="block text-sm font-medium text-white">
                  Company Description
                </label>
                <textarea
                  {...register("companyDescription")}
                  rows={6}
                  className="p-2 mt-1 block w-full rounded-md bg-gray-700 border-orange-500 shadow-sm focus:border-orange-500 focus:ring-orange-500 text-white"
                  placeholder="Tell us about your company..."
                />
                {errors.companyDescription && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.companyDescription.message}
                  </p>
                )}
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-8">
                Purchase Details
              </h2>
              <p className="text-gray-300">Coming soon...</p>
            </div>
          )}

          <div className="flex justify-between pt-8">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="bg-gray-700 text-white px-6 py-2 rounded-md font-medium hover:bg-gray-600"
              >
                Previous
              </button>
            )}
            {currentStep < 3 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className="ml-auto bg-orange-600 text-white px-6 py-2 rounded-md font-medium hover:bg-orange-700"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto bg-orange-600 text-white px-6 py-2 rounded-md font-medium hover:bg-orange-700"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}