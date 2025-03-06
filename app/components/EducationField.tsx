"use client";
import { IDelete, useApplicant } from "@/providers/ApplicantDetailsProvider";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface IEducation {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
}

const EducationField = () => {
  const { educations, setEducations, setDeleteItems } = useApplicant();

  const [newEducation, setNewEducation] = useState<IEducation>({
    id: "",
    institution: "",
    degree: "",
    field: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewEducation({
      ...newEducation,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddEducation = () => {
    setEducations([...educations, { ...newEducation, id: uuidv4() }]);
    setNewEducation({
      id: "",
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
    });
  };

  const handleEditEducation = (id: string) => {
    const educationToEdit = educations.find((education) => education.id === id);
    if (educationToEdit) {
      setNewEducation(educationToEdit);
    }
  };

  const handleUpdateEducation = () => {
    setEducations(
      educations.map((education) =>
        education.id === newEducation.id ? newEducation : education
      )
    );
    setNewEducation({
      id: "",
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
    });
  };

  const handleDeleteEducation = (id: string) => {
    setEducations(educations.filter((education) => education.id !== id));
    setDeleteItems((prevDeleteItems: IDelete) => {
      return {
        ...prevDeleteItems,
        education: [...prevDeleteItems.education, id],
      };
    });
  };

  return (
    <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-gray-300">Educations</h2>
      {/* <pre className="text-gray-400">{JSON.stringify(educations, null, 2)}</pre> */}
      <div className="mb-4">
        <input
          type="text"
          name="institution"
          placeholder="Institution"
          value={newEducation.institution}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          value={newEducation.degree}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />
        <input
          type="text"
          name="field"
          placeholder="Field of Study"
          value={newEducation.field}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />
        <input
          type="date"
          name="startDate"
          value={newEducation.startDate}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />
        <input
          type="date"
          name="endDate"
          value={newEducation.endDate}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />

        {newEducation.id ? (
          <button
            onClick={handleUpdateEducation}
            className="bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700"
          >
            Update Education
          </button>
        ) : (
          <button
            onClick={handleAddEducation}
            className="bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700"
          >
            Add Education
          </button>
        )}
      </div>

      {educations.length > 0 ? (
        educations.map((education) => (
          <div key={education.id} className="mb-4 text-gray-300">
            <strong>{education.degree}</strong> in {education.field} at{" "}
            {education.institution} ({education.startDate} - {education.endDate}
            )
            <div className="mt-2 flex">
              <button
                onClick={() => handleEditEducation(education.id)}
                className="bg-transparent border-gray-300 border font-bold text-white w-1/2 p-2 rounded mr-2 hover:bg-[#01070a] hover:border-[#01070a]"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteEducation(education.id)}
                className="bg-transparent border border-gray-300 font-bold text-white w-1/2 p-2 rounded hover:bg-red-800 hover:border-red-800"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No educations added.</p>
      )}
    </div>
  );
};

export default EducationField;
