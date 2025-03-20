"use client";
import { useApplicant } from "@/providers/ApplicantDetailsProvider";
import Image from "next/image";
import React from "react";

const CVPreviewOne = () => {
  const {
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
    primaryColor,
  } = useApplicant();

  return (
    <div className="w-full min-h-[29.7cm] p-10 mx-auto bg-white shadow-md rounded-lg font-['Inter']">
      {/* Header Section */}
      <div className="mb-12">
        {showCompanyInfo ? (
          <div className="flex items-center gap-6 pb-6 border-b border-gray-200">
            <Image
              src={companyLogo.url}
              alt="Company Logo"
              className="w-16 h-16 rounded-lg bg-white p-2"
              width={companyLogo.width}
              height={companyLogo.height}
            />
            <h2 className="text-xl font-semibold text-gray-900">
              {companyName}
            </h2>
          </div>
        ) : (
          ""
        )}

        {showPersonalInfo ? (
          <div className="mt-6 flex flex-col gap-2">
            <h1 className="text-2xl font-semibold text-gray-900">
              {firstName} {lastName}
            </h1>
            <div
              className="flex items-center gap-4"
              style={{ color: primaryColor }}
            >
              <span className="flex items-center gap-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                {email}
              </span>
              <span className="flex items-center gap-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {phone}
              </span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="grid grid-cols-[2.5fr,1fr] gap-12">
        {/* Main Content */}
        <div className="space-y-10">
          {summary && (
            <section>
              <p className="text-gray-600 leading-relaxed">{summary}</p>
            </section>
          )}

          {currentExperience?.length > 0 && (
            <section>
              <h2
                style={{ color: primaryColor }}
                className="text-xs font-semibold  uppercase tracking-wider mb-6 pb-3 border-b border-gray-200"
              >
                Work Experience
              </h2>
              <div className="space-y-7">
                {currentExperience.map((exp, index) => (
                  <div key={index} className="relative">
                    <div className="flex flex-col gap-1.5 mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {exp.position}
                      </h3>
                      <p className="text-gray-600">{exp.company}</p>
                      <span className="text-xs text-gray-400 font-medium">
                        {exp.startDate ? exp.startDate : ""}
                        {exp.startDate && " - "}
                        {exp.endDate ? exp.endDate : "Present"}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {currentEducations?.length > 0 && (
            <section>
              <h2
                style={{ color: primaryColor }}
                className="text-xs font-semibold  uppercase tracking-wider mb-6 pb-3 border-b border-gray-200"
              >
                Education
              </h2>
              <div className="space-y-6">
                {currentEducations.map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {edu.degree} in {edu.field}
                      </h3>
                      <p className="text-gray-600">{edu.institution}</p>
                      <span className="text-xs text-gray-400 font-medium">
                        {edu.startDate ? edu.startDate : ""}
                        {edu.startDate && " - "}
                        {edu.endDate ? edu.endDate : "Present"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {currentProjects?.length > 0 && (
            <section>
              <h2
                style={{ color: primaryColor }}
                className="text-xs font-semibold  uppercase tracking-wider mb-6 pb-3 border-b border-gray-200"
              >
                Projects
              </h2>
              <div className="space-y-6">
                {currentProjects.map((project, index) => (
                  <div key={index} className="relative">
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {project.name}
                      </h3>
                      <p className="text-gray-600">{project.description}</p>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:opacity-80 transition-opacity"
                          style={{ color: primaryColor }}
                        >
                          {project.url}
                        </a>
                      )}
                      <span className="text-xs text-gray-400 font-medium">
                        {project.startDate ? project.startDate : ""}
                        {project.startDate && " - "}
                        {project.endDate ? project.endDate : "Present"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {currentCourses?.length > 0 && (
            <section>
              <h2
                style={{ color: primaryColor }}
                className="text-xs font-semibold  uppercase tracking-wider mb-6 pb-3 border-b border-gray-200"
              >
                Courses
              </h2>
              <div className="space-y-6">
                {currentCourses.map((course, index) => (
                  <div key={index} className="relative">
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {course.name}
                      </h3>
                      {course.url && (
                        <a
                          href={course.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:opacity-80 transition-opacity"
                          style={{ color: primaryColor }}
                        >
                          View Course →
                        </a>
                      )}
                      <span className="text-xs text-gray-400 font-medium">
                        {course.startDate ? course.startDate : ""}
                        {course.startDate && " - "}
                        {course.endDate ? course.endDate : "Present"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {currentCertificates?.length > 0 && (
            <section>
              <h2
                style={{ color: primaryColor }}
                className="text-xs font-semibold uppercase tracking-wider mb-6 pb-3 border-b border-gray-200"
              >
                Certificates
              </h2>
              <div className="space-y-6">
                {currentCertificates.map((cert, index) => (
                  <div key={index} className="relative">
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {cert.name}
                      </h3>
                      <p className="text-gray-600">{cert.issuer}</p>
                      {cert.url && (
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:opacity-80 transition-opacity"
                          style={{ color: primaryColor }}
                        >
                          View Certificate →
                        </a>
                      )}
                      <span className="text-xs text-gray-400 font-medium">
                        {cert.issueDate && cert.issueDate}
                        {cert.issueDate && " - "}
                        {cert.expirationDate && cert.expirationDate}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-10">
          {currentSkills?.length > 0 && (
            <section>
              <h2
                style={{ color: primaryColor }}
                className="text-xs font-semibold  uppercase tracking-wider mb-6 pb-3 border-b border-gray-200"
              >
                Skills
              </h2>
              <div className="space-y-3">
                {currentSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-200 last:border-none"
                  >
                    <span className="text-gray-900">{skill.name}</span>
                    <span className="text-sm text-gray-500 font-medium">
                      {skill.efficiency}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {currentLanguages?.length > 0 && (
            <section>
              <h2
                style={{ color: primaryColor }}
                className="text-xs font-semibold  uppercase tracking-wider mb-6 pb-3 border-b border-gray-200"
              >
                Languages
              </h2>
              <div className="space-y-3">
                {currentLanguages.map((lang, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-200 last:border-none"
                  >
                    <span className="text-gray-900">{lang.name}</span>
                    <span className="text-sm text-gray-500 font-medium">
                      {lang.efficiency}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {currentSocials?.length > 0 && (
            <section>
              <h2
                style={{ color: primaryColor }}
                className="text-xs font-semibold  uppercase tracking-wider mb-6 pb-3 border-b border-gray-200"
              >
                Social Links
              </h2>
              <div className="space-y-3">
                {currentSocials.map((social) => (
                  <a
                    key={social.id}
                    href={
                      social.url.startsWith("http")
                        ? social.url
                        : `https://${social.url}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 block transition-opacity"
                    style={{ color: primaryColor }}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </section>
          )}

          {hobbies?.length > 0 && (
            <section>
              <h2
                style={{ color: primaryColor }}
                className="text-xs font-semibold  uppercase tracking-wider mb-6 pb-3 border-b border-gray-200"
              >
                Hobbies
              </h2>
              <div className="space-y-2">
                {hobbies.map((hobby, index) => (
                  <p key={index} className="text-gray-600">
                    {hobby}
                  </p>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default CVPreviewOne;
