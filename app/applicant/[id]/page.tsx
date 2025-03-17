"use client";

import CertificateField from "@/app/components/CertificateField";
import CourseField from "@/app/components/CourseField";
import CVPreview from "@/app/components/CVPreview";
import EducationField from "@/app/components/EducationField";
import ExperienceField from "@/app/components/ExperienceField";
import HobbyField from "@/app/components/HobbyField";
import LanguageField from "@/app/components/LanguageField";
import ProjectField from "@/app/components/ProjectField";
import SkillField from "@/app/components/SkillField";
import SocialField from "@/app/components/SocialField";
import { useApplicant } from "@/providers/ApplicantDetailsProvider";

import React from "react";

const ApplicantDetails = () => {
  const {
    error,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    phone,
    setPhone,
    summary,
    setSummary,
    // updateApplicant,
    applicant,
  } = useApplicant();

  const handleDownload = (fileUrl: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // const handleSave = async () => {
  //   await updateApplicant();
  //   // You can add save functionality here (API call to update applicant data)cl
  //   console.log("Saved Applicant:");
  // };

  // if (loading) {
  //   return <div className="text-white text-center py-12">Loading...</div>;
  // }

  if (error) {
    return <div className="text-red-500 text-center py-12">{error}</div>;
  }

  if (!applicant) {
    return (
      <div className="text-white text-center py-12">No applicant found.</div>
    );
  }

  return (
    <div className="min-h-screen bg-[#01070a] text-white py-12 pt-40">
      {/* <pre>{JSON.stringify(applicant, null, 2)}</pre> */}
      <div className="container mx-auto px-4 xl:flex xl:space-x-5 space-y-8 xl:space-y-0">
        <div className="w-full xl:w-1/2 overflow-y-auto max-h-[80vh] scrollbar-hide">
          {/* Header Section */}
          <div className="space-y-6 mb-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-300">
                Personal Information
              </h2>
              <div className="h-px flex-1 bg-gray-700 mx-4" />
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>

          <div className="">
            {/* Left Column - CV Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* CV Summary */}
              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-300">
                    CV Summary
                  </h2>
                  <div className="h-px flex-1 bg-gray-700 mx-4" />
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
                  <textarea
                    rows={10}
                    placeholder="Write your CV summary here..."
                    value={summary || ""}
                    onChange={(e) => setSummary(e.target.value)}
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                  />
                </div>
              </div>

              <EducationField />

              <ProjectField />

              <ExperienceField />

              <CertificateField />

              <CourseField />

              <SkillField />

              <LanguageField />

              <SocialField />

              <HobbyField />

              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-300">File</h2>
                  <div className="h-px flex-1 bg-gray-700 mx-4" />
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
                  <div className="space-y-3">
                    {applicant.file && (
                      <div
                        onClick={() =>
                          handleDownload(
                            applicant.file.url,
                            applicant.file.name
                          )
                        }
                        className="flex items-center justify-between p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 cursor-pointer transition-all"
                      >
                        <span className="text-gray-300">
                          {applicant.file.name}
                          {applicant.file.extension}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CVPreview />
      </div>
    </div>
  );
};

export default ApplicantDetails;
