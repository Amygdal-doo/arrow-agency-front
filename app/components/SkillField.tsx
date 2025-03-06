"use client";

import {
  IDelete,
  ISkill,
  useApplicant,
} from "@/providers/ApplicantDetailsProvider";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type SkillFieldProps = {
  cvId: string;
};

const SkillField = ({ cvId }: SkillFieldProps) => {
  const { skills, setSkills, setDeleteItems } = useApplicant();

  const [newSkill, setNewSkill] = useState<ISkill>({
    id: "",
    name: "",
    efficiency: "",
    cvId,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSkill({
      ...newSkill,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddSkill = () => {
    setSkills([...skills, { ...newSkill, id: uuidv4() }]);
    setNewSkill({
      id: "",
      name: "",
      efficiency: "",
      cvId,
    });
  };

  const handleEditSkill = (id: string) => {
    const skillToEdit = skills.find((skill) => skill.id === id);
    if (skillToEdit) {
      setNewSkill(skillToEdit);
    }
  };

  const handleUpdateSkill = () => {
    setSkills(
      skills.map((skill) => (skill.id === newSkill.id ? newSkill : skill))
    );
    setNewSkill({
      id: "",
      name: "",
      efficiency: "",
      cvId,
    });
  };

  const handleDeleteSkill = (id: string) => {
    setSkills(skills.filter((skill) => skill.id !== id));
    setDeleteItems((prevDeleteItems: IDelete) => {
      return {
        ...prevDeleteItems,
        skills: [...prevDeleteItems.skills, id],
      };
    });
  };

  return (
    <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-gray-300">Skills</h2>

      {/* Add New Skill Form */}
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Skill Name"
          value={newSkill.name}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />
        <input
          type="text"
          name="efficiency"
          placeholder="Efficiency (e.g., Expert, Intermediate)"
          value={newSkill.efficiency}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />

        {newSkill.id ? (
          <button
            onClick={handleUpdateSkill}
            className="bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700"
          >
            Update Skill
          </button>
        ) : (
          <button
            onClick={handleAddSkill}
            className="bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700"
          >
            Add Skill
          </button>
        )}
      </div>

      {/* Display List of Skills */}
      {skills?.length > 0 ? (
        skills.map((skill) => (
          <div key={skill.id} className="mb-4 text-gray-300">
            <p className="block w-full text-white font-bold rounded-md mb-2">
              {skill.name} ({skill.efficiency})
            </p>
            <div className="mt-2 flex">
              <button
                onClick={() => handleEditSkill(skill.id)}
                className="bg-transparent border-gray-300 border font-bold text-white w-1/2 p-2 rounded mr-2 hover:bg-[#01070a] hover:border-[#01070a]"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteSkill(skill.id)}
                className="bg-red-500 font-bold text-white w-1/2 p-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No skills added.</p>
      )}
    </div>
  );
};

export default SkillField;
