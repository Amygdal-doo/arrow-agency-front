"use client";
import { IDelete, useApplicant } from "@/providers/ApplicantDetailsProvider";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface ISocial {
  id: string;
  name: string;
  url: string;
  isNew?: boolean;
}

const SocialField = () => {
  const {
    socials,
    setSocials,
    setDeleteItems,
    deleteItems,
    currentSocials,
    setCurrentSocials,
    setUpdating,
  } = useApplicant();

  const [newSocial, setNewSocial] = useState<ISocial>({
    id: "",
    name: "",
    url: "",
    isNew: false,
  });

  const handleAddSocial = () => {
    const newId = uuidv4();
    const newSocialWithId = {
      ...newSocial,
      id: newId,
      isNew: true,
    };
    setUpdating(true);
    // For BE, exclude id if it's a new social
    setSocials([
      ...socials,
      {
        name: newSocial.name,
        url: newSocial.url,
      },
    ]);

    setCurrentSocials([...currentSocials, newSocialWithId]);

    setNewSocial({
      id: "",
      name: "",
      url: "",
      isNew: false,
    });
  };

  const handleUpdateSocial = () => {
    const updatedSocial = { ...newSocial };
    setUpdating(true);
    setCurrentSocials(
      currentSocials.map((social) =>
        social.id === newSocial.id ? updatedSocial : social
      )
    );

    // For BE, only include id if it's not a new social
    setSocials(
      socials.map((social) =>
        social.id === newSocial.id
          ? newSocial.isNew
            ? {
                name: newSocial.name,
                url: newSocial.url,
              }
            : updatedSocial
          : social
      )
    );

    setNewSocial({
      id: "",
      name: "",
      url: "",
      isNew: false,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSocial({
      ...newSocial,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditSocial = (id: string) => {
    const socialToEdit = currentSocials.find((social) => social.id === id);
    if (socialToEdit) {
      // @ts-expect-error Expected type error due to potential undefined id
      setNewSocial({ ...socialToEdit });
    }
  };

  const handleDeleteSocial = (id: string) => {
    setCurrentSocials(currentSocials.filter((social) => social.id !== id));
    setSocials(socials.filter((social) => social.id !== id));
    setUpdating(true);
    if (id) {
      const updatedDeleteItems: IDelete = {
        ...deleteItems,
        socials: [...(deleteItems.socials || []), id],
        education: deleteItems.education || [],
        experience: deleteItems.experience || [],
        projects: deleteItems.projects || [],
        courses: deleteItems.courses || [],
        certificates: deleteItems.certificates || [],
        languages: deleteItems.languages || [],
        skills: deleteItems.skills || [],
      };
      setDeleteItems(updatedDeleteItems);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-300">Social Links</h2>
        <div className="h-px flex-1 bg-gray-700 mx-4" />
      </div>

      {/* Add New Social Form */}
      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Platform Name"
            value={newSocial.name}
            onChange={handleChange}
            className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
          <input
            type="url"
            name="url"
            placeholder="Profile URL"
            value={newSocial.url}
            onChange={handleChange}
            className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
        </div>

        {newSocial.id ? (
          <button
            onClick={handleUpdateSocial}
            className="mt-4 w-full bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white p-3 rounded-lg font-medium  transition-all duration-200 shadow-lg"
          >
            Update Social Link
          </button>
        ) : (
          <button
            onClick={handleAddSocial}
            className="mt-4 w-full bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white p-3 rounded-lg font-medium  transition-all duration-200 shadow-lg"
          >
            Add Social Link
          </button>
        )}
      </div>

      {/* Socials List */}
      <div className="space-y-4">
        {currentSocials?.length > 0 ? (
          currentSocials.map((social) => (
            <div
              key={social.id}
              className="group bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 shadow-lg hover:bg-gray-800/50 transition-all duration-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-200">
                    {social.name}
                  </h3>
                  <a
                    href={
                      social.url.startsWith("http")
                        ? social.url
                        : `https://${social.url}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block"
                  >
                    View Profile →
                  </a>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => social.id && handleEditSocial(social.id)}
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
                  {social.id && (
                    <button
                      onClick={() => social.id && handleDeleteSocial(social.id)}
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
            <p className="text-gray-400">No social links added yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialField;
