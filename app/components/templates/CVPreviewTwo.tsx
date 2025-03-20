"use client";
import { useApplicant } from "@/providers/ApplicantDetailsProvider";
import Image from "next/image";
import React from "react";

const CVPreviewTwo = () => {
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
    firstName,
    lastName,
    email,
    phone,
  } = useApplicant();

  return (
    <div className="w-full h-auto mx-auto bg-white shadow-md rounded-xl overflow-hidden">
      {/* Header */}

      <div className="p-8 text-white" style={{ backgroundColor: primaryColor }}>
        {showCompanyInfo ? (
          <div className="flex items-center gap-4 mb-0">
            <Image
              src={companyLogo.url}
              width={companyLogo.width}
              height={companyLogo.height}
              alt="Company Logo"
              className="w-12 h-12 rounded-lg bg-white p-2"
            />
            <h2 className="text-xl font-semibold">{companyName}</h2>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="grid grid-cols-[3fr,1fr] ">
        {/* Left Column */}
        <div className="p-8 space-y-8">
          {showPersonalInfo ? (
            <div
              className="p-8 text-white rounded-lg"
              style={{
                backgroundColor: primaryColor
                  .replace("rgb", "rgba")
                  .replace(")", ", 0.1)"),
              }}
            >
              <div className="mt-0 flex flex-col gap-2">
                <h1 className="text-2xl font-semibold text-gray-900">
                  {firstName} {lastName}
                </h1>
                <div className="" style={{ color: primaryColor }}>
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
            </div>
          ) : (
            ""
          )}

          {summary && (
            <div className="mb-8">
              <p className="text-gray-600 text-base">{summary}</p>
            </div>
          )}
          {currentExperience?.length > 0 && (
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-5 h-0.5"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <h2
                  style={{ color: primaryColor }}
                  className="text-sm font-semibold  uppercase"
                >
                  Work Experience
                </h2>
              </div>
              <div className="space-y-6">
                {currentExperience.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:opacity-30 before:bg-[var(--before-bg)]"
                    style={
                      { "--before-bg": primaryColor } as Record<string, string>
                    }
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {exp.position}
                    </h3>
                    <p className="text-base text-gray-600">{exp.company}</p>
                    <span className="text-xs text-gray-400 font-medium block mt-1">
                      {exp.startDate ? exp.startDate : ""}
                      {exp.startDate && " - "}
                      {exp.endDate ? exp.endDate : "Present"}
                    </span>
                    <p className="text-base text-gray-600 mt-2 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
          {currentEducations?.length > 0 && (
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-5 h-0.5"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <h2
                  style={{ color: primaryColor }}
                  className="text-sm font-semibold  uppercase"
                >
                  Education
                </h2>
              </div>
              <div className="space-y-6">
                {currentEducations.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:opacity-30 before:bg-[var(--before-bg)]"
                    style={
                      { "--before-bg": primaryColor } as Record<string, string>
                    }
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="text-base text-gray-600">{edu.institution}</p>
                    <span className="text-xs text-gray-400 font-medium block mt-1">
                      {edu.startDate ? edu.startDate : ""}
                      {edu.startDate && " - "}
                      {edu.endDate ? edu.endDate : "Present"}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}
          {currentProjects?.length > 0 && (
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-5 h-0.5"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <h2
                  style={{ color: primaryColor }}
                  className="text-sm font-semibold  uppercase"
                >
                  Projects
                </h2>
              </div>
              <div className="space-y-6">
                {currentProjects.map((project, index) => (
                  <div
                    key={index}
                    className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:opacity-30 before:bg-[var(--before-bg)]"
                    style={
                      { "--before-bg": primaryColor } as Record<string, string>
                    }
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {project.name}
                    </h3>
                    <p className="text-base text-gray-600">
                      {project.description}
                    </p>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: primaryColor }}
                        className="hover:opacity-80 text-sm mt-1 block"
                      >
                        View Project →
                      </a>
                    )}
                    <span className="text-xs text-gray-400 font-medium block mt-1">
                      {project.startDate ? project.startDate : ""}
                      {project.startDate && " - "}
                      {project.endDate ? project.endDate : "Present"}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {currentCourses?.length > 0 && (
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-5 h-0.5"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <h2
                  style={{ color: primaryColor }}
                  className="text-sm font-semibold  uppercase"
                >
                  Courses
                </h2>
              </div>
              <div className="space-y-6">
                {currentCourses.map((course, index) => (
                  <div
                    key={index}
                    className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:opacity-30 before:bg-[var(--before-bg)]"
                    style={
                      { "--before-bg": primaryColor } as Record<string, string>
                    }
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {course.name}
                    </h3>
                    {course.url && (
                      <a
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: primaryColor }}
                        className=" hover:opacity-80 text-sm mt-1 block"
                      >
                        View Course →
                      </a>
                    )}
                    <span className="text-xs text-gray-400 font-medium block mt-1">
                      {course.startDate ? course.startDate : ""}
                      {course.startDate && " - "}
                      {course.endDate ? course.endDate : "Present"}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {currentCertificates?.length > 0 && (
            <section className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-5 h-0.5"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <h2
                  style={{ color: primaryColor }}
                  className="text-sm font-semibold  uppercase"
                >
                  Certificates
                </h2>
              </div>
              <div className="space-y-6">
                {currentCertificates.map((cert, index) => (
                  <div
                    key={index}
                    className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:opacity-30 before:bg-[var(--before-bg)]"
                    style={
                      { "--before-bg": primaryColor } as Record<string, string>
                    }
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {cert.name}
                    </h3>
                    <p className="text-base text-gray-600">{cert.issuer}</p>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: primaryColor }}
                        className="hover:hover:opacity-80 text-sm mt-1 block"
                      >
                        View Certificate →
                      </a>
                    )}
                    <span className="text-xs text-gray-400 font-medium block mt-1">
                      {cert.issueDate ? cert.issueDate : ""}
                      {cert.issueDate && " - "}
                      {cert.expirationDate ? cert.expirationDate : "Present"}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
        {/* Right Column */}
        <div
          className="p-8 space-y-8 h-full"
          style={{
            backgroundColor: primaryColor
              .replace("rgb", "rgba")
              .replace(")", ", 0.1)"),
          }}
        >
          {currentSkills?.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-5 h-0.5"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <h2
                  style={{ color: primaryColor }}
                  className="text-sm font-semibold  uppercase"
                >
                  Skills
                </h2>
              </div>
              <div className="space-y-3">
                {currentSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 px-4 rounded-lg flex justify-between items-center"
                  >
                    <span className="text-gray-900">{skill.name}</span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: primaryColor }}
                    >
                      {skill.efficiency}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {currentLanguages?.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-5 h-0.5"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <h2
                  style={{ color: primaryColor }}
                  className="text-sm font-semibold  uppercase"
                >
                  Languages
                </h2>
              </div>
              <div className="space-y-3">
                {currentLanguages.map((lang, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 px-4 rounded-lg flex justify-between items-center"
                  >
                    <span className="text-gray-900">{lang.name}</span>
                    <span
                      className="text-sm  font-semibold"
                      style={{ color: primaryColor }}
                    >
                      {lang.efficiency}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {currentSocials?.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-5 h-0.5"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <h2
                  style={{ color: primaryColor }}
                  className="text-sm font-semibold  uppercase"
                >
                  Social Links
                </h2>
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
                    style={{ color: primaryColor }}
                    className="bg-white p-3 px-4 rounded-lg block  font-medium text-sm hover:-translate-y-0.5 transition-transform hover:shadow-md"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </section>
          )}

          {hobbies?.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-5 h-0.5"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <h2
                  style={{ color: primaryColor }}
                  className="text-sm font-semibold  uppercase"
                >
                  Hobbies
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((hobby, index) => (
                  <p
                    key={index}
                    className="bg-white px-4 py-2 rounded-full text-xs text-gray-600"
                  >
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

export default CVPreviewTwo;
