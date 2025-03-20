"use client";
import { useApplicant } from "@/providers/ApplicantDetailsProvider";
import Image from "next/image";
// import Image from "next/image";
import React from "react";

const CVPreviewThree = () => {
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
    companyLogo,
    primaryColor,
    tertiaryColor,
    firstName,
    lastName,
    email,
    phone,
  } = useApplicant();

  return (
    <div className="w-full min-h-[29.7cm] mx-auto bg-white shadow-md rounded-2xl overflow-hidden font-['Space_Grotesk'] grid grid-cols-[280px,1fr]">
      {/* Sidebar */}
      <div className="p-8 text-white" style={{ backgroundColor: primaryColor }}>
        {showCompanyInfo ? (
          <div className="text-center mb-8 pb-6 border-b border-white/10">
            {companyLogo && (
              <Image
                src={companyLogo.url}
                alt="Company Logo"
                width={companyLogo.width}
                height={companyLogo.height}
                className="w-16 h-16 mb-4 mx-auto rounded-lg bg-white p-2"
              />
            )}
            <h2 className="text-xl font-semibold text-white">{companyName}</h2>
          </div>
        ) : (
          ""
        )}

        {showPersonalInfo ? (
          <div className="mt-6 mb-8 flex flex-col gap-2 border-b border-white/10 pb-6">
            <h1 className="text-2xl font-semibold text-white">
              {firstName} {lastName}
            </h1>
            <div className="flex flex-col space-y-3">
              {email !== "null" && email && (
                <span className="flex items-center gap-2 text-white">
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
              )}
              {phone !== "null" && phone && (
                <span className="flex items-center gap-2 text-white">
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
              )}
            </div>
          </div>
        ) : (
          ""
        )}

        {currentSkills?.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <h2
                className="text-xl uppercase tracking-wider"
                style={{ color: tertiaryColor }}
              >
                Skills
              </h2>
              <div
                className="flex-1 h-0.5 rounded"
                style={{
                  background: `linear-gradient(to right, ${tertiaryColor}, #a855f7)`,
                }}
              ></div>
            </div>
            <div className="space-y-3">
              {currentSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white/[10] p-4 rounded-lg flex justify-between items-center"
                >
                  <span className="font-medium" style={{ color: primaryColor }}>
                    {skill.name}
                  </span>
                  <span
                    className="text-sm px-3 py-1 rounded-xl"
                    style={{
                      background: `linear-gradient(to right, ${tertiaryColor}, #a855f7)`,
                    }}
                  >
                    {skill.efficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentLanguages?.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <h2
                className="text-xl  uppercase tracking-wider"
                style={{ color: tertiaryColor }}
              >
                Languages
              </h2>
              <div
                className="flex-1 h-0.5  rounded"
                style={{
                  background: `linear-gradient(to right, ${tertiaryColor}, #a855f7)`,
                }}
              ></div>
            </div>
            <div className="space-y-4">
              {currentLanguages.map((lang, index) => (
                <div key={index} className="flex justify-between text-white">
                  <span>{lang.name}</span>
                  <span style={{ color: tertiaryColor }}>
                    {lang.efficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {hobbies?.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <h2
                className="text-xl  uppercase tracking-wider"
                style={{ color: tertiaryColor }}
              >
                Hobbies
              </h2>
              <div
                className="flex-1 h-0.5 rounded"
                style={{
                  background: `linear-gradient(to right, ${tertiaryColor}, #a855f7)`,
                }}
              ></div>
            </div>
            <div className="space-y-2">
              {hobbies.map((hobby, index) => (
                <p key={index} className="text-white">
                  {hobby}
                </p>
              ))}
            </div>
          </div>
        )}

        {currentSocials?.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <h2
                className="text-xl uppercase tracking-wider"
                style={{ color: tertiaryColor }}
              >
                Connect
              </h2>
              <div
                className="flex-1 h-0.5 rounded"
                style={{
                  background: `linear-gradient(to right, ${tertiaryColor}, #a855f7)`,
                }}
              ></div>
            </div>
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
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-lg text-white"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="p-12">
        {summary && (
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <h2
                style={{ color: tertiaryColor }}
                className="text-xl uppercase tracking-wider"
              >
                About
              </h2>
              <div
                className="flex-1 h-0.5 rounded"
                style={{
                  background: `linear-gradient(to right, ${tertiaryColor}, #a855f7)`,
                }}
              ></div>
            </div>
            <p className="text-slate-600">{summary}</p>
          </div>
        )}

        {currentExperience?.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <h2
                style={{ color: tertiaryColor }}
                className="text-xl uppercase tracking-wider"
              >
                Experience
              </h2>
              <div
                style={{
                  background: `linear-gradient(to right, ${tertiaryColor}, #a855f7)`,
                }}
                className="flex-1 h-0.5 rounded"
              ></div>
            </div>
            <div className="space-y-4">
              {currentExperience.map((exp, index) => (
                <div
                  key={index}
                  className="p-6 bg-slate-50 rounded-xl hover:translate-x-2 transition-transform"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {exp.position}
                  </h3>
                  <div
                    style={{ color: tertiaryColor }}
                    className="font-medium mt-1"
                  >
                    {exp.company}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    {exp.startDate ? exp.startDate : ""}
                    {exp.startDate && " - "}
                    {exp.endDate ? exp.endDate : "Present"}
                  </div>
                  <p className="mt-4 text-slate-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentProjects?.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <h2
                style={{ color: tertiaryColor }}
                className="text-xl  uppercase tracking-wider"
              >
                Projects
              </h2>
              <div
                style={{
                  background: `linear-gradient(to right, ${tertiaryColor}, #a855f7)`,
                }}
                className="flex-1 h-0.5 rounded"
              ></div>
            </div>
            <div className="space-y-4">
              {currentProjects.map((project, index) => (
                <div
                  key={index}
                  className="p-6 bg-slate-50 rounded-xl hover:translate-x-2 transition-transform"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {project.name}
                  </h3>
                  <div className="text-sm text-slate-400 mt-1">
                    {project.startDate ? project.startDate : ""}
                    {project.startDate && " - "}
                    {project.endDate ? project.endDate : "Present"}
                  </div>
                  <p className="mt-4 text-slate-600">{project.description}</p>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: `linear-gradient(to right, ${tertiaryColor}, #a855f7)`,
                      }}
                      className="inline-block mt-2 px-4 py-1 text-sm text-white rounded-full"
                    >
                      View Project
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {currentCourses?.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <h2
                style={{ color: tertiaryColor }}
                className="text-xl  uppercase tracking-wider"
              >
                Courses
              </h2>
              <div
                style={{
                  background: `linear-gradient(to right, ${tertiaryColor}, #a855f7)`,
                }}
                className="flex-1 h-0.5  rounded"
              ></div>
            </div>
            <div className="space-y-4">
              {currentCourses.map((course, index) => (
                <div
                  key={index}
                  className="p-6 bg-slate-50 rounded-xl hover:translate-x-2 transition-transform"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {course.name}
                  </h3>
                  <div className="text-sm text-slate-400 mt-1">
                    {course.startDate ? course.startDate : ""}
                    {course.startDate && " - "}
                    {course.endDate ? course.endDate : "Present"}
                  </div>
                  {course.url && (
                    <a
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-4 py-1 text-sm text-white rounded-full"
                      style={{
                        background: `linear-gradient(to right, ${tertiaryColor}, #a855f7)`,
                      }}
                    >
                      View Course
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {currentEducations?.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <h2
                style={{ color: tertiaryColor }}
                className="text-xl uppercase tracking-wider"
              >
                Education
              </h2>
              <div
                style={{
                  background: `linear-gradient(to right, ${tertiaryColor}, #a855f7)`,
                }}
                className="flex-1 h-0.5  rounded"
              ></div>
            </div>
            <div className="space-y-4">
              {currentEducations.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 bg-slate-50 rounded-xl hover:translate-x-2 transition-transform"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {edu.degree} {edu.field}
                  </h3>
                  <div
                    style={{ color: tertiaryColor }}
                    className=" font-medium mt-1"
                  >
                    {edu.institution}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    {edu.startDate ? edu.startDate : ""}
                    {edu.startDate && " - "}
                    {edu.endDate ? edu.endDate : "Present"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentCertificates?.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <h2
                style={{ color: tertiaryColor }}
                className="text-xl  uppercase tracking-wider"
              >
                Certificates
              </h2>
              <div
                style={{
                  background: `linear-gradient(to right, ${tertiaryColor}, #a855f7)`,
                }}
                className="flex-1 h-0.5  rounded"
              ></div>
            </div>
            <div className="space-y-4">
              {currentCertificates.map((cert, index) => (
                <div
                  key={index}
                  className="p-6 bg-slate-50 rounded-xl hover:translate-x-2 transition-transform"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {cert.name}
                  </h3>
                  <div
                    style={{ color: tertiaryColor }}
                    className="font-medium mt-1"
                  >
                    {cert.issuer}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    {cert.issueDate ? cert.issueDate : ""}
                    {cert.issueDate && " - "}
                    {cert.expirationDate ? cert.expirationDate : ""}
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: `linear-gradient(to right, ${tertiaryColor}, #a855f7)`,
                      }}
                      className="inline-block mt-2 px-4 py-1 text-sm text-white  rounded-full"
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CVPreviewThree;
