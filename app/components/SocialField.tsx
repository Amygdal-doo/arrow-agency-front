"use client";
import { IDelete, useApplicant } from "@/providers/ApplicantDetailsProvider";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface ISocial {
  id: string;
  name: string;
  url: string;
}

const SocialField = () => {
  const { socials, setSocials, setDeleteItems } = useApplicant();

  const [newSocial, setNewSocial] = useState<ISocial>({
    id: "",
    name: "",
    url: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSocial({
      ...newSocial,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddSocial = () => {
    setSocials([...socials, { ...newSocial, id: uuidv4() }]);
    setNewSocial({
      id: "",
      name: "",
      url: "",
    });
  };

  const handleEditSocial = (id: string) => {
    const socialToEdit = socials.find((social) => social.id === id);
    if (socialToEdit) {
      setNewSocial(socialToEdit);
    }
  };

  const handleUpdateSocial = () => {
    setSocials(
      socials.map((social) => (social.id === newSocial.id ? newSocial : social))
    );
    setNewSocial({
      id: "",
      name: "",
      url: "",
    });
  };

  const handleDeleteSocial = (id: string) => {
    setSocials(socials.filter((social) => social.id !== id));
    setDeleteItems((prevDeleteItems: IDelete) => {
      return {
        ...prevDeleteItems,
        socials: [...prevDeleteItems.socials, id],
      };
    });
  };

  return (
    <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-gray-300">Socials</h2>

      {/* Add New Social Form */}
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Social Name"
          value={newSocial.name}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />
        <input
          type="text"
          name="url"
          placeholder="Social URL (e.g., https://twitter.com)"
          value={newSocial.url}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />

        {newSocial.id ? (
          <button
            onClick={handleUpdateSocial}
            className="bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700"
          >
            Update Social
          </button>
        ) : (
          <button
            onClick={handleAddSocial}
            className="bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700"
          >
            Add Social
          </button>
        )}
      </div>

      {/* Display List of Socials */}
      {socials.length > 0 ? (
        socials.map((social) => (
          <div key={social.id} className="mb-4 text-gray-300">
            <a
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
            <div className="mt-2 flex">
              <button
                onClick={() => handleEditSocial(social.id)}
                className="bg-transparent border-gray-300 border font-bold text-white w-1/2 p-2 rounded mr-2 hover:bg-[#01070a] hover:border-[#01070a]"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteSocial(social.id)}
                className="bg-transparent border border-gray-300 font-bold text-white w-1/2 p-2 rounded hover:bg-red-800 hover:border-red-800"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No socials added.</p>
      )}
    </div>
  );
};

export default SocialField;
