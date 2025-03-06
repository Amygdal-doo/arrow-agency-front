"use client";
import { IDelete, useApplicant } from "@/providers/ApplicantDetailsProvider";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface ILanguage {
  id: string;
  name: string;
  efficiency: string;
}

const LanguageField = () => {
  const { languages, setLanguages, setDeleteItems } = useApplicant();

  const [newLanguage, setNewLanguage] = useState<ILanguage>({
    id: "",
    name: "",
    efficiency: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewLanguage({
      ...newLanguage,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddLanguage = () => {
    setLanguages([...languages, { ...newLanguage, id: uuidv4() }]);
    setNewLanguage({
      id: "",
      name: "",
      efficiency: "",
    });
  };

  const handleEditLanguage = (id: string) => {
    const languageToEdit = languages.find((lang) => lang.id === id);
    if (languageToEdit) {
      setNewLanguage(languageToEdit);
    }
  };

  const handleUpdateLanguage = () => {
    setLanguages(
      languages.map((lang) => (lang.id === newLanguage.id ? newLanguage : lang))
    );
    setNewLanguage({
      id: "",
      name: "",
      efficiency: "",
    });
  };

  const handleDeleteLanguage = (id: string) => {
    setLanguages(languages.filter((lang) => lang.id !== id));
    setDeleteItems((prevDeleteItems: IDelete) => {
      return {
        ...prevDeleteItems,
        languages: [...prevDeleteItems.languages, id],
      };
    });
  };

  return (
    <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-gray-300">Languages</h2>

      {/* Add New Language Form */}
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Language Name"
          value={newLanguage.name}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />
        <input
          type="text"
          name="efficiency"
          placeholder="Efficiency (e.g., Beginner, Intermediate, Fluent)"
          value={newLanguage.efficiency}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />

        {newLanguage.id ? (
          <button
            onClick={handleUpdateLanguage}
            className="bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700"
          >
            Update Language
          </button>
        ) : (
          <button
            onClick={handleAddLanguage}
            className="bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700"
          >
            Add Language
          </button>
        )}
      </div>

      {/* Display List of Languages */}
      {languages.length > 0 ? (
        languages.map((lang) => (
          <div key={lang.id} className="mb-4 text-gray-300">
            <strong>{lang.name}</strong> ({lang.efficiency})
            <div className="mt-2 flex">
              <button
                onClick={() => handleEditLanguage(lang.id)}
                className="bg-transparent border-gray-300 border font-bold text-white w-1/2 p-2 rounded mr-2 hover:bg-[#01070a] hover:border-[#01070a]"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteLanguage(lang.id)}
                className="bg-transparent border border-gray-300 font-bold text-white w-1/2 p-2 rounded hover:bg-red-800 hover:border-red-800"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No languages added.</p>
      )}
    </div>
  );
};

export default LanguageField;
