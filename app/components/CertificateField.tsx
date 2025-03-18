"use client";
import { IDelete, useApplicant } from "@/providers/ApplicantDetailsProvider";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface ICertificate {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expirationDate: string;
  url: string;
  isNew?: boolean;
}

const CertificateField = () => {
  const {
    certificates,
    setCertificates,
    setDeleteItems,
    deleteItems,
    currentCertificates,
    setCurrentCertificates,
  } = useApplicant();

  const [newCertificate, setNewCertificate] = useState<ICertificate>({
    id: "",
    name: "",
    issuer: "",
    issueDate: "",
    expirationDate: "",
    url: "",
    isNew: false,
  });

  const handleAddCertificate = () => {
    const newId = uuidv4();
    const newCertificateWithId = {
      ...newCertificate,
      id: newId,
      isNew: true,
    };

    // For BE, exclude id if it's a new certificate
    setCertificates([
      ...certificates,
      {
        name: newCertificate.name,
        issuer: newCertificate.issuer,
        issueDate: newCertificate.issueDate,
        expirationDate: newCertificate.expirationDate,
        url: newCertificate.url,
      },
    ]);

    setCurrentCertificates([...currentCertificates, newCertificateWithId]);

    setNewCertificate({
      id: "",
      name: "",
      issuer: "",
      issueDate: "",
      expirationDate: "",
      url: "",
      isNew: false,
    });
  };

  const handleUpdateCertificate = () => {
    const updatedCertificate = { ...newCertificate };

    setCurrentCertificates(
      currentCertificates.map((cert) =>
        cert.id === newCertificate.id ? updatedCertificate : cert
      )
    );

    // For BE, only include id if it's not a new certificate
    setCertificates(
      certificates.map((cert) =>
        cert.id === newCertificate.id
          ? newCertificate.isNew
            ? {
                name: newCertificate.name,
                issuer: newCertificate.issuer,
                issueDate: newCertificate.issueDate,
                expirationDate: newCertificate.expirationDate,
                url: newCertificate.url,
              }
            : updatedCertificate
          : cert
      )
    );

    setNewCertificate({
      id: "",
      name: "",
      issuer: "",
      issueDate: "",
      expirationDate: "",
      url: "",
      isNew: false,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCertificate({
      ...newCertificate,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditCertificate = (id: string) => {
    const certificateToEdit = currentCertificates.find(
      (certificate) => certificate.id === id
    );
    if (certificateToEdit) {
      // @ts-expect-error Expected type error due to potential undefined id
      setNewCertificate({ ...certificateToEdit });
    }
  };

  const handleDeleteCertificate = (id: string) => {
    setCurrentCertificates(
      currentCertificates.filter((cert) => cert.id !== id)
    );
    setCertificates(certificates.filter((cert) => cert.id !== id));

    if (id) {
      const updatedDeleteItems: IDelete = {
        ...deleteItems,
        certificates: [...(deleteItems.certificates || []), id],
        education: deleteItems.education || [],
        experience: deleteItems.experience || [],
        projects: deleteItems.projects || [],
        courses: deleteItems.courses || [],
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
        <h2 className="text-2xl font-bold text-gray-300">Certificates</h2>
        <div className="h-px flex-1 bg-gray-700 mx-4" />
      </div>

      {/* Add New Certificate Form */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Certificate Name"
            value={newCertificate.name}
            onChange={handleChange}
            className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
          <input
            type="text"
            name="issuer"
            placeholder="Issuer"
            value={newCertificate.issuer}
            onChange={handleChange}
            className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 my-4">
          <input
            type="text"
            name="issueDate"
            placeholder="Jan 2025"
            value={newCertificate.issueDate}
            onChange={handleChange}
            className="bg-gray-700/50 border placeholder-gray-500  border-gray-600/50 rounded-lg p-3 text-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
          <input
            type="text"
            name="expirationDate"
            placeholder="Jan 2030"
            value={newCertificate.expirationDate}
            onChange={handleChange}
            className="bg-gray-700/50 border placeholder-gray-500  border-gray-600/50 rounded-lg p-3 text-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
        </div>

        <input
          type="url"
          name="url"
          placeholder="Certificate URL"
          value={newCertificate.url}
          onChange={handleChange}
          className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
        />

        {newCertificate.id ? (
          <button
            onClick={handleUpdateCertificate}
            className="mt-4 w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white p-3 rounded-lg font-medium hover:from-orange-700 hover:to-orange-800 transition-all duration-200 shadow-lg"
          >
            Update Certificate
          </button>
        ) : (
          <button
            onClick={handleAddCertificate}
            className="mt-4 w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white p-3 rounded-lg font-medium hover:from-orange-700 hover:to-orange-800 transition-all duration-200 shadow-lg"
          >
            Add Certificate
          </button>
        )}
      </div>

      {/* Certificates List */}
      <div className="space-y-4">
        {currentCertificates.length > 0 ? (
          currentCertificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg hover:bg-gray-800/50 transition-all duration-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-200">
                    {cert.name}
                  </h3>
                  <p className="text-gray-400">{cert.issuer}</p>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block"
                    >
                      View Certificate →
                    </a>
                  )}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => cert.id && handleEditCertificate(cert.id)}
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
                  {cert.id && (
                    <button
                      onClick={() =>
                        cert.id && handleDeleteCertificate(cert.id)
                      }
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
              <div className="flex justify-end text-sm text-gray-400">
                <span>
                  {cert.issueDate ? cert.issueDate : ""}
                  {" - "}
                  {cert.expirationDate ? cert.expirationDate : "No Expiration"}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-400">No certificates added yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateField;
