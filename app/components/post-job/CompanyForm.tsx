"use client";
import { IOrganization, useCompanies } from "@/providers/AllCompaniesProvider";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const companySchema = z.object({
  name: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name cannot exceed 100 characters"),
  about: z
    .string()
    .min(50, "Company description must be at least 50 characters")
    .max(5000, "Company description cannot exceed 5000 characters"),
  culture: z.string().optional(),
  benefits: z.string().optional(),
  email: z
    .string()
    .email("Please enter a valid company email address")
    .min(5, "Email is too short")
    .max(254, "Email is too long"),
  location: z
    .string()
    .min(2, "Location must be at least 2 characters")
    .max(100, "Location cannot exceed 100 characters"),
  file: z
    .custom<File>()
    .refine(
      (file) => !file || file.size <= 5 * 1024 * 1024,
      "Logo must be less than 5MB"
    )
    .refine(
      (file) =>
        !file || ["image/jpeg", "image/png", "image/webp"].includes(file.type),
      "Logo must be in JPEG, PNG, or WebP format"
    )
    .optional(),
});

export type CompanyFormData = z.infer<typeof companySchema>;

interface CompanyFormProps {
  companyMethods: UseFormReturn<CompanyFormData>;
}

const CompanyForm = ({ companyMethods }: CompanyFormProps) => {
  const { myCompanies } = useCompanies();

  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<IOrganization | null>(
    null
  );
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [isUploading] = useState(false);

  const handleCompanySelect = (company: IOrganization) => {
    setSelectedCompany(company);
    setIsCompanyOpen(false);

    // Fill form with selected company data
    companyMethods.reset({
      name: company.name,
      email: company.email,
      about: company.about,
      location: company.location,
      culture: company.culture || "",
      benefits: company.benefits || "",
    });

    // Set logo preview if exists
    if (company.logo?.url) {
      setLogoPreview(company.logo.url);
    }
  };

  const handleAddNewCompany = () => {
    setSelectedCompany(null);
    setLogoPreview(null);
    companyMethods.reset({
      name: "",
      email: "",
      about: "",
      location: "",
      culture: "",
      benefits: "",
    });
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create preview URL
    const previewUrl = URL.createObjectURL(file);
    setLogoPreview(previewUrl);

    // Update form data
    companyMethods.setValue("file", file, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleDeleteLogo = () => {
    setLogoPreview(null);
    companyMethods.setValue("file", undefined, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  // Cleanup preview URL on unmount
  useEffect(() => {
    return () => {
      if (logoPreview) URL.revokeObjectURL(logoPreview);
    };
  }, [logoPreview]);
  return (
    <FormProvider {...companyMethods}>
      <form className="space-y-8">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Company Information</h2>
          <div className="h-px flex-1 bg-gray-700 mx-4" />
        </div>

        {myCompanies.length > 0 && (
          <div className="flex items-center justify-between gap-4 relative z-20">
            <div className="bg-gray-800/50 backdrop-blur-sm flex-1 rounded-xl p-6 border border-gray-700/50 shadow-lg">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Select Existing Company
              </label>
              <div className="flex justify-between space-x-4">
                <div className="relative w-full">
                  <button
                    type="button"
                    onClick={() => setIsCompanyOpen(!isCompanyOpen)}
                    className={`w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-left text-gray-300 hover:bg-gray-600/50 transition-all flex justify-between items-center ${
                      isCompanyOpen ? "ring-2 ring-orange-500" : ""
                    }`}
                  >
                    <span>{selectedCompany?.name || "Select a company"}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 transition-transform ${
                        isCompanyOpen ? "rotate-180" : ""
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
                  </button>

                  {isCompanyOpen && (
                    <div className="absolute z-50 w-full mt-2 bg-gray-800 backdrop-blur-sm border border-gray-700 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                      {myCompanies.map((company) => (
                        <button
                          key={company.id}
                          type="button"
                          onClick={() => handleCompanySelect(company)}
                          className="w-full px-4 py-3 text-left hover:bg-gray-700 text-gray-300 first:rounded-t-lg last:rounded-b-lg flex items-center gap-3 group transition-all"
                        >
                          {company.logo?.url && (
                            <div className="relative w-8 h-8 rounded overflow-hidden flex-shrink-0">
                              <Image
                                src={company.logo.url}
                                alt={company.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}
                          <span className="group-hover:text-orange-400 transition-colors">
                            {company.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleAddNewCompany}
                  className="px-6 w-[250px] py-3 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-lg font-medium hover:from-orange-700 hover:to-orange-800 transition-all duration-200 shadow-lg flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Add New Company
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-3 gap-6 relative z-10">
          {/* First Column - 2/3 of the width */}
          <div className="col-span-2 space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Company Name *
              </label>
              <input
                {...companyMethods.register("name")}
                className="w-full bg-gray-700/50 outline-none border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="Enter your company name"
              />
              {companyMethods.formState.errors.name && (
                <p className="mt-2 text-sm text-red-400">
                  {companyMethods.formState.errors.name.message}
                </p>
              )}
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Company Email *
              </label>
              <input
                type="email"
                {...companyMethods.register("email")}
                className="w-full bg-gray-700/50 border outline-none border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                placeholder="contact@example.com"
              />
              {companyMethods.formState.errors.email && (
                <p className="mt-2 text-sm text-red-400">
                  {companyMethods.formState.errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Second Column - 1/3 of the width (Full Height) */}
          <div className="col-span-1 relative z-10">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg h-full flex flex-col justify-center ">
              <div className="flex justify-between items-center  mb-4">
                <label className="block text-sm font-medium text-gray-300">
                  Company Logo
                </label>
                {logoPreview ? (
                  <button type="button" onClick={handleDeleteLogo}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-red-500 hover:text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                ) : (
                  <></>
                )}
              </div>

              <label className="relative w-full h-full cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-600/50 rounded-lg hover:border-orange-500 hover:bg-gray-600/50 transition-all group">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoChange}
                  className="hidden"
                  disabled={isUploading}
                />

                {logoPreview ? (
                  // If image is uploaded, display it full height
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={logoPreview}
                      alt="Logo preview"
                      fill={true}
                      priority
                      className="rounded-lg border border-gray-700 object-contain"
                    />
                  </div>
                ) : (
                  // Show upload button when no image is selected
                  <div className="flex flex-col items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-gray-400 group-hover:text-orange-500 transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                    <p className="mt-2 text-sm text-gray-400 group-hover:text-orange-500 transition-colors">
                      Click to upload logo
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      PNG, JPG, WebP up to 5MB
                    </p>
                  </div>
                )}
              </label>

              {companyMethods.formState.errors.file && (
                <p className="mt-2 text-sm text-red-400">
                  {companyMethods.formState.errors.file.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Company Location *
          </label>
          <input
            {...companyMethods.register("location")}
            className="w-full bg-gray-700/50 border outline-none border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            placeholder="Enter your company location"
          />
          {companyMethods.formState.errors.location && (
            <p className="mt-2 text-sm text-red-400">
              {companyMethods.formState.errors.location.message}
            </p>
          )}
        </div>

        {/* Detailed Information Section */}
        <div className="space-y-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              About Company *
            </label>
            <textarea
              {...companyMethods.register("about")}
              rows={4}
              className="w-full bg-gray-700/50 border outline-none border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="Tell us about your company..."
            />
            {companyMethods.formState.errors.about && (
              <p className="mt-2 text-sm text-red-400">
                {companyMethods.formState.errors.about.message}
              </p>
            )}
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Company Culture
            </label>
            <textarea
              {...companyMethods.register("culture")}
              rows={4}
              className="w-full bg-gray-700/50 border outline-none border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="Describe your company culture..."
            />
            {companyMethods.formState.errors.culture && (
              <p className="mt-2 text-sm text-red-400">
                {companyMethods.formState.errors.culture.message}
              </p>
            )}
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Company Benefits
            </label>
            <textarea
              {...companyMethods.register("benefits")}
              rows={4}
              className="w-full bg-gray-700/50 border outline-none border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="List your company benefits..."
            />
            {companyMethods.formState.errors.benefits && (
              <p className="mt-2 text-sm text-red-400">
                {companyMethods.formState.errors.benefits.message}
              </p>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default CompanyForm;
