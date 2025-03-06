"use client";
import { useApplicant } from "@/providers/ApplicantDetailsProvider";
import { useState } from "react";

const HobbyField = () => {
  const { hobbies, setHobbies } = useApplicant(); // State to manage hobbies
  const [newHobby, setNewHobby] = useState<string>(""); // State for new hobby input
  const [editIndex, setEditIndex] = useState<number | null>(null); // Index of hobby being edited

  // Handle changes in the hobby input field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewHobby(e.target.value);
  };

  // Handle adding a new hobby
  const handleAddHobby = () => {
    if (newHobby.trim() !== "") {
      setHobbies([...hobbies, newHobby]);
      setNewHobby(""); // Clear input field after adding
    }
  };

  // Handle editing an existing hobby
  const handleEditHobby = (index: number) => {
    setEditIndex(index);
    setNewHobby(hobbies[index]); // Pre-fill input with the hobby to edit
  };

  // Handle updating the edited hobby
  const handleUpdateHobby = () => {
    if (newHobby.trim() !== "" && editIndex !== null) {
      const updatedHobbies = [...hobbies];
      updatedHobbies[editIndex] = newHobby;
      setHobbies(updatedHobbies);
      setNewHobby(""); // Clear input field after update
      setEditIndex(null); // Reset edit mode
    }
  };

  // Handle deleting a hobby
  const handleDeleteHobby = (index: number) => {
    setHobbies(hobbies.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-gray-300">Hobbies</h2>

      {/* Add or Edit Hobby Form */}
      <div className="mb-4">
        <input
          type="text"
          value={newHobby}
          onChange={handleChange}
          placeholder="Enter hobby"
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />
        {editIndex !== null ? (
          <button
            onClick={handleUpdateHobby}
            className="bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700"
          >
            Update Hobby
          </button>
        ) : (
          <button
            onClick={handleAddHobby}
            className="bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700"
          >
            Add Hobby
          </button>
        )}
      </div>

      {/* Display List of Hobbies */}
      {hobbies.length > 0 ? (
        hobbies.map((hobby, index) => (
          <div key={index} className="mb-4 text-gray-300">
            <span>{hobby}</span>
            <div className="mt-2 flex">
              <button
                onClick={() => handleEditHobby(index)}
                className="bg-transparent border-gray-300 border font-bold text-white w-1/2 p-2 rounded mr-2 hover:bg-[#01070a] hover:border-[#01070a]"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteHobby(index)}
                className="bg-transparent border border-gray-300 font-bold text-white w-1/2 p-2 rounded hover:bg-red-800 hover:border-red-800"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No hobbies added.</p>
      )}
    </div>
  );
};

export default HobbyField;
