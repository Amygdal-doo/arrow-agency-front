"use client";
import {
  IDelete,
  ISkill,
  useApplicant,
} from "@/providers/ApplicantDetailsProvider";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const SkillField = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const efficiencyLevels = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
    { value: "expert", label: "Expert" },
  ];

  const handleEfficiencySelect = (value: string) => {
    setNewSkill({
      ...newSkill,
      efficiency: value,
    });
    setIsDropdownOpen(false);
  };
  const {
    skills,
    setSkills,
    setDeleteItems,
    deleteItems,
    currentSkills,
    setCurrentSkills,
    setUpdating,
  } = useApplicant();

  const [newSkill, setNewSkill] = useState<ISkill & { isNew?: boolean }>({
    id: "",
    name: "",
    efficiency: "",
    isNew: false,
  });

  const handleAddSkill = () => {
    const newId = uuidv4();
    const newSkillWithId = {
      ...newSkill,
      id: newId,
      isNew: true,
    };
    setUpdating(true);
    setSkills([
      ...(skills || []), // Add fallback empty array if skills is undefined
      {
        name: newSkill.name,
        efficiency: newSkill.efficiency,
      },
    ]);

    setCurrentSkills([...(currentSkills || []), newSkillWithId]); // Add fallback here too

    setNewSkill({
      id: "",
      name: "",
      efficiency: "",
      isNew: false,
    });
  };

  const handleUpdateSkill = () => {
    const updatedSkill = { ...newSkill };

    setCurrentSkills(
      currentSkills.map((skill) =>
        skill.id === newSkill.id ? updatedSkill : skill
      )
    );
    setUpdating(true);
    setSkills(
      skills.map((skill) =>
        skill.id === newSkill.id
          ? newSkill.isNew
            ? {
                name: newSkill.name,
                efficiency: newSkill.efficiency,
              }
            : updatedSkill
          : skill
      )
    );

    setNewSkill({
      id: "",
      name: "",
      efficiency: "",
      isNew: false,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSkill({
      ...newSkill,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditSkill = (id: string) => {
    const skillToEdit = currentSkills.find((skill) => skill.id === id);
    if (skillToEdit) {
      setNewSkill({ ...skillToEdit });
    }
  };

  const handleDeleteSkill = (id: string) => {
    setCurrentSkills(currentSkills.filter((skill) => skill.id !== id));
    setSkills(skills.filter((skill) => skill.id !== id));
    setUpdating(true);
    if (id) {
      const updatedDeleteItems: IDelete = {
        ...deleteItems,
        skills: [...(deleteItems.skills || []), id],
        education: deleteItems.education || [],
        experience: deleteItems.experience || [],
        projects: deleteItems.projects || [],
        courses: deleteItems.courses || [],
        languages: deleteItems.languages || [],
        socials: deleteItems.socials || [],
        certificates: deleteItems.certificates || [],
      };
      setDeleteItems(updatedDeleteItems);
    }
  };

  return (
    <div className="space-y-6 ">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-300">Skills</h2>
        <div className="h-px flex-1 bg-gray-700 mx-4" />
      </div>

      {/* Add New Skill Form */}
      <div className="bg-gray-800/50  rounded-xl p-6 border border-gray-700/50 shadow-lg relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Skill Name"
            value={newSkill.name}
            onChange={handleChange}
            className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
          <div className="relative">
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 cursor-pointer flex justify-between items-center ${
                isDropdownOpen ? "ring-2 ring-orange-500" : ""
              }`}
            >
              <span
                className={
                  newSkill.efficiency ? "text-gray-300" : "text-gray-500"
                }
              >
                {newSkill.efficiency || "Select Efficiency Level"}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {isDropdownOpen && (
              <div className="absolute z-50 w-full mt-2 bg-gray-800  border border-gray-700 rounded-lg shadow-xl">
                {efficiencyLevels.map((level) => (
                  <div
                    key={level.value}
                    onClick={() => handleEfficiencySelect(level.value)}
                    className="px-4 z-50 py-3 cursor-pointer hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg text-gray-300"
                  >
                    {level.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {newSkill.id ? (
          <button
            onClick={handleUpdateSkill}
            className="mt-4 w-full bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white p-3 rounded-lg font-medium transition-all duration-200 shadow-lg"
          >
            Update Skill
          </button>
        ) : (
          <button
            onClick={handleAddSkill}
            className="mt-4 w-full bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white p-3 rounded-lg font-medium transition-all duration-200 shadow-lg"
          >
            Add Skill
          </button>
        )}
      </div>

      {/* Skills List */}
      <div className="space-y-4 relative z-0">
        {currentSkills?.length > 0 ? (
          currentSkills.map((skill) => (
            <div
              key={skill.id}
              className="group relative z-10 bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 shadow-lg hover:bg-gray-800/50 transition-all duration-200"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-200">
                    {skill.name}
                  </h3>
                  <p className="text-gray-400">{skill.efficiency}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => skill.id && handleEditSkill(skill.id)}
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
                  {skill.id && (
                    <button
                      onClick={() => skill.id && handleDeleteSkill(skill.id)}
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
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-400">No skills added yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillField;
