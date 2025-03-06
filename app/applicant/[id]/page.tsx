"use client";

import CertificateField from "@/app/components/CertificateField";
import CourseField from "@/app/components/CourseField";
import EducationField from "@/app/components/EducationField";
import ExperienceField from "@/app/components/ExperienceField";
import HobbyField from "@/app/components/HobbyField";
import LanguageField from "@/app/components/LanguageField";
import ProjectField from "@/app/components/ProjectField";
import SkillField from "@/app/components/SkillField";
import SocialField from "@/app/components/SocialField";
import { IFile, useApplicant } from "@/providers/ApplicantDetailsProvider";

import React from "react";

const ApplicantDetails = () => {
  const {
    loading,
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
    skills,
    hobbies,
    experience,
    projects,
    educations,
    certificates,
    courses,
    socials,
    languages,
    updateApplicant,
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

  const handleSave = async () => {
    await updateApplicant();
    // You can add save functionality here (API call to update applicant data)
    console.log("Saved Applicant:");
  };

  if (loading) {
    return <div className="text-white text-center py-12">Loading...</div>;
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
    <div className="min-h-screen bg-[#01070a] text-white py-12">
      {/* <pre>{JSON.stringify(applicant, null, 2)}</pre> */}
      <div className="container mx-auto px-4 flex space-x-5">
        <div className="w-1/2">
          {/* Header Section */}
          <div className="bg-gray-800 rounded-lg p-8 mb-8 border border-gray-700">
            <h1 className="text-4xl font-bold mb-4 text-white">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                />{" "}
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                />
              </div>
            </h1>
            <div className="text-gray-300 space-y-2">
              <div className="flex space-x-2 items-center mb-2">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                />
              </div>
              <div className="flex space-x-2 items-center mb-2">
                <input
                  type="text"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="p-2  w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                />
              </div>
            </div>
          </div>

          <div className="">
            {/* Left Column - CV Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* CV Summary */}
              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                <h2 className="text-2xl font-bold mb-4 text-white">
                  CV Summary
                </h2>
                <textarea
                  rows={10}
                  value={summary || ""}
                  onChange={(e) => setSummary(e.target.value)}
                  className="p-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
                />
              </div>

              <EducationField />

              <ProjectField />

              <ExperienceField />

              <CertificateField />

              <CourseField />

              <SkillField cvId={applicant.id} />

              <LanguageField />

              <SocialField />

              <HobbyField />

              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                <h2 className="text-2xl font-bold mb-4 text-white">Files</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {applicant.file?.length
                    ? applicant.file.map((item: IFile, index: number) => (
                        <li
                          key={index}
                          onClick={() => handleDownload(item.url, item.name)}
                        >
                          {item.name}
                          {item.extension}
                        </li>
                      ))
                    : ""}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-gray-800 rounded-lg p-8 border border-gray-700">
          <div className="flex justify-between items-end pb-8 border-b border-gray-700">
            <h1 className="text-4xl font-bold text-white">CV Preview</h1>
            <div>
              <button
                onClick={() => handleSave()}
                className="mt-4 font-bold w-full text-center bg-orange-600 hover:bg-orange-400 text-white py-2 px-8 rounded-md transition-colors"
              >
                Save
              </button>
            </div>
          </div>

          {/* Header Section */}
          <div className="py-8 mb-8">
            <h1 className="text-4xl font-bold mb-4 text-white">
              {firstName} {lastName}
            </h1>
            <div className="text-gray-300 space-y-2">
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - CV Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* CV Summary */}
              <div className="py-8">
                <h2 className="text-2xl font-bold mb-4 text-white">
                  CV Summary
                </h2>
                <p className="text-gray-300">{summary || "N/A"}</p>
              </div>

              {educations?.length ? (
                <div className="py-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Educations
                  </h2>
                  {educations.map((education, index) => (
                    <div key={index}>
                      <strong>{education.degree}</strong> in {education.field}{" "}
                      at {education.institution}({education.startDate} -{" "}
                      {education.endDate})
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}

              {projects?.length ? (
                <div className="py-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Projects
                  </h2>
                  {projects.map((project, index) => (
                    <div key={index}>
                      <strong>{project.name}</strong>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}

              {experience?.length ? (
                <div className="py-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Experiences
                  </h2>
                  {experience.map((experience, index) => (
                    <div key={index}>
                      <strong>{experience.position}</strong>
                      <span className="opacity-70">
                        {" "}
                        at {experience.company}
                      </span>
                      <p>{experience.description}</p>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>

            {/* Right Column - Other Details */}
            <div className="lg:col-span-1 space-y-8">
              {/* Technologies */}
              <div className="py-8">
                <h2 className="text-2xl font-bold mb-4 text-white">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {skills?.length
                    ? skills.map((skill, index) => (
                        <div key={index}>
                          <strong>{skill.name}</strong>
                          <span className="opacity-70">
                            - {skill.efficiency}
                          </span>
                        </div>
                      ))
                    : ""}
                </div>
              </div>

              {certificates?.length
                ? certificates.map((certificate, index) => (
                    <div key={index} className="py-8">
                      <h2 className="text-2xl font-bold mb-4 text-white">
                        {certificate.name}
                      </h2>
                    </div>
                  ))
                : ""}

              {courses?.length ? (
                <div className="py-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Courses
                  </h2>
                  {courses.map((course, index) => (
                    <div key={index}>
                      <strong>{course.name}</strong>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}

              {languages?.length ? (
                <div className="py-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Languages
                  </h2>
                  {languages.map((language, index) => (
                    <div key={index}>
                      <strong>{language.name}</strong>
                      <span className="opacity-70">
                        {" "}
                        - {language.efficiency}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}

              {socials?.length ? (
                <div className="py-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Socials
                  </h2>
                  {socials.map((social, index) => (
                    <div key={index}>
                      <a
                        key={social.id}
                        href={
                          social.url.startsWith("http")
                            ? social.url
                            : `https://${social.url}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-white font-bold rounded-md mb-2"
                      >
                        {social.name}
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}

              {/* Hobbies */}
              {hobbies?.length ? (
                <div className="py-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Hobbies
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {hobbies.map((hobby, index) => (
                      <li key={index}>{hobby}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantDetails;
