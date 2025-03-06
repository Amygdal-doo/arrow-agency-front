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
}

const CertificateField = () => {
  const { certificates, setCertificates, setDeleteItems } = useApplicant();

  const [newCertificate, setNewCertificate] = useState<ICertificate>({
    id: "",
    name: "",
    issuer: "",
    issueDate: "",
    expirationDate: "",
    url: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewCertificate({
      ...newCertificate,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddCertificate = () => {
    setCertificates([...certificates, { ...newCertificate, id: uuidv4() }]);
    setNewCertificate({
      id: "",
      name: "",
      issuer: "",
      issueDate: "",
      expirationDate: "",
      url: "",
    });
  };

  const handleEditCertificate = (id: string) => {
    const certificateToEdit = certificates.find((cert) => cert.id === id);
    if (certificateToEdit) {
      setNewCertificate(certificateToEdit);
    }
  };

  const handleUpdateCertificate = () => {
    setCertificates(
      certificates.map((cert) =>
        cert.id === newCertificate.id ? newCertificate : cert
      )
    );
    setNewCertificate({
      id: "",
      name: "",
      issuer: "",
      issueDate: "",
      expirationDate: "",
      url: "",
    });
  };

  const handleDeleteCertificate = (id: string) => {
    setCertificates(certificates.filter((cert) => cert.id !== id));
    setDeleteItems((prevDeleteItems: IDelete) => {
      return {
        ...prevDeleteItems,
        certificates: [...prevDeleteItems.certificates, id],
      };
    });
  };

  return (
    <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-white">Certificates</h2>
      {/* Add New Certificate Form */}
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Certificate Name"
          value={newCertificate.name}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />
        <input
          type="text"
          name="issuer"
          placeholder="Issuer"
          value={newCertificate.issuer}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />
        <input
          type="month" // Changed to month input for issue date
          name="issueDate"
          value={newCertificate.issueDate}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />
        <input
          type="month" // Changed to month input for expiration date
          name="expirationDate"
          value={newCertificate.expirationDate}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />
        <input
          type="url"
          name="url"
          placeholder="Certificate URL"
          value={newCertificate.url}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />

        {newCertificate.id ? (
          <button
            onClick={handleUpdateCertificate}
            className="bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700"
          >
            Update Certificate
          </button>
        ) : (
          <button
            onClick={handleAddCertificate}
            className="bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700"
          >
            Add Certificate
          </button>
        )}
      </div>

      {/* Display List of Certificates */}
      {certificates.length > 0 ? (
        certificates.map((cert) => (
          <div key={cert.id} className="mb-4 text-gray-300">
            <strong>{cert.name}</strong> issued by{" "}
            <span className="opacity-70">{cert.issuer}</span> ({cert.issueDate}{" "}
            - {cert.expirationDate})<p className="mt-2">{cert.url}</p>
            <div className="mt-2 flex">
              <button
                onClick={() => handleEditCertificate(cert.id)}
                className="bg-transparent border-gray-300 border font-bold text-white w-1/2 p-2 rounded mr-2 hover:bg-[#01070a] hover:border-[#01070a]"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteCertificate(cert.id)}
                className="bg-transparent border border-gray-300 font-bold text-white w-1/2 p-2 rounded hover:bg-red-800 hover:border-red-800"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No certificates added.</p>
      )}
    </div>
  );
};

export default CertificateField;
