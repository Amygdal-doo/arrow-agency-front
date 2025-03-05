"use client";

import { apiService } from "@/core/services/apiService";
import { IApplicant } from "@/providers/ApplicantsProvider";
import { AxiosResponse } from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ApplicantDetails = () => {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const { data: session, status } = useSession();
  const [applicant, setApplicant] = useState<IApplicant | null>(null);

  const [editableApplicant, setEditableApplicant] = useState<IApplicant | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchApplicant = async () => {
    setLoading(true);
    setError(null);
    try {
      if (session?.user?.accessToken) {
        const response: AxiosResponse<IApplicant> = await apiService.get(
          `applicant/${id}`
        );
        setApplicant(response.data);
        setEditableApplicant(response.data);
      }
    } catch (error) {
      console.error("Error fetching applicant:", error);
      setError("Failed to fetch applicant.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetchApplicant();
    } else if (status === "unauthenticated") {
      router.push("/");
    }
  }, [id, session, status]);

  const handleDownload = (fileUrl: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleChange = (field: string, value: string) => {
    if (editableApplicant) {
      // Clone the editableApplicant to avoid directly modifying state
      const updatedApplicant = { ...editableApplicant };

      // Handle nested fields like cv.summary
      if (field.startsWith("cv.")) {
        const nestedField = field.split(".")[1]; // This gets "summary" from "cv.summary"
        updatedApplicant.cv = {
          ...updatedApplicant.cv,
          [nestedField]: value,
        };
      } else {
        updatedApplicant[field] = value;
      }

      setEditableApplicant(updatedApplicant);
    }
  };

  const handleSave = () => {
    // You can add save functionality here (API call to update applicant data)
    console.log("Saved Applicant:", editableApplicant);
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
              <input
                type="text"
                value={editableApplicant?.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className="bg-transparent text-white text-4xl font-bold border-b border-gray-600 outline-none"
              />{" "}
              <input
                type="text"
                value={editableApplicant?.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className="bg-transparent text-white text-4xl font-bold border-b border-gray-600 outline-none"
              />
            </h1>
            <div className="text-gray-300 space-y-2">
              <div className="flex space-x-2">
                <label>Email: </label>
                <input
                  type="email"
                  value={editableApplicant?.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="bg-transparent w-full text-white border-b border-gray-600 outline-none"
                />
              </div>
              <div className="flex space-x-2">
                <label>Phone: </label>
                <input
                  type="text"
                  value={editableApplicant?.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="bg-transparent w-full text-white border-b border-gray-600 outline-none"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - CV Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* CV Summary */}
              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                <h2 className="text-2xl font-bold mb-4 text-white">
                  CV Summary
                </h2>
                <textarea
                  value={editableApplicant?.cv?.summary || ""}
                  onChange={(e) => handleChange("cv.summary", e.target.value)}
                  className="bg-transparent text-white w-full h-24 border-b border-gray-600 outline-none"
                />
              </div>

              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                <h2 className="text-2xl font-bold mb-4 text-white">
                  Educations
                </h2>
                {applicant.cv.educations?.length
                  ? applicant.cv.educations.map((education, index) => (
                      <div key={index}>
                        <strong>{education.degree}</strong> in {education.field}{" "}
                        at {education.institution}({education.startDate} -{" "}
                        {education.endDate})
                      </div>
                    ))
                  : ""}
              </div>

              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                <h2 className="text-2xl font-bold mb-4 text-white">Projects</h2>
                {applicant.cv.projects?.length
                  ? applicant.cv.projects.map((project, index) => (
                      <div key={index}>
                        <strong>{project.name}</strong>
                      </div>
                    ))
                  : ""}
              </div>

              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                <h2 className="text-2xl font-bold mb-4 text-white">
                  Experiences
                </h2>
                {applicant.cv.experiences?.length
                  ? applicant.cv.experiences.map((experience, index) => (
                      <div key={index}>
                        <strong>{experience.position}</strong>
                        <span className="opacity-70">
                          {" "}
                          at {experience.company}
                        </span>
                        <p>{experience.description}</p>
                      </div>
                    ))
                  : ""}
              </div>

              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                <h2 className="text-2xl font-bold mb-4 text-white">Files</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {applicant.file?.length
                    ? applicant.file.map((item, index) => (
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

            {/* Right Column - Other Details */}
            <div className="lg:col-span-1 space-y-8">
              {/* Technologies */}
              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                <h2 className="text-2xl font-bold mb-4 text-white">
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {applicant.technologies?.length
                    ? applicant.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-700 px-3 py-1 rounded-md text-sm text-gray-300 border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))
                    : ""}
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                <h2 className="text-2xl font-bold mb-4 text-white">
                  Certificates
                </h2>
                {applicant.cv.certificates?.length
                  ? applicant.cv.certificates.map((certificate, index) => (
                      <div
                        key={index}
                        className="bg-gray-800 rounded-lg p-8 border border-gray-700"
                      >
                        <h2 className="text-2xl font-bold mb-4 text-white">
                          {certificate}
                        </h2>
                      </div>
                    ))
                  : ""}
              </div>

              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                <h2 className="text-2xl font-bold mb-4 text-white">Courses</h2>
                {applicant.cv.courses?.length
                  ? applicant.cv.courses.map((course, index) => (
                      <div key={index}>
                        <strong>{course}</strong>
                      </div>
                    ))
                  : ""}
              </div>

              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                <h2 className="text-2xl font-bold mb-4 text-white">Skills</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {applicant.cv?.skills?.length
                    ? applicant.cv.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))
                    : "N/A"}
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                <h2 className="text-2xl font-bold mb-4 text-white">
                  Languages
                </h2>
                {applicant.cv.languages?.length
                  ? applicant.cv.languages.map((language, index) => (
                      <div key={index}>
                        <strong>{language.name}</strong>
                        <span className="opacity-70">
                          {" "}
                          - {language.efficiency}
                        </span>
                      </div>
                    ))
                  : ""}
              </div>

              {applicant.cv.socials?.length ? (
                <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Socials
                  </h2>
                  {applicant.cv.socials.map((social, index) => (
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
              <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                <h2 className="text-2xl font-bold mb-4 text-white">Hobbies</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {applicant.cv?.hobbies?.length
                    ? applicant.cv.hobbies.map((hobby, index) => (
                        <li key={index}>{hobby}</li>
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
                onClick={() => {}}
                className="mt-4 font-bold w-full text-center bg-orange-600 hover:bg-orange-400 text-white py-2 px-8 rounded-md transition-colors"
              >
                Save
              </button>
            </div>
          </div>

          {/* Header Section */}
          <div className="py-8 mb-8">
            <h1 className="text-4xl font-bold mb-4 text-white">
              {editableApplicant?.firstName} {editableApplicant?.lastName}
            </h1>
            <div className="text-gray-300 space-y-2">
              <p>Email: {editableApplicant?.email}</p>
              <p>Phone: {editableApplicant?.phone}</p>
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
                <p className="text-gray-300">
                  {editableApplicant?.cv?.summary || "N/A"}
                </p>
              </div>

              {applicant.cv.educations?.length ? (
                <div className="py-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Educations
                  </h2>
                  {applicant.cv.educations.map((education, index) => (
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

              {applicant.cv.projects?.length ? (
                <div className="py-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Projects
                  </h2>
                  {applicant.cv.projects.map((project, index) => (
                    <div key={index}>
                      <strong>{project.name}</strong>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}

              {applicant.cv.experiences?.length ? (
                <div className="py-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Experiences
                  </h2>
                  {applicant.cv.experiences.map((experience, index) => (
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
                <h2 className="text-2xl font-bold mb-4 text-white">
                  Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {applicant.technologies?.length
                    ? applicant.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-700 px-3 py-1 rounded-md text-sm text-gray-300 border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))
                    : ""}
                </div>
              </div>

              {applicant.cv.certificates?.length
                ? applicant.cv.certificates.map((certificate, index) => (
                    <div key={index} className="py-8">
                      <h2 className="text-2xl font-bold mb-4 text-white">
                        {certificate}
                      </h2>
                    </div>
                  ))
                : ""}

              {applicant.cv.courses?.length ? (
                <div className="py-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Courses
                  </h2>
                  {applicant.cv.courses.map((course, index) => (
                    <div key={index}>
                      <strong>{course}</strong>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}

              {/* Skills */}
              <div className="py-8">
                <h2 className="text-2xl font-bold mb-4 text-white">Skills</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {applicant.cv?.skills?.length
                    ? applicant.cv.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))
                    : "N/A"}
                </ul>
              </div>

              {applicant.cv.languages?.length ? (
                <div className="py-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Languages
                  </h2>
                  {applicant.cv.languages.map((language, index) => (
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

              {applicant.cv.socials?.length ? (
                <div className="py-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Socials
                  </h2>
                  {applicant.cv.socials.map((social, index) => (
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
              {applicant.cv?.hobbies?.length ? (
                <div className="py-8">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    Hobbies
                  </h2>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {applicant.cv.hobbies.map((hobby, index) => (
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
