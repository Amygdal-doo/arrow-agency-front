import React, { useState } from "react";
import { CompanyFormData } from "./CompanyForm";
import { JobFormData } from "./JobForm";
import Image from "next/image";
import { useJob } from "@/providers/JobProvider";

interface PreviewProps {
  jobData: JobFormData;
  companyData: CompanyFormData;
}

const Preview = ({ jobData, companyData }: PreviewProps) => {
  const { selectedSkills } = useJob();
  const [activeView, setActiveView] = useState<"combined" | "job" | "company">(
    "combined"
  );

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  const CombinedView = () => (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Job Details - Left Side (3 columns) */}
      <div className="lg:col-span-3 space-y-6 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">{jobData.name}</h3>
          <div className="flex flex-wrap gap-4 mb-6">
            <span className="px-3 py-1 bg-orange-500/10 text-orange-500 rounded-full text-sm">
              {jobData.jobType.replace("_", " ")}
            </span>
            <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm">
              {jobData.remote ? "Remote" : "On-site"}
            </span>
            <span className="px-3 py-1 bg-green-500/10 text-green-500 rounded-full text-sm">
              {jobData.salary}
            </span>
          </div>
          <div className="space-y-4 text-gray-300">
            <p className="text-sm">
              <span className="font-medium text-gray-200">Location:</span>{" "}
              {jobData.worldwide ? "Worldwide" : companyData.location}
            </p>
            <p className="text-sm">
              <span className="font-medium text-gray-200">Apply Before:</span>{" "}
              {formatDate(jobData.applyBeforeDate)}
            </p>
            <p className="text-sm">
              <span className="font-medium text-gray-200">Vacancies:</span>{" "}
              {jobData.noOfVacancies}
            </p>
          </div>
        </div>

        <div className="pt-10">
          <h4 className="text-lg font-semibold text-white mb-4">Description</h4>
          <p className="text-gray-300 whitespace-pre-wrap">
            {jobData.description}
          </p>
        </div>

        <div className="pt-10">
          <h4 className="text-lg font-semibold text-white mb-4">
            Required Skills
          </h4>
          <div className="flex flex-wrap gap-2">
            {selectedSkills.map((skill) => (
              <span
                key={skill.id}
                className="px-3 py-1.5 bg-gray-700/50 text-gray-300 rounded-lg text-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Company Details - Right Side (2 columns) */}
      <div className="lg:col-span-1 space-y-6 h-full">
        <div className="bg-gray-800/50 backdrop-blur-sm h-full rounded-xl p-6 border border-gray-700/50 shadow-lg">
          <div className="flex flex-col items-center gap-4 mb-6">
            {companyData.file && (
              <div className="relative w-32 h-32 rounded-lg overflow-hidden">
                <Image
                  src={URL.createObjectURL(companyData.file)}
                  alt={companyData.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <h3 className="text-xl font-bold text-white text-center">
                {companyData.name}
              </h3>
              <p className="text-gray-400 text-center">
                {companyData.location}
              </p>
              <p className="text-orange-500 text-center">{companyData.email}</p>
            </div>
          </div>
          <div className="space-y-4 text-center mt-10">
            <button
              onClick={() => setActiveView("company")}
              className="px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-gray-600/50 transition-all text-sm"
            >
              View Company Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const CompanyView = () => (
    <div className="space-y-6">
      <button
        onClick={() => setActiveView("combined")}
        className="text-orange-500 hover:text-orange-600 transition-all"
      >
        ← Back to Preview
      </button>

      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
        <div className="flex items-center gap-6 mb-8">
          {companyData.file && (
            <div className="relative w-32 h-32 rounded-lg overflow-hidden">
              <Image
                src={URL.createObjectURL(companyData.file)}
                alt={companyData.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div>
            <h2 className="text-3xl font-bold text-white">
              {companyData.name}
            </h2>
            <p className="text-gray-400">{companyData.location}</p>
            <p className="text-orange-500">{companyData.email}</p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">About Us</h3>
            <p className="text-gray-300 whitespace-pre-wrap">
              {companyData.about}
            </p>
          </div>

          {companyData.culture && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Our Culture
              </h3>
              <p className="text-gray-300 whitespace-pre-wrap">
                {companyData.culture}
              </p>
            </div>
          )}

          {companyData.benefits && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Benefits
              </h3>
              <p className="text-gray-300 whitespace-pre-wrap">
                {companyData.benefits}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto py-8">
      {activeView === "combined" && <CombinedView />}
      {activeView === "company" && <CompanyView />}
    </div>
  );
};

export default Preview;
