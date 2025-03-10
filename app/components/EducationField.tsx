"use client";
import {
  IDelete,
  IEducation,
  useApplicant,
} from "@/providers/ApplicantDetailsProvider";
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

const EducationField = () => {
  const {
    educations,
    setEducations,
    setDeleteItems,
    currentEducations,
    setCurrentEducations,
    deleteItems,
  } = useApplicant();

  const [newEducation, setNewEducation] = useState<
    IEducation & { isNew?: boolean }
  >({
    id: "",
    institution: "",
    degree: "",
    field: "",
    startDate: "",
    endDate: "",
    isNew: false,
  });

  const handleAddEducation = () => {
    const newId = uuidv4();
    const newEducationWithId = {
      ...newEducation,
      id: newId,
      isNew: true,
    };

    // For BE, exclude id if it's a new education
    setEducations([
      ...educations,
      {
        institution: newEducation.institution,
        degree: newEducation.degree,
        field: newEducation.field,
        startDate: newEducation.startDate,
        endDate: newEducation.endDate,
      },
    ]);

    setCurrentEducations([...currentEducations, newEducationWithId]);

    setNewEducation({
      id: "",
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      isNew: false,
    });
  };

  const handleUpdateEducation = () => {
    const updatedEducation = { ...newEducation };

    setCurrentEducations(
      currentEducations.map((education) =>
        education.id === newEducation.id ? updatedEducation : education
      )
    );

    // For BE, only include id if it's not a new education
    setEducations(
      educations.map((education) =>
        education.id === newEducation.id
          ? newEducation.isNew
            ? {
                institution: newEducation.institution,
                degree: newEducation.degree,
                field: newEducation.field,
                startDate: newEducation.startDate,
                endDate: newEducation.endDate,
              }
            : updatedEducation
          : education
      )
    );

    setNewEducation({
      id: "",
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      isNew: false,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewEducation({
      ...newEducation,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditEducation = (id: string) => {
    const educationToEdit = currentEducations.find(
      (education) => education.id === id
    );
    if (educationToEdit) {
      setNewEducation({ ...educationToEdit });
    }
  };

  const handleDeleteEducation = (id: string) => {
    setCurrentEducations(
      currentEducations.filter((education) => education.id !== id)
    );
    setEducations(educations.filter((education) => education.id !== id));

    if (id) {
      const updatedDeleteItems: IDelete = {
        ...deleteItems,
        education: [...(deleteItems.education || []), id],
        experience: deleteItems.experience || [],
        projects: deleteItems.projects || [],
        courses: deleteItems.courses || [],
        certificates: deleteItems.certificates || [],
        languages: deleteItems.languages || [],
        socials: deleteItems.socials || [],
        skills: deleteItems.skills || [],
      };
      setDeleteItems(updatedDeleteItems);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-300">Education History</h2>
        <div className="h-px flex-1 bg-gray-700 mx-4" />
      </div>

      {/* Add New Education Form */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="institution"
            placeholder="Institution"
            value={newEducation.institution}
            onChange={handleChange}
            className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <input
            type="text"
            name="field"
            placeholder="Field of Study"
            value={newEducation.field}
            onChange={handleChange}
            className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />

          <input
            type="text"
            name="degree"
            placeholder="Degree"
            value={newEducation.degree}
            onChange={handleChange}
            className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="month"
            name="startDate"
            value={newEducation.startDate}
            onChange={handleChange}
            className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
          <input
            type="month"
            name="endDate"
            value={newEducation.endDate}
            onChange={handleChange}
            className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
        </div>
        {newEducation.id ? (
          <button
            onClick={handleUpdateEducation}
            className="mt-4 w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white p-3 rounded-lg font-medium hover:from-orange-700 hover:to-orange-800 transition-all duration-200 shadow-lg"
          >
            Update Education
          </button>
        ) : (
          <button
            onClick={handleAddEducation}
            className="mt-4 w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white p-3 rounded-lg font-medium hover:from-orange-700 hover:to-orange-800 transition-all duration-200 shadow-lg"
          >
            Add Education
          </button>
        )}
      </div>

      {/* Education List */}
      <div className="space-y-4">
        {currentEducations.length > 0 ? (
          currentEducations.map((education, index) => (
            <div
              key={index}
              className="group bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg hover:bg-gray-800/50 transition-all duration-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-200">
                    {education.degree}
                  </h3>
                  <p className="text-gray-400">{education.institution}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() =>
                      education.id && handleEditEducation(education.id)
                    }
                    className="p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 hover:text-blue-300 transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </button>
                  {education.id && (
                    <button
                      onClick={() =>
                        education.id && handleDeleteEducation(education.id)
                      }
                      className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 hover:text-red-300 transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>{education.field}</span>
                <span>
                  {new Date(education.startDate).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                  {" - "}
                  {education.endDate
                    ? new Date(education.endDate).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })
                    : "Present"}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-400">No education history added yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationField;
