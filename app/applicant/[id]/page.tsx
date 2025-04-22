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
import { handleDownload } from "@/core/consts/handleDownload";
import { templateColors } from "@/core/consts/templateColors";
import { templates } from "@/core/consts/templates";
import { useApplicant } from "@/providers/ApplicantDetailsProvider";
import { useProfile } from "@/providers/ProfileInfoProvider";
import Image from "next/image";

import React, { useEffect, useState } from "react";

const ApplicantDetails = () => {
  const {
    error,
    loading,
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
    showPersonalInfo,
    setShowPersonalInfo,
    showCompanyInfo,
    setShowCompanyInfo,
    applicant,
    companyLogo,
    companyName,
    setCompanyName,
    setCompanyLogo,
    publicCv,
    setPublicCv,
    setUpdating,
    primaryColor,
    setPrimaryColor,
    setSecondaryColor,
    setTertiaryColor,
    templateId,
    setTemplateId,
  } = useApplicant();

  const { profile } = useProfile();

  const [isLogoDropdownOpen, setIsLogoDropdownOpen] = useState(false);

  const [isPersonalInfoChanged, setIsPersonalInfoChanged] = useState(false);
  const [originalInfo, setOriginalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [isTemplateChanged, setIsTemplateChanged] = useState(false);

  useEffect(() => {
    if (applicant) {
      setOriginalInfo({
        firstName: applicant.cv.firstName,
        lastName: applicant.cv.lastName,
        email: applicant.cv.email,
        phone: applicant.cv.phone,
      });
    }
  }, [applicant]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#01070a] to-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

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
      {/* <pre>{JSON.stringify(companyLogo, null, 2)}</pre> */}
      <div className="container mx-auto px-4 xl:flex xl:space-x-5 space-y-8 xl:space-y-0">
        <div className="w-full xl:w-1/2 overflow-y-auto max-h-[80vh] scrollbar-hide">
          {/* Header Section */}

          <div className="space-y-6 mb-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-300">
                CV Template & Style
              </h2>
              <div className="h-px flex-1 bg-gray-700 mx-4" />
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-lg space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-300">
                  Template
                </h3>
                <div className="flex flex-wrap gap-4">
                  {templates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => {
                        setTemplateId(template.id);
                        setIsTemplateChanged(true);
                      }}
                      className={`px-4 py-3 rounded-md transition-all  w-full sm:w-auto ${
                        templateId === template.id
                          ? "bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                    >
                      {template.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-300">
                  Color Theme
                </h3>
                <div className="flex space-x-4 justify-start overflow-x-auto bg-gray-800 rounded-xl p-3 border border-gray-700/50 shadow-lg">
                  {templateColors.map((color) => (
                    <div
                      key={color.id}
                      onClick={() => {
                        setPrimaryColor(color.primary);
                        setSecondaryColor(color.secondary);
                        setTertiaryColor(color.tertiary);
                        setIsTemplateChanged(true);
                      }}
                      className="group cursor-pointer relative"
                    >
                      <div className="flex flex-col items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded-xl shadow-lg transition-all duration-300 ${
                            primaryColor === color.primary
                              ? "ring-2 ring-offset-2 ring-offset-gray-800 ring-orange-500 scale-110"
                              : "hover:scale-105"
                          }`}
                        >
                          <div
                            className="w-full h-full rounded-xl"
                            style={{ backgroundColor: color.primary }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setUpdating(true);
                  setIsTemplateChanged(false);
                }}
                disabled={!isTemplateChanged}
                className={`w-full p-3 rounded-lg font-medium transition-all duration-200 shadow-lg ${
                  isTemplateChanged
                    ? "bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white"
                    : "bg-gray-600 text-gray-400 cursor-not-allowed"
                }`}
              >
                {isTemplateChanged
                  ? "Save Template Changes"
                  : "No Changes to Update"}
              </button>
            </div>
          </div>
          <div className="space-y-6 mb-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-300">
                Personal Information
              </h2>
              <div className="h-px flex-1 bg-gray-700 mx-4" />
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={showPersonalInfo}
                  onChange={() => {
                    setUpdating(true);
                    setShowPersonalInfo(!showPersonalInfo);
                  }}
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-300">
                  {showPersonalInfo ? "Visible" : "Hidden"}
                </span>
              </label>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    setIsPersonalInfoChanged(
                      e.target.value !== originalInfo.firstName ||
                        lastName !== originalInfo.lastName ||
                        email !== originalInfo.email ||
                        phone !== originalInfo.phone
                    );
                  }}
                  className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    setIsPersonalInfoChanged(
                      e.target.value !== originalInfo.firstName ||
                        lastName !== originalInfo.lastName ||
                        email !== originalInfo.email ||
                        phone !== originalInfo.phone
                    );
                  }}
                  className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsPersonalInfoChanged(
                      e.target.value !== originalInfo.firstName ||
                        lastName !== originalInfo.lastName ||
                        email !== originalInfo.email ||
                        phone !== originalInfo.phone
                    );
                  }}
                  className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setIsPersonalInfoChanged(
                      e.target.value !== originalInfo.firstName ||
                        lastName !== originalInfo.lastName ||
                        email !== originalInfo.email ||
                        phone !== originalInfo.phone
                    );
                  }}
                  className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>
              <button
                onClick={() => {
                  setUpdating(true);
                  setIsPersonalInfoChanged(false);
                }}
                disabled={!isPersonalInfoChanged}
                className={`mt-4 w-full p-3 rounded-lg font-medium transition-all duration-200 shadow-lg ${
                  isPersonalInfoChanged
                    ? "bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white"
                    : "bg-gray-600 text-gray-400 cursor-not-allowed"
                }`}
              >
                {isPersonalInfoChanged
                  ? "Update Personal Info"
                  : "No Changes to Update"}
              </button>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-300">
                Company Information
              </h2>
              <div className="h-px flex-1 bg-gray-700 mx-4" />
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={showCompanyInfo}
                  onChange={() => {
                    setUpdating(true);
                    setShowCompanyInfo(!showCompanyInfo);
                  }}
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-300">
                  {showCompanyInfo ? "Visible" : "Hidden"}
                </span>
              </label>
            </div>

            <div className="bg-gray-800/50  rounded-xl p-6 border border-gray-700/50 shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Company name"
                  value={companyName}
                  onChange={(e) => {
                    setUpdating(true);
                    setCompanyName(e.target.value);
                  }}
                  className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />

                <div className="relative">
                  <div
                    onClick={() => setIsLogoDropdownOpen(!isLogoDropdownOpen)}
                    className={` bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 cursor-pointer flex justify-between items-center ${
                      isLogoDropdownOpen ? "ring-2 ring-orange-500" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {companyLogo ? (
                        <>
                          <Image
                            src={companyLogo.url}
                            alt={companyLogo.name}
                            width={40}
                            height={40}
                            className="rounded-md"
                          />
                          <span>{companyLogo.name}</span>
                        </>
                      ) : (
                        <span className="text-gray-500">
                          Select Company Logo
                        </span>
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
                    <div className="absolute z-50 w-full mt-2 bg-gray-800  border border-gray-700 rounded-lg shadow-xl">
                      {profile.companyLogos.map((logo) => (
                        <div
                          key={logo.id}
                          onClick={() => {
                            setUpdating(true);
                            setCompanyLogo(logo);
                            setIsLogoDropdownOpen(false);
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
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-300">
                CV Visibility
              </h2>
              <div className="h-px flex-1 bg-gray-700 mx-4" />
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-lg">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-lg font-medium text-gray-300">
                      Make CV Public
                    </label>
                    <p className="text-sm text-gray-400 mt-1">
                      {publicCv
                        ? "Your CV is visible to everyone with the link"
                        : "Only you can see your CV"}
                    </p>
                  </div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={publicCv}
                      onChange={(e) => {
                        setUpdating(true);
                        setPublicCv(e.target.checked);
                      }}
                      className="sr-only peer"
                    />
                    <div className="relative w-14 h-7 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-orange-600"></div>
                  </label>
                </div>

                {publicCv && (
                  <div className="flex items-center space-x-2 p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-orange-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-orange-500">
                      Anyone with the link can view your CV
                    </span>
                  </div>
                )}
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

                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-lg">
                  <textarea
                    rows={10}
                    placeholder="Write your CV summary here..."
                    value={summary || ""}
                    onChange={(e) => {
                      setUpdating(true);
                      setSummary(e.target.value);
                    }}
                    className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
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

                <div className="bg-gray-800/50  rounded-xl p-6 border border-gray-700/50 shadow-lg">
                  <div className="space-y-3">
                    {applicant.file && (
                      <div
                        onClick={() => handleDownload(applicant.file)}
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
