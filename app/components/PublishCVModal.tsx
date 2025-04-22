"use client";
import { useApplicant } from "@/providers/ApplicantDetailsProvider";
import Link from "next/link";
import React, { useState } from "react";
import Modal from "./Modal";

type PublishCVModalProps = {
  setShowModal: (value: boolean) => void;
  isOpen: boolean;
};

const PublishCVModal = ({ setShowModal, isOpen }: PublishCVModalProps) => {
  const [isPublishing, setIsPublishing] = useState(false);
  const { applicant, publicCv, setUpdating, setPublicCv, updating } =
    useApplicant();

  const handleCloseModal = () => {
    setShowModal(false);
    setIsPublishing(false);
  };
  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <div className="bg-gray-800 p-8 rounded-xl w-full">
        <h3 className="text-2xl font-bold text-white mb-4">Make CV Public</h3>
        <p className="text-gray-300 mb-6">
          To get a shareable link for your CV, you need to make it public first.
          This will allow others to view your CV without requiring
          authentication.
        </p>
        {publicCv && !updating ? (
          <div className="mb-6 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
            <Link
              href={`/public-cv/${applicant?.cv.id}`}
              target="_blank"
              onClick={handleCloseModal}
              className="flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium transition-colors"
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              View your public CV
            </Link>
          </div>
        ) : (
          <div className="flex gap-4">
            <button
              onClick={() => {
                setIsPublishing(true);
                setPublicCv(true);
                setUpdating(true);
              }}
              disabled={isPublishing}
              className="flex-1 font-semibold bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-lg transition-colors"
            >
              {isPublishing ? "Publishing..." : "Make Public"}
            </button>

            <button
              onClick={handleCloseModal}
              className="flex-1 bg-gray-700 font-semibold hover:bg-gray-600 text-gray-300 py-2 px-4 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default PublishCVModal;
