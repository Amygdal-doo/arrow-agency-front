"use client";
import { useApplicant } from "@/providers/ApplicantDetailsProvider";
// import Image from "next/image";
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
  } = useApplicant();

  return (
    <div className="w-full min-h-[29.7cm] mx-auto bg-white shadow-md rounded-xl overflow-hidden font-['Plus_Jakarta_Sans']">
      {/* Header */}
      <div className="bg-sky-500 p-8 text-white">
        <div className="flex items-center gap-4 mb-6">
          {/* <Image
            src="/placeholder-logo.png"
            alt="Company Logo"
            className="w-12 h-12 rounded-lg bg-white p-2"
          /> */}
          <h2 className="text-xl font-semibold">{companyName}</h2>
        </div>
      </div>

      <div className="grid grid-cols-[1.8fr,1fr]">
        {/* Left Column */}
        <div className="p-8 space-y-8">
          {summary && (
            <div className="mb-8">
              <p className="text-gray-600 text-base">{summary}</p>
            </div>
          )}
          {currentExperience?.length > 0 && (
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-5 flex items-center gap-2 before:content-[''] before:block before:w-5 before:h-0.5 before:bg-sky-500">
                Work Experience
              </h2>
              <div className="space-y-6">
                {currentExperience.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-sky-500 before:opacity-30"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {exp.position}
                    </h3>
                    <p className="text-base text-gray-600">{exp.company}</p>
                    <span className="text-xs text-gray-400 font-medium block mt-1">
                      {new Date(exp.startDate).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                      {" - "}
                      {exp.endDate
                        ? new Date(exp.endDate).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                          })
                        : "Present"}
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
              <h2 className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-5 flex items-center gap-2 before:content-[''] before:block before:w-5 before:h-0.5 before:bg-sky-500">
                Education
              </h2>
              <div className="space-y-6">
                {currentEducations.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-sky-500 before:opacity-30"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {edu.degree} in {edu.field}
                    </h3>
                    <p className="text-base text-gray-600">{edu.institution}</p>
                    <span className="text-xs text-gray-400 font-medium block mt-1">
                      {new Date(edu.startDate).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                      {" - "}
                      {edu.endDate
                        ? new Date(edu.endDate).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                          })
                        : "Present"}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}
          {currentProjects?.length > 0 && (
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-5 flex items-center gap-2 before:content-[''] before:block before:w-5 before:h-0.5 before:bg-sky-500">
                Projects
              </h2>
              <div className="space-y-6">
                {currentProjects.map((project, index) => (
                  <div
                    key={index}
                    className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-sky-500 before:opacity-30"
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
                        className="text-sky-500 hover:text-sky-600 text-sm mt-1 block"
                      >
                        View Project →
                      </a>
                    )}
                    <span className="text-xs text-gray-400 font-medium block mt-1">
                      {new Date(project.startDate).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                      {" - "}
                      {project.endDate
                        ? new Date(project.endDate).toLocaleDateString(
                            "en-US",
                            { month: "short", year: "numeric" }
                          )
                        : "Present"}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {currentCourses?.length > 0 && (
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-5 flex items-center gap-2 before:content-[''] before:block before:w-5 before:h-0.5 before:bg-sky-500">
                Courses
              </h2>
              <div className="space-y-6">
                {currentCourses.map((course, index) => (
                  <div
                    key={index}
                    className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-sky-500 before:opacity-30"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {course.name}
                    </h3>
                    {course.url && (
                      <a
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sky-500 hover:text-sky-600 text-sm mt-1 block"
                      >
                        View Course →
                      </a>
                    )}
                    <span className="text-xs text-gray-400 font-medium block mt-1">
                      {new Date(course.startDate).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                      {" - "}
                      {course.endDate
                        ? new Date(course.endDate).toLocaleDateString("en-US", {
                            month: "short",
                            year: "numeric",
                          })
                        : "Present"}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {currentCertificates?.length > 0 && (
            <section className="mb-8">
              <h2 className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-5 flex items-center gap-2 before:content-[''] before:block before:w-5 before:h-0.5 before:bg-sky-500">
                Certificates
              </h2>
              <div className="space-y-6">
                {currentCertificates.map((cert, index) => (
                  <div
                    key={index}
                    className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-sky-500 before:opacity-30"
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
                        className="text-sky-500 hover:text-sky-600 text-sm mt-1 block"
                      >
                        View Certificate →
                      </a>
                    )}
                    <span className="text-xs text-gray-400 font-medium block mt-1">
                      {new Date(cert.issueDate).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                      {cert.expirationDate && " - "}
                      {cert.expirationDate &&
                        new Date(cert.expirationDate).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            year: "numeric",
                          }
                        )}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
        {/* Right Column */}
        <div className="bg-sky-50 p-8 space-y-8">
          {currentSkills?.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-5 flex items-center gap-2 before:content-[''] before:block before:w-5 before:h-0.5 before:bg-sky-500">
                Skills
              </h2>
              <div className="space-y-3">
                {currentSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 px-4 rounded-lg flex justify-between items-center"
                  >
                    <span className="text-gray-900">{skill.name}</span>
                    <span className="text-sm text-sky-500 font-semibold">
                      {skill.efficiency}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {currentLanguages?.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-5 flex items-center gap-2 before:content-[''] before:block before:w-5 before:h-0.5 before:bg-sky-500">
                Languages
              </h2>
              <div className="space-y-3">
                {currentLanguages.map((lang, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 px-4 rounded-lg flex justify-between items-center"
                  >
                    <span className="text-gray-900">{lang.name}</span>
                    <span className="text-sm text-sky-500 font-semibold">
                      {lang.efficiency}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {currentSocials?.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-5 flex items-center gap-2 before:content-[''] before:block before:w-5 before:h-0.5 before:bg-sky-500">
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
                    className="bg-white p-3 px-4 rounded-lg block text-sky-500 font-medium text-sm hover:-translate-y-0.5 transition-transform hover:shadow-md"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </section>
          )}

          {hobbies?.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold text-sky-500 uppercase tracking-wider mb-5 flex items-center gap-2 before:content-[''] before:block before:w-5 before:h-0.5 before:bg-sky-500">
                Hobbies
              </h2>
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
