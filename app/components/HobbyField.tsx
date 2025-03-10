"use client";
import { useApplicant } from "@/providers/ApplicantDetailsProvider";
import { useState } from "react";

const HobbyField = () => {
  const { hobbies, setHobbies } = useApplicant();
  const [newHobby, setNewHobby] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewHobby(e.target.value);
  };

  const handleAddHobby = () => {
    if (newHobby.trim() !== "") {
      setHobbies([...hobbies, newHobby]);
      setNewHobby("");
    }
  };

  const handleEditHobby = (index: number) => {
    setEditIndex(index);
    setNewHobby(hobbies[index]);
  };

  const handleUpdateHobby = () => {
    if (newHobby.trim() !== "" && editIndex !== null) {
      const updatedHobbies = [...hobbies];
      updatedHobbies[editIndex] = newHobby;
      setHobbies(updatedHobbies);
      setNewHobby("");
      setEditIndex(null);
    }
  };

  const handleDeleteHobby = (index: number) => {
    setHobbies(hobbies.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-300">Hobbies</h2>
        <div className="h-px flex-1 bg-gray-700 mx-4" />
      </div>

      {/* Add New Hobby Form */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            value={newHobby}
            onChange={handleChange}
            placeholder="Enter hobby"
            className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
        </div>

        {editIndex !== null ? (
          <button
            onClick={handleUpdateHobby}
            className="mt-4 w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white p-3 rounded-lg font-medium hover:from-orange-700 hover:to-orange-800 transition-all duration-200 shadow-lg"
          >
            Update Hobby
          </button>
        ) : (
          <button
            onClick={handleAddHobby}
            className="mt-4 w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white p-3 rounded-lg font-medium hover:from-orange-700 hover:to-orange-800 transition-all duration-200 shadow-lg"
          >
            Add Hobby
          </button>
        )}
      </div>

      {/* Hobbies List */}
      <div className="space-y-4">
        {hobbies.length > 0 ? (
          hobbies.map((hobby, index) => (
            <div
              key={index}
              className="group bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg hover:bg-gray-800/50 transition-all duration-200"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-200">
                    {hobby}
                  </h3>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditHobby(index)}
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
                  <button
                    onClick={() => handleDeleteHobby(index)}
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
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-400">No hobbies added yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HobbyField;
