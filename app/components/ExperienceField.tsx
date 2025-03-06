"use client";
import { IDelete, useApplicant } from "@/providers/ApplicantDetailsProvider";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface IExperience {
  id: string;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

const ExperienceField = () => {
  const { experience, setExperience, setDeleteItems } = useApplicant();

  const [newExperience, setNewExperience] = useState<IExperience>({
    id: "",
    position: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewExperience({
      ...newExperience,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddExperience = () => {
    setExperience([...experience, { ...newExperience, id: uuidv4() }]);
    setNewExperience({
      id: "",
      position: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  const handleEditExperience = (id: string) => {
    const experienceToEdit = experience.find((exp) => exp.id === id);
    if (experienceToEdit) {
      setNewExperience(experienceToEdit);
    }
  };

  const handleUpdateExperience = () => {
    setExperience(
      experience.map((exp) =>
        exp.id === newExperience.id ? newExperience : exp
      )
    );
    setNewExperience({
      id: "",
      position: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  const handleDeleteExperience = (id: string) => {
    setExperience(experience.filter((exp) => exp.id !== id));
    setDeleteItems((prevDeleteItems: IDelete) => {
      return {
        ...prevDeleteItems,
        experience: [...prevDeleteItems.experience, id],
      };
    });
  };

  return (
    <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-white">Experiences</h2>
      {/* Add New Experience Form */}
      <div className="mb-4">
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={newExperience.position}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={newExperience.company}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />
        <input
          type="month" // Changed to month input for start date
          name="startDate"
          value={newExperience.startDate}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />
        <input
          type="month" // Changed to month input for end date
          name="endDate"
          value={newExperience.endDate}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />
        <textarea
          name="description"
          placeholder="Experience Description"
          value={newExperience.description}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />

        {newExperience.id ? (
          <button
            onClick={handleUpdateExperience}
            className="bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700"
          >
            Update Experience
          </button>
        ) : (
          <button
            onClick={handleAddExperience}
            className="bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700"
          >
            Add Experience
          </button>
        )}
      </div>

      {/* Display List of Experiences */}
      {experience.length > 0 ? (
        experience.map((exp) => (
          <div key={exp.id} className="mb-4 text-gray-300">
            <strong>{exp.position}</strong> at{" "}
            <span className="opacity-70">{exp.company}</span> ({exp.startDate} -{" "}
            {exp.endDate})<p className="mt-2">{exp.description}</p>
            <div className="mt-2 flex">
              <button
                onClick={() => handleEditExperience(exp.id)}
                className="bg-transparent border-gray-300 border font-bold text-white w-1/2 p-2 rounded mr-2 hover:bg-[#01070a] hover:border-[#01070a]"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteExperience(exp.id)}
                className="bg-transparent border border-gray-300 font-bold text-white w-1/2 p-2 rounded hover:bg-red-800 hover:border-red-800"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No experiences added.</p>
      )}
    </div>
  );
};

export default ExperienceField;
