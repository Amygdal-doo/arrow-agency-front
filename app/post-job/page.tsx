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
  "$100,000+",
];

const formSchema = z.object({
  // Job Details
  title: z.string().min(1, "Job title is required"),
  category: z.string().min(1, "Category is required"),
  skills: z.array(z.string()).min(1, "At least one skill is required"),
  isWorldwide: z.boolean(),
  salaryRange: z.string().min(1, "Salary range is required"),
  jobType: z.enum(["fulltime", "contract"]),
  applicationLink: z
    .string()
    .url("Please enter a valid URL")
    .or(z.string().email("Please enter a valid email")),
  jobDescription: z
    .string()
    .min(50, "Job description must be at least 50 characters"),

  // Company Details
  companyName: z.string().min(1, "Company name is required"),
  companyHQ: z.string().min(1, "Company HQ is required"),
  companyLogo: z.any(),
  companyUrl: z.string().url("Please enter a valid URL"),
  companyEmail: z.string().email("Please enter a valid email"),
  companyDescription: z
    .string()
    .min(50, "Company description must be at least 50 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function PostJob() {
  const [currentStep, setCurrentStep] = useState(1);
  const [previewLogo] = useState<string | null>(null);
  const [availableSkills, setAvailableSkills] = useState<string[]>(skillsList);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isSalaryOpen, setIsSalaryOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      isWorldwide: false,
      jobType: "fulltime",
      skills: [],
    },
  });

  const handleSkillChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const skill = e.target.value;
    if (skill && !selectedSkills.includes(skill)) {
      const updatedSelected = [...selectedSkills, skill];
      setSelectedSkills(updatedSelected);
      setAvailableSkills(availableSkills.filter((s) => s !== skill));
      // Update form data
      setValue("skills", updatedSelected);
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    const updatedSelected = selectedSkills.filter(
      (skill) => skill !== skillToRemove
    );
    setSelectedSkills(updatedSelected);
    setAvailableSkills([...availableSkills, skillToRemove].sort());
    // Update form data
    setValue("skills", updatedSelected);
  };

  // Add this new handler
  const handleCategorySelect = (category: string) => {
    setValue("category", category);
    setIsCategoryOpen(false);
  };

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
    <div className="h-[92vh] py-12 px-4 sm:px-6 lg:px-8 bg-[#01070a]">
      <div className="container mx-auto h-full pt-20 relative">
        {/* Modal-like container */}
        <div className="px-0 h-full flex flex-col">
          {/* Progress bar and header */}

          {/* Fixed header with steps - will stay at top */}
          <div className="py-8 sticky top-0 z-20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Post a New Job</h2>
              <div className="h-px flex-1 bg-gray-700 mx-4" />
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-between gap-2 mb-4">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`flex-1 h-1 rounded-full transition-all ${
                    currentStep >= step ? "bg-orange-600" : "bg-gray-700"
                  }`}
                />
              ))}
            </div>

            <div className="flex justify-between text-sm">
              <span
                className={`${
                  currentStep >= 1 ? "text-orange-500" : "text-gray-500"
                }`}
              >
                Job Details
              </span>
              <span
                className={`${
                  currentStep >= 2 ? "text-orange-500" : "text-gray-500"
                }`}
              >
                Company Info
              </span>
              <span
                className={`${
                  currentStep === 3 ? "text-orange-500" : "text-gray-500"
                }`}
              >
                Purchase
              </span>
            </div>
          </div>

          {/* Form */}
          {/* Scrollable form content */}
          <div className="flex-1 overflow-y-auto">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 overflow-x-auto max-h-[80vh]"
            >
              {currentStep === 1 && (
                <div className="space-y-6">
                  {/* Job Title */}
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Job Title
                    </label>
                    <input
                      type="text"
                      {...register("title")}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="e.g. Senior Frontend Developer"
                    />
                    {errors.title && (
                      <p className="mt-1 text-red-400 text-sm">
                        {errors.title.message}
                      </p>
                    )}
                  </div>

                  {/* Category and Skills */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-20">
                    {/* Category */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Category
                      </label>
                      <div className="relative">
                        <div
                          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                          className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 cursor-pointer flex justify-between items-center"
                        >
                          <span
                            className={
                              errors.category ? "text-red-400" : "text-gray-300"
                            }
                          >
                            {watch("category") || "Select a category"}
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 transition-transform ${
                              isCategoryOpen ? "rotate-180" : ""
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
                        {isCategoryOpen && (
                          <div className="absolute z-50 w-full mt-2 bg-gray-800 backdrop-blur-sm border border-gray-700 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                            {jobCategories.map((category) => (
                              <div
                                key={category}
                                onClick={() => handleCategorySelect(category)}
                                className="px-4 py-3 cursor-pointer hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg text-gray-300"
                              >
                                {category}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      {errors.category && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.category.message}
                        </p>
                      )}
                    </div>

                    {/* Skills */}
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Required Skills
                      </label>
                      <div className="relative">
                        <div
                          onClick={() => setIsSkillsOpen(!isSkillsOpen)}
                          className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 cursor-pointer flex justify-between items-center"
                        >
                          <span className="text-gray-500">Select skills</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 transition-transform ${
                              isSkillsOpen ? "rotate-180" : ""
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
                        {isSkillsOpen && (
                          <div className="absolute z-50 w-full mt-2 bg-gray-800 backdrop-blur-sm border border-gray-700 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                            {availableSkills.map((skill) => (
                              <div
                                key={skill}
                                onClick={() => {
                                  handleSkillChange({
                                    target: { value: skill },
                                  } as React.ChangeEvent<HTMLSelectElement>);
                                  setIsSkillsOpen(false);
                                }}
                                className="px-4 py-3 cursor-pointer hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg text-gray-300"
                              >
                                {skill}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {selectedSkills.map((skill) => (
                          <div
                            key={skill}
                            className="group flex items-center gap-2 bg-gray-700/50 px-3 py-1.5 rounded-lg text-gray-300 hover:bg-gray-600/50 transition-all"
                          >
                            <span>{skill}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveSkill(skill)}
                              className="text-gray-400 group-hover:text-white transition-colors"
                            >
                              ×
                            </button>
                          </div>
                        ))}
                      </div>
                      {errors.skills && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.skills.message}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Job Type and Worldwide sections */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg relative z-[80]">
                      <label className="block text-sm font-medium text-gray-300 mb-4">
                        Job Type
                      </label>
                      <div className="flex gap-4">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            {...register("jobType")}
                            value="fulltime"
                            className="sr-only peer"
                          />
                          <div className="w-4 h-4 rounded-full border border-gray-600 bg-gray-700 peer-checked:border-orange-500 relative after:content-[''] after:absolute after:w-2 after:h-2 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-orange-500 after:scale-0 peer-checked:after:scale-100 transition-all"></div>
                          <span className="ml-2 text-gray-300">Full-time</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            {...register("jobType")}
                            value="contract"
                            className="sr-only peer"
                          />
                          <div className="w-4 h-4 rounded-full border border-gray-600 bg-gray-700 peer-checked:border-orange-500 relative after:content-[''] after:absolute after:w-2 after:h-2 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-orange-500 after:scale-0 peer-checked:after:scale-100 transition-all"></div>
                          <span className="ml-2 text-gray-300">Contract</span>
                        </label>
                      </div>
                    </div>

                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
                      <label className="block text-sm font-medium text-gray-300 mb-4">
                        Is This Role Open Worldwide?
                      </label>
                      <div className="flex gap-4">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            {...register("isWorldwide")}
                            value="true"
                            className="sr-only peer"
                          />
                          <div className="w-4 h-4 rounded-full border border-gray-600 bg-gray-700 peer-checked:border-orange-500 relative after:content-[''] after:absolute after:w-2 after:h-2 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-orange-500 after:scale-0 peer-checked:after:scale-100 transition-all"></div>
                          <span className="ml-2 text-gray-300">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            {...register("isWorldwide")}
                            value="false"
                            className="sr-only peer"
                          />
                          <div className="w-4 h-4 rounded-full border border-gray-600 bg-gray-700 peer-checked:border-orange-500 relative after:content-[''] after:absolute after:w-2 after:h-2 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-orange-500 after:scale-0 peer-checked:after:scale-100 transition-all"></div>
                          <span className="ml-2 text-gray-300">No</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Salary Range */}
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg relative z-20">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Salary Range
                    </label>
                    <div className="relative">
                      <div
                        onClick={() => setIsSalaryOpen(!isSalaryOpen)}
                        className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 cursor-pointer flex justify-between items-center"
                      >
                        <span
                          className={
                            errors.salaryRange
                              ? "text-red-400"
                              : "text-gray-300"
                          }
                        >
                          {watch("salaryRange") || "Select salary range"}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-5 w-5 transition-transform ${
                            isSalaryOpen ? "rotate-180" : ""
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
                      {isSalaryOpen && (
                        <div className="absolute z-50 w-full mt-2 bg-gray-800 backdrop-blur-sm border border-gray-700 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                          {salaryRanges.map((range) => (
                            <div
                              key={range}
                              onClick={() => {
                                setValue("salaryRange", range);
                                setIsSalaryOpen(false);
                              }}
                              className="px-4 py-3 cursor-pointer hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg text-gray-300"
                            >
                              {range}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    {errors.salaryRange && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.salaryRange.message}
                      </p>
                    )}
                  </div>

                  {/* Application Link */}
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg relative z-10">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Application Link or Email
                    </label>
                    <input
                      type="text"
                      {...register("applicationLink")}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="https://... or email@example.com"
                    />
                    {errors.applicationLink && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.applicationLink.message}
                      </p>
                    )}
                  </div>

                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg relative z-10">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Job Description
                    </label>
                    <textarea
                      {...register("jobDescription")}
                      rows={6}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Describe the role and responsibilities..."
                    />
                    {errors.jobDescription && (
                      <p className="mt-2 text-sm text-red-400">
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

                  {/* Company Name */}
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      {...register("companyName")}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Enter your company name"
                    />
                    {errors.companyName && (
                      <p className="mt-2 text-sm text-red-400">
                        {errors.companyName.message}
                      </p>
                    )}
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

                  {/* Company Website and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company Website
                      </label>
                      <input
                        type="url"
                        {...register("companyUrl")}
                        className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="https://example.com"
                      />
                      {errors.companyUrl && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.companyUrl.message}
                        </p>
                      )}
                    </div>

                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Company Email
                      </label>
                      <input
                        type="email"
                        {...register("companyEmail")}
                        className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                        placeholder="contact@example.com"
                      />
                      {errors.companyEmail && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.companyEmail.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company Description */}
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Company Description
                    </label>
                    <textarea
                      {...register("companyDescription")}
                      rows={6}
                      className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                      placeholder="Tell us about your company..."
                    />
                    {errors.companyDescription && (
                      <p className="mt-2 text-sm text-red-400">
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

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="bg-gray-700/50 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600/50 transition-all"
                  >
                    Previous
                  </button>
                )}
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="ml-auto bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-3 rounded-lg font-medium hover:from-orange-700 hover:to-orange-800 transition-all duration-200 shadow-lg"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-3 rounded-lg font-medium hover:from-orange-700 hover:to-orange-800 transition-all duration-200 shadow-lg"
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
