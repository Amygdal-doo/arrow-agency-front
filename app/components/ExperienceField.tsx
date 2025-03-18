"use client";
import {
  IDelete,
  IExperience,
  useApplicant,
} from "@/providers/ApplicantDetailsProvider";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ExperienceField = () => {
  const {
    experience,
    setExperience,
    setDeleteItems,
    deleteItems,
    currentExperience,
    setCurrentExperience,
  } = useApplicant();

  const [newExperience, setNewExperience] = useState<
    IExperience & { isNew?: boolean }
  >({
    id: "",
    position: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    isNew: false,
  });

  const handleAddExperience = () => {
    const newId = uuidv4();
    const newExperienceWithId = {
      ...newExperience,
      id: newId,
      isNew: true,
    };

    // For BE, exclude id if it's a new experience
    setExperience([
      ...experience,
      {
        position: newExperience.position,
        company: newExperience.company,
        startDate: newExperience.startDate,
        endDate: newExperience.endDate,
        description: newExperience.description,
      },
    ]);

    setCurrentExperience([...currentExperience, newExperienceWithId]);

    setNewExperience({
      id: "",
      position: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      isNew: false,
    });
  };

  const handleUpdateExperience = () => {
    const updatedExperience = { ...newExperience };

    setCurrentExperience(
      currentExperience.map((exp) =>
        exp.id === newExperience.id ? updatedExperience : exp
      )
    );

    // For BE, only include id if it's not a new experience
    setExperience(
      experience.map((exp) =>
        exp.id === newExperience.id
          ? newExperience.isNew
            ? {
                position: newExperience.position,
                company: newExperience.company,
                startDate: newExperience.startDate,
                endDate: newExperience.endDate,
                description: newExperience.description,
              }
            : updatedExperience
          : exp
      )
    );

    setNewExperience({
      id: "",
      position: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      isNew: false,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewExperience({
      ...newExperience,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditExperience = (id: string) => {
    const experienceToEdit = currentExperience.find((exp) => exp.id === id);
    if (experienceToEdit) {
      setNewExperience({ ...experienceToEdit });
    }
  };

  const handleDeleteExperience = (id: string) => {
    setCurrentExperience(currentExperience.filter((exp) => exp.id !== id));
    setExperience(experience.filter((exp) => exp.id !== id));

    if (id) {
      const updatedDeleteItems: IDelete = {
        ...deleteItems,
        experience: [...(deleteItems.experience || []), id],
        education: deleteItems.education || [],
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
        <h2 className="text-2xl font-bold text-gray-300">Experience History</h2>
        <div className="h-px flex-1 bg-gray-700 mx-4" />
      </div>

      {/* Add New Experience Form */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={newExperience.position}
            onChange={handleChange}
            className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={newExperience.company}
            onChange={handleChange}
            className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 my-4">
          <input
            type="text"
            placeholder="Jan 2015"
            name="startDate"
            value={newExperience.startDate}
            onChange={handleChange}
            className="bg-gray-700/50 border placeholder-gray-500 border-gray-600/50 rounded-lg p-3 text-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
          <input
            type="text"
            placeholder="Jun 2017"
            name="endDate"
            value={newExperience.endDate}
            onChange={handleChange}
            className="bg-gray-700/50 border placeholder-gray-500 border-gray-600/50 rounded-lg p-3 text-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
        </div>

        <textarea
          name="description"
          placeholder="Experience Description"
          value={newExperience.description}
          onChange={handleChange}
          rows={4}
          className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
        />

        {newExperience.id ? (
          <button
            onClick={handleUpdateExperience}
            className="mt-4 w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white p-3 rounded-lg font-medium hover:from-orange-700 hover:to-orange-800 transition-all duration-200 shadow-lg"
          >
            Update Experience
          </button>
        ) : (
          <button
            onClick={handleAddExperience}
            className="mt-4 w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white p-3 rounded-lg font-medium hover:from-orange-700 hover:to-orange-800 transition-all duration-200 shadow-lg"
          >
            Add Experience
          </button>
        )}
      </div>

      {/* Experience List */}
      <div className="space-y-4">
        {currentExperience.length > 0 ? (
          currentExperience.map((exp, index) => (
            <div
              key={index}
              className="group bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg hover:bg-gray-800/50 transition-all duration-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-200">
                    {exp.position}
                  </h3>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => exp.id && handleEditExperience(exp.id)}
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
                  {exp.id && (
                    <button
                      onClick={() => exp.id && handleDeleteExperience(exp.id)}
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
              <p className="text-gray-400 mb-3">{exp.description}</p>
              <div className="flex justify-end text-sm text-gray-400">
                <span>
                  {exp.startDate ? exp.startDate : ""}
                  {" - "}
                  {exp.endDate ? exp.endDate : "Present"}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-400">No experience history added yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceField;
