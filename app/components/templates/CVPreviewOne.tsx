"use client";
import { useApplicant } from "@/providers/ApplicantDetailsProvider";
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
  } = useApplicant();

  return (
    <div className="w-full min-h-[29.7cm] p-10 mx-auto bg-white shadow-md rounded-lg font-['Inter']">
      {/* Header Section */}
      <div className="mb-12">
        <div className="flex items-center gap-6 pb-6 border-b border-gray-200">
          {/* <Image
            src={profile?.companyLogos?.url}
            alt="Company Logo"
            className="w-12 h-12 rounded-lg bg-white p-2"
          /> */}
          <h2 className="text-xl font-semibold text-gray-900">{companyName}</h2>
        </div>

        {/* <div className="mt-6 flex flex-col gap-2">
          <h1 className="text-2xl font-semibold text-gray-900">
            {firstName} {lastName}
          </h1>
          <div className="text-gray-600 space-y-1">
            <p>{email}</p>
            <p>{phone}</p>
          </div>
        </div> */}
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
              <h2 className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-6 pb-3 border-b border-gray-200">
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
              <h2 className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-6 pb-3 border-b border-gray-200">
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
                        {" - "}
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
              <h2 className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-6 pb-3 border-b border-gray-200">
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
                          className="text-indigo-600 hover:text-indigo-700 text-sm"
                        >
                          {project.url}
                        </a>
                      )}
                      <span className="text-xs text-gray-400 font-medium">
                        {new Date(project.startDate).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            year: "numeric",
                          }
                        )}
                        {" - "}
                        {project.endDate
                          ? new Date(project.endDate).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                year: "numeric",
                              }
                            )
                          : "Present"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {currentCourses?.length > 0 && (
            <section>
              <h2 className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-6 pb-3 border-b border-gray-200">
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
                          className="text-indigo-600 hover:text-indigo-700 text-sm"
                        >
                          View Course →
                        </a>
                      )}
                      <span className="text-xs text-gray-400 font-medium">
                        {new Date(course.startDate).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            year: "numeric",
                          }
                        )}
                        {" - "}
                        {course.endDate
                          ? new Date(course.endDate).toLocaleDateString(
                              "en-US",
                              {
                                month: "short",
                                year: "numeric",
                              }
                            )
                          : "Present"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {currentCertificates?.length > 0 && (
            <section>
              <h2 className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-6 pb-3 border-b border-gray-200">
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
                          className="text-indigo-600 hover:text-indigo-700 text-sm"
                        >
                          View Certificate →
                        </a>
                      )}
                      <span className="text-xs text-gray-400 font-medium">
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
              <h2 className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-6 pb-3 border-b border-gray-200">
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
              <h2 className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-6 pb-3 border-b border-gray-200">
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
              <h2 className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-6 pb-3 border-b border-gray-200">
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
                    className="text-indigo-600 hover:text-indigo-700 block transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </section>
          )}

          {hobbies?.length > 0 && (
            <section>
              <h2 className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-6 pb-3 border-b border-gray-200">
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
