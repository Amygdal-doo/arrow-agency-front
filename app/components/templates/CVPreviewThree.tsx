"use client";
import { useApplicant } from "@/providers/ApplicantDetailsProvider";
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
  } = useApplicant();

  return (
    <div className="w-full min-h-[29.7cm] mx-auto bg-white shadow-md rounded-2xl overflow-hidden font-['Space_Grotesk'] grid grid-cols-[280px,1fr]">
      {/* Sidebar */}
      <div className="bg-slate-900 p-8 text-white">
        <div className="text-center mb-8 pb-6 border-b border-white/10">
          {/* <Image
            src="/placeholder-logo.png"
            alt="Company Logo"
            className="w-16 h-16 mb-4 mx-auto rounded-lg bg-white p-2"
          /> */}
          <h2 className="text-xl font-semibold text-white">{companyName}</h2>
        </div>

        {currentSkills?.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl text-indigo-500 uppercase tracking-wider">
                Skills
              </h2>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded"></div>
            </div>
            <div className="space-y-3">
              {currentSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white/10 p-4 rounded-lg flex justify-between items-center"
                >
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm px-3 py-1 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500">
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
              <h2 className="text-xl text-indigo-500 uppercase tracking-wider">
                Languages
              </h2>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded"></div>
            </div>
            <div className="space-y-4">
              {currentLanguages.map((lang, index) => (
                <div
                  key={index}
                  className="flex justify-between text-slate-400"
                >
                  <span>{lang.name}</span>
                  <span className="text-indigo-500">{lang.efficiency}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {hobbies?.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl text-indigo-500 uppercase tracking-wider">
                Hobbies
              </h2>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded"></div>
            </div>
            <div className="space-y-2">
              {hobbies.map((hobby, index) => (
                <p key={index} className="text-slate-400">
                  {hobby}
                </p>
              ))}
            </div>
          </div>
        )}

        {currentSocials?.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl text-indigo-500 uppercase tracking-wider">
                Connect
              </h2>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded"></div>
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
                  className="flex items-center gap-3 p-3 bg-white/10 rounded-lg text-white hover:bg-indigo-500 transition-all hover:translate-x-1"
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
              <h2 className="text-xl text-indigo-500 uppercase tracking-wider">
                About
              </h2>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded"></div>
            </div>
            <p className="text-slate-600">{summary}</p>
          </div>
        )}

        {currentExperience?.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl text-indigo-500 uppercase tracking-wider">
                Experience
              </h2>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded"></div>
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
                  <div className="text-indigo-500 font-medium mt-1">
                    {exp.company}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
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
              <h2 className="text-xl text-indigo-500 uppercase tracking-wider">
                Projects
              </h2>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded"></div>
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
                    {new Date(project.startDate).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                    {" - "}
                    {project.endDate
                      ? new Date(project.endDate).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })
                      : "Present"}
                  </div>
                  <p className="mt-4 text-slate-600">{project.description}</p>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-4 py-1 text-sm text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
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
              <h2 className="text-xl text-indigo-500 uppercase tracking-wider">
                Courses
              </h2>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded"></div>
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
                  </div>
                  {course.url && (
                    <a
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-4 py-1 text-sm text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
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
              <h2 className="text-xl text-indigo-500 uppercase tracking-wider">
                Education
              </h2>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded"></div>
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
                  <div className="text-indigo-500 font-medium mt-1">
                    {edu.institution}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentCertificates?.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-xl text-indigo-500 uppercase tracking-wider">
                Certificates
              </h2>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded"></div>
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
                  <div className="text-indigo-500 font-medium mt-1">
                    {cert.issuer}
                  </div>
                  <div className="text-sm text-slate-400 mt-1">
                    {new Date(cert.issueDate).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                    {cert.expirationDate && " - "}
                    {cert.expirationDate &&
                      new Date(cert.expirationDate).toLocaleDateString(
                        "en-US",
                        { month: "short", year: "numeric" }
                      )}
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 px-4 py-1 text-sm text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
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
