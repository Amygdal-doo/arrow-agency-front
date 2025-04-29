"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import { useApplicants } from "@/providers/ApplicantsProvider";
import { apiService } from "@/core/services/apiService";

type EasyApplyModalProps = {
  setShowModal: (value: boolean) => void;
  isOpen: boolean;
  jobId: string;
};

const EasyApplyModal = ({
  setShowModal,
  isOpen,
  jobId,
}: EasyApplyModalProps) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isApplying, setIsApplying] = useState(false);
  const [selectedApplicant, setSelectedApplicant] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { applicants } = useApplicants();

  const handleCloseModal = () => {
    setShowModal(false);
    setIsApplying(false);
    setSelectedApplicant("");
  };

  const getApplicantName = (id: string | undefined) => {
    if (!id) return "Select an applicant";
    const applicant = applicants.find((app) => app.id === id);
    return applicant
      ? `${applicant.firstName} ${applicant.lastName}`
      : "Select an applicant";
  };

  const handleApply = async () => {
    if (!selectedApplicant) return;

    const applicant = applicants.find((app) => app.id === selectedApplicant);
    if (!applicant) return;

    try {
      setIsApplying(true);
      await apiService.post("jobs/easy-apply", {
        jobId,
        cvId: applicant.cvId,
      });

      setIsSuccess(true);
    } catch (error) {
      console.error("Error applying:", error);
      setErrorMessage("Failed to submit application. Please try again.");
    } finally {
      setIsApplying(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <div className="bg-gray-800 p-8 rounded-xl w-full">
        {isSuccess ? (
          // Success View
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Application Submitted!
            </h3>
            <p className="text-gray-300 mb-6">
              Your application has been successfully submitted.
            </p>
            <button
              onClick={handleCloseModal}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-white mb-4">Easy Apply</h3>
            <p className="text-gray-300 mb-6">
              Select your CV to apply for this position.
            </p>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Select Applicant *
              </label>
              <div className="relative">
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 cursor-pointer flex justify-between items-center ${
                    isDropdownOpen ? "ring-2 ring-orange-500" : ""
                  }`}
                >
                  <span className="text-gray-300">
                    {getApplicantName(selectedApplicant)}
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
                  <div className="absolute z-50 w-full mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                    {applicants.map((applicant) => (
                      <div key={applicant.id}>
                        {applicant.publicCv ? (
                          <div
                            onClick={() => {
                              setSelectedApplicant(applicant.id);
                              setIsDropdownOpen(false);
                              setErrorMessage("");
                            }}
                            className={`px-4 py-3 cursor-pointer hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg text-gray-300 ${
                              selectedApplicant === applicant.id
                                ? "bg-gray-700"
                                : ""
                            }`}
                          >
                            {`${applicant.firstName} ${applicant.lastName}`}
                          </div>
                        ) : (
                          <div className="px-4 py-3 text-gray-500 flex justify-between items-center">
                            <span>{`${applicant.firstName} ${applicant.lastName}`}</span>
                            <a
                              href={`/applicant/${applicant.id}`}
                              className="text-orange-500 hover:text-orange-400 text-sm"
                            >
                              Create Public CV
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {errorMessage && (
                <p className="text-red-400 text-sm mt-2">{errorMessage}</p>
              )}
            </div>

            <div className="flex gap-4">
              <button
                onClick={handleApply}
                disabled={isApplying || !selectedApplicant}
                className={`flex-1 font-semibold py-2 px-4 rounded-lg transition-colors ${
                  !selectedApplicant
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-orange-600 hover:bg-orange-700 text-white"
                }`}
              >
                {isApplying ? "Applying..." : "Send Application"}
              </button>

              <button
                onClick={handleCloseModal}
                className="flex-1 bg-gray-700 font-semibold hover:bg-gray-600 text-gray-300 py-2 px-4 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default EasyApplyModal;
