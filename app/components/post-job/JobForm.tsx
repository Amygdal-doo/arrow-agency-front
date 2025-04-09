"use client";
import { ICategory, ISkill, useCreateJob } from "@/providers/CreateJobProvider";
import React, { useState } from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const jobSchema = z.object({
  worldwide: z.boolean().default(false),
  remote: z.boolean().default(false),
  name: z.string().min(1, "Job title is required"),
  description: z
    .string()
    .min(50, "Job description must be at least 50 characters"),
  salary: z.string().min(1, "Salary is required"),
  applyBeforeDate: z.date({
    required_error: "Apply before date is required",
    invalid_type_error: "That's not a date!",
  }),
  noOfVacancies: z.number().min(1, "Number of vacancies is required"),
  jobCategory: z.string().min(1, "Category is required"),
  jobSkills: z.array(z.string()).min(1, "At least one skill is required"),
  jobType: z.enum(
    [
      "FULL_TIME",
      "PART_TIME",
      "INTERNSHIP",
      "CONTRACT",
      "TEMPORARY",
      "SEASONAL",
    ],
    {
      required_error: "Job type is required",
      invalid_type_error: "Invalid job type selected",
    }
  ),
  applicationLinkOrEmail: z
    .string()
    .url("Please enter a valid URL")
    .or(z.string().email("Please enter a valid email")),
  organization: z.string().optional(),
});

export type JobFormData = z.infer<typeof jobSchema>;

interface JobFormProps {
  jobMethods: UseFormReturn<JobFormData>;
}
const JobForm = ({ jobMethods }: JobFormProps) => {
  const {
    categories,
    setSelectedSkills,
    selectedSkills,
    availableSkills,
    setAvailableSkills,
  } = useCreateJob();
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [skillSearch, setSkillSearch] = useState("");

  const handleSkillSelect = (skill: ISkill) => {
    if (!selectedSkills.find((s) => s.id === skill.id)) {
      const updatedSelected = [...selectedSkills, skill];
      setSelectedSkills(updatedSelected);
      setAvailableSkills(availableSkills.filter((s) => s.id !== skill.id));

      // Update form data with array of skill IDs
      jobMethods.setValue(
        "jobSkills",
        updatedSelected.map((s) => s.id),
        {
          shouldValidate: true,
          shouldDirty: true,
        }
      );
    }
    setIsSkillsOpen(false);
    setSkillSearch("");
  };

  // Update remove skill handler
  const handleRemoveSkill = (skillToRemove: ISkill) => {
    const updatedSelected = selectedSkills.filter(
      (skill) => skill.id !== skillToRemove.id
    );
    setSelectedSkills(updatedSelected);
    setAvailableSkills(
      [...availableSkills, skillToRemove].sort((a, b) =>
        a.name.localeCompare(b.name)
      )
    );

    // Update form data with array of remaining skill IDs
    jobMethods.setValue(
      "jobSkills",
      updatedSelected.map((s) => s.id),
      {
        shouldValidate: true,
        shouldDirty: true,
      }
    );
  };
  const getCategoryName = (categoryId: string | undefined) => {
    if (!categoryId) return "Select a category";
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Select a category";
  };

  // Update the category selection handler
  const handleCategorySelect = (category: ICategory) => {
    jobMethods.setValue("jobCategory", category.id, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setIsCategoryOpen(false);
  };
  return (
    <FormProvider {...jobMethods}>
      <form className="space-y-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Job Information</h2>
          <div className="h-px flex-1 bg-gray-700 mx-4" />
        </div>

        <div className="bg-gray-800/50  rounded-xl p-6 border border-gray-700/50 shadow-lg">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Job Title *
          </label>
          <input
            {...jobMethods.register("name")}
            className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            placeholder="e.g. Senior Frontend Developer"
          />
          {jobMethods.formState.errors.name && (
            <p className="mt-1 text-red-400 text-sm">
              {jobMethods.formState.errors.name.message}
            </p>
          )}
        </div>
        {/* Category and Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-20">
          {/* Category */}
          <div className="bg-gray-800/50  rounded-xl p-6 border border-gray-700/50 shadow-lg">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Category *
            </label>
            <div className="relative">
              <div
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className={`w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 cursor-pointer flex justify-between items-center ${
                  isCategoryOpen ? "ring-2 ring-orange-500" : ""
                }`}
              >
                <span
                  className={
                    jobMethods.formState.errors.jobCategory
                      ? "text-red-400"
                      : "text-gray-300"
                  }
                >
                  {getCategoryName(jobMethods.watch("jobCategory"))}
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
                <div className="absolute z-50 w-full mt-2 bg-gray-800  border border-gray-700 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      onClick={() => handleCategorySelect(category)}
                      className={`px-4 py-3 cursor-pointer hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg text-gray-300 ${
                        jobMethods.watch("jobCategory") === category.id
                          ? "bg-gray-700"
                          : ""
                      }`}
                    >
                      {category.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {jobMethods.formState.errors.jobCategory && (
              <p className="mt-2 text-sm text-red-400">
                {jobMethods.formState.errors.jobCategory.message}
              </p>
            )}
          </div>
          {/* {Skills } */}
          <div className="bg-gray-800/50  rounded-xl p-6 border border-gray-700/50 shadow-lg">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Required Skills *
            </label>
            <div
              className="relative"
              onClick={() => setIsSkillsOpen(!isSkillsOpen)}
            >
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={skillSearch}
                  onChange={(e) => setSkillSearch(e.target.value)}
                  onClick={() => setIsSkillsOpen(true)}
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 outline-none focus:border-transparent transition-all pr-10"
                  placeholder="Search or select skills"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 absolute right-3 transition-transform ${
                    isSkillsOpen ? "rotate-180" : ""
                  } text-gray-300`}
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
                <div className="absolute z-50 w-full mt-2 bg-gray-800  border border-gray-700 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                  {availableSkills
                    .filter((skill) =>
                      skill.name
                        .toLowerCase()
                        .includes(skillSearch.toLowerCase())
                    )
                    .map((skill) => (
                      <div
                        key={skill.id}
                        onClick={() => handleSkillSelect(skill)}
                        className="px-4 py-3 cursor-pointer hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg text-gray-300"
                      >
                        {skill.name}
                      </div>
                    ))}
                </div>
              )}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {selectedSkills.map((skill) => (
                <div
                  key={skill.id}
                  className="group flex items-center gap-2 bg-gray-700/50 px-3 py-1.5 rounded-lg text-gray-300 hover:bg-gray-600/50 transition-all"
                >
                  <span>{skill.name}</span>
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
            {jobMethods.formState.errors.jobSkills && (
              <p className="mt-2 text-sm text-red-400">
                {jobMethods.formState.errors.jobSkills.message}
              </p>
            )}
          </div>
        </div>
        {/* Job Type and Worldwide sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-lg">
            <label className="block text-sm font-medium text-gray-300 mb-4">
              Is This Role Open Worldwide? *
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() =>
                  jobMethods.setValue("worldwide", true, {
                    shouldValidate: true,
                  })
                }
                className={`inline-flex items-center ${
                  jobMethods.watch("worldwide") === true
                    ? "text-orange-500"
                    : "text-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full border ${
                    jobMethods.watch("worldwide") === true
                      ? "border-orange-500"
                      : "border-gray-600"
                  } bg-gray-700 relative`}
                >
                  <div
                    className={`absolute w-2 h-2 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 transition-all ${
                      jobMethods.watch("worldwide") === true
                        ? "scale-100"
                        : "scale-0"
                    }`}
                  ></div>
                </div>
                <span className="ml-2">Yes</span>
              </button>
              <button
                type="button"
                onClick={() =>
                  jobMethods.setValue("worldwide", false, {
                    shouldValidate: true,
                  })
                }
                className={`inline-flex items-center ${
                  jobMethods.watch("worldwide") === false
                    ? "text-orange-500"
                    : "text-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full border ${
                    jobMethods.watch("worldwide") === false
                      ? "border-orange-500"
                      : "border-gray-600"
                  } bg-gray-700 relative`}
                >
                  <div
                    className={`absolute w-2 h-2 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 transition-all ${
                      jobMethods.watch("worldwide") === false
                        ? "scale-100"
                        : "scale-0"
                    }`}
                  ></div>
                </div>
                <span className="ml-2">No</span>
              </button>
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-lg">
            <label className="block text-sm font-medium text-gray-300 mb-4">
              Is This Role Remote? *
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() =>
                  jobMethods.setValue("remote", true, {
                    shouldValidate: true,
                  })
                }
                className={`inline-flex items-center ${
                  jobMethods.watch("remote") === true
                    ? "text-orange-500"
                    : "text-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full border ${
                    jobMethods.watch("remote") === true
                      ? "border-orange-500"
                      : "border-gray-600"
                  } bg-gray-700 relative`}
                >
                  <div
                    className={`absolute w-2 h-2 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 transition-all ${
                      jobMethods.watch("remote") === true
                        ? "scale-100"
                        : "scale-0"
                    }`}
                  ></div>
                </div>
                <span className="ml-2">Yes</span>
              </button>
              <button
                type="button"
                onClick={() =>
                  jobMethods.setValue("remote", false, {
                    shouldValidate: true,
                  })
                }
                className={`inline-flex items-center ${
                  jobMethods.watch("remote") === false
                    ? "text-orange-500"
                    : "text-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full border ${
                    jobMethods.watch("remote") === false
                      ? "border-orange-500"
                      : "border-gray-600"
                  } bg-gray-700 relative`}
                >
                  <div
                    className={`absolute w-2 h-2 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 transition-all ${
                      jobMethods.watch("remote") === false
                        ? "scale-100"
                        : "scale-0"
                    }`}
                  ></div>
                </div>
                <span className="ml-2">No</span>
              </button>
            </div>
          </div>

          {/* Application Link */}
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-lg relative z-10">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Application Link or Email *
            </label>
            <input
              type="text"
              {...jobMethods.register("applicationLinkOrEmail")}
              className="w-full outline-none bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="https://... or email@example.com"
            />
            {jobMethods.formState.errors.applicationLinkOrEmail && (
              <p className="mt-2 text-sm text-red-400">
                {jobMethods.formState.errors.applicationLinkOrEmail.message}
              </p>
            )}
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-lg relative z-10">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Salary *
            </label>
            <input
              type="text"
              {...jobMethods.register("salary")}
              className="w-full outline-none bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="5000 EUR"
            />
            {jobMethods.formState.errors.salary && (
              <p className="mt-2 text-sm text-red-400">
                {jobMethods.formState.errors.salary.message}
              </p>
            )}
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-lg relative z-[80]">
          <label className="block text-sm font-medium text-gray-300 mb-4">
            Job Type *
          </label>
          <div className="flex gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...jobMethods.register("jobType")}
                value="FULL_TIME"
                className="sr-only peer"
              />
              <div className="w-4 h-4 rounded-full border border-gray-600 bg-gray-700 peer-checked:border-orange-500 relative after:content-[''] after:absolute after:w-2 after:h-2 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-orange-500 after:scale-0 peer-checked:after:scale-100 transition-all"></div>
              <span className="ml-2 text-gray-300 peer-checked:text-orange-500">
                Full time
              </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...jobMethods.register("jobType")}
                value="PART_TIME"
                className="sr-only peer"
              />
              <div className="w-4 h-4 rounded-full border border-gray-600 bg-gray-700 peer-checked:border-orange-500 relative after:content-[''] after:absolute after:w-2 after:h-2 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-orange-500 after:scale-0 peer-checked:after:scale-100 transition-all"></div>
              <span className="ml-2 text-gray-300 peer-checked:text-orange-500">
                Part time
              </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...jobMethods.register("jobType")}
                value="INTERNSHIP"
                className="sr-only peer"
              />
              <div className="w-4 h-4 rounded-full border border-gray-600 bg-gray-700 peer-checked:border-orange-500 relative after:content-[''] after:absolute after:w-2 after:h-2 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-orange-500 after:scale-0 peer-checked:after:scale-100 transition-all"></div>
              <span className="ml-2 text-gray-300 peer-checked:text-orange-500">
                Internship
              </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...jobMethods.register("jobType")}
                value="CONTRACT"
                className="sr-only peer"
              />
              <div className="w-4 h-4 rounded-full border border-gray-600 bg-gray-700 peer-checked:border-orange-500 relative after:content-[''] after:absolute after:w-2 after:h-2 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-orange-500 after:scale-0 peer-checked:after:scale-100 transition-all"></div>
              <span className="ml-2 text-gray-300 peer-checked:text-orange-500">
                Contract
              </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...jobMethods.register("jobType")}
                value="TEMPORARY"
                className="sr-only peer"
              />
              <div className="w-4 h-4 rounded-full border border-gray-600 bg-gray-700 peer-checked:border-orange-500 relative after:content-[''] after:absolute after:w-2 after:h-2 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-orange-500 after:scale-0 peer-checked:after:scale-100 transition-all"></div>
              <span className="ml-2 text-gray-300 peer-checked:text-orange-500">
                Temporary
              </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                {...jobMethods.register("jobType")}
                value="SEASONAL"
                className="sr-only peer"
              />
              <div className="w-4 h-4 rounded-full border border-gray-600 bg-gray-700 peer-checked:border-orange-500 relative after:content-[''] after:absolute after:w-2 after:h-2 after:rounded-full after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-orange-500 after:scale-0 peer-checked:after:scale-100 transition-all"></div>
              <span className="ml-2 text-gray-300 peer-checked:text-orange-500">
                Seasonal
              </span>
            </label>
          </div>
        </div>
        <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-lg relative z-10">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Job Description *
          </label>
          <textarea
            {...jobMethods.register("description")}
            rows={6}
            className="w-full outline-none bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            placeholder="Describe the role and responsibilities..."
          />
          {jobMethods.formState.errors.description && (
            <p className="mt-2 text-sm text-red-400">
              {jobMethods.formState.errors.description.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-lg">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Number of Vacancies *
            </label>
            <input
              type="number"
              {...jobMethods.register("noOfVacancies", {
                valueAsNumber: true,
              })}
              className="w-full no-spinner outline-none bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="Enter number of positions"
              min="1"
            />
            {jobMethods.formState.errors.noOfVacancies && (
              <p className="mt-2 text-sm text-red-400">
                {jobMethods.formState.errors.noOfVacancies.message}
              </p>
            )}
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-lg">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Apply Before Date *
            </label>
            <input
              type="date"
              {...jobMethods.register("applyBeforeDate", {
                setValueAs: (value) => (value ? new Date(value) : null),
              })}
              className="w-full outline-none bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              min={new Date().toISOString().split("T")[0]}
            />
            {jobMethods.formState.errors.applyBeforeDate && (
              <p className="mt-2 text-sm text-red-400">
                {jobMethods.formState.errors.applyBeforeDate.message}
              </p>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default JobForm;
