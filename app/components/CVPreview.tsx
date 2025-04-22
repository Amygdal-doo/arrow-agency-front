"use client";
import { useApplicant } from "@/providers/ApplicantDetailsProvider";
import React, { useState } from "react";
import CVPreviewOne from "./templates/CVPreviewOne";
import CVPreviewTwo from "./templates/CVPreviewTwo";
import CVPreviewThree from "./templates/CVPreviewThree";
import PublishCVModal from "./PublishCVModal";
import { handleDownload } from "@/core/consts/handleDownload";

const CVPreview = () => {
  const {
    applicant,
    templateId,
    primaryColor,
    publicCv,
    summary,
    currentSkills,
    hobbies,
    currentExperience,
    currentProjects,
    currentEducations,
    currentCertificates,
    currentCourses,
    currentSocials,
    companyName,
    currentLanguages,
    showPersonalInfo,
    showCompanyInfo,
    firstName,
    lastName,
    email,
    phone,
    companyLogo,
    tertiaryColor,
  } = useApplicant();

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full xl:w-1/2 bg-gray-800/50 rounded-lg p-8 border border-gray-700 overflow-y-auto max-h-[80vh] scrollbar-hide">
      <div className="lg:flex justify-between items-end pb-8 border-b border-gray-700">
        <h1 className="text-4xl font-bold text-white">CV Preview</h1>

        <div className="flex flex-col md:flex-row gap-4">
          {applicant && (
            <button
              onClick={() => {
                if (publicCv) {
                  window.open(`/public-cv/${applicant?.cv.id}`, "_blank");
                } else {
                  setShowModal(true);
                }
              }}
              className="mt-4 font-bold text-center bg-orange-600  hover:bg-orange-700 hover:shadow-orange-500/25 text-white py-2 px-8 rounded-md transition-colors"
            >
              Publish CV
            </button>
          )}

          <button
            onClick={() => applicant && handleDownload(applicant.file)}
            className="mt-4 font-bold text-center bg-orange-600  hover:bg-orange-700 hover:shadow-orange-500/25 text-white py-2 px-8 rounded-md transition-colors"
          >
            Download CV
          </button>
        </div>
      </div>

      {/* Mobile Message */}
      <div className="md:hidden flex flex-col items-center justify-center py-12 text-center space-y-4">
        <svg
          className="w-16 h-16 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
        <h3 className="text-xl font-semibold text-gray-300">
          CV Preview is optimized for larger screens
        </h3>
        <p className="text-gray-400 max-w-md">
          Please download the PDF file to view your CV on mobile devices, or
          switch to a larger screen for the preview.
        </p>
      </div>

      {/* CV Preview for larger screens */}
      <div className="hidden md:block">
        {templateId === "cv4" && (
          <CVPreviewThree
            summary={summary}
            currentSkills={currentSkills}
            hobbies={hobbies}
            currentExperience={currentExperience}
            currentProjects={currentProjects}
            currentEducations={currentEducations}
            currentCertificates={currentCertificates}
            currentCourses={currentCourses}
            currentSocials={currentSocials}
            companyName={companyName}
            currentLanguages={currentLanguages}
            showPersonalInfo={showPersonalInfo}
            showCompanyInfo={showCompanyInfo}
            firstName={firstName}
            lastName={lastName}
            email={email}
            phone={phone}
            companyLogo={companyLogo}
            primaryColor={primaryColor}
            tertiaryColor={tertiaryColor}
          />
        )}
        {templateId === "cv3" && (
          <CVPreviewTwo
            summary={summary}
            currentSkills={currentSkills}
            hobbies={hobbies}
            currentExperience={currentExperience}
            currentProjects={currentProjects}
            currentEducations={currentEducations}
            currentCertificates={currentCertificates}
            currentCourses={currentCourses}
            currentSocials={currentSocials}
            companyName={companyName}
            currentLanguages={currentLanguages}
            showPersonalInfo={showPersonalInfo}
            showCompanyInfo={showCompanyInfo}
            firstName={firstName}
            lastName={lastName}
            email={email}
            phone={phone}
            companyLogo={companyLogo}
            primaryColor={primaryColor}
          />
        )}
        {templateId === "cv2" && (
          <CVPreviewOne
            summary={summary}
            currentSkills={currentSkills}
            hobbies={hobbies}
            currentExperience={currentExperience}
            currentProjects={currentProjects}
            currentEducations={currentEducations}
            currentCertificates={currentCertificates}
            currentCourses={currentCourses}
            currentSocials={currentSocials}
            companyName={companyName}
            currentLanguages={currentLanguages}
            showPersonalInfo={showPersonalInfo}
            showCompanyInfo={showCompanyInfo}
            firstName={firstName}
            lastName={lastName}
            email={email}
            phone={phone}
            companyLogo={companyLogo}
            primaryColor={primaryColor}
          />
        )}
      </div>

      <PublishCVModal setShowModal={setShowModal} isOpen={showModal} />
    </div>
  );
};

export default CVPreview;
