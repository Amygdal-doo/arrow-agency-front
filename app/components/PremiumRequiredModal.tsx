"use client";
import React from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";

type PremiumRequiredModalProps = {
  setShowModal: (value: boolean) => void;
  isOpen: boolean;
};

const PremiumRequiredModal = ({
  setShowModal,
  isOpen,
}: PremiumRequiredModalProps) => {
  const router = useRouter();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      <div className="bg-gray-800 p-8 rounded-xl w-full">
        <div className="text-center px-2 lg:px-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            Premium Subscription Required
          </h3>
          <p className="text-gray-300 mb-8">
            You have reached the maximum number of applicants for a free
            account. Upgrade to premium to add unlimited applicants and access
            more features.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => {
                router.push("/pricing");
                handleCloseModal();
              }}
              className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-2 md:px-6 rounded-lg transition-colors text-center"
            >
              Subscribe
            </button>
            <button
              onClick={handleCloseModal}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-gray-300 font-semibold py-3 px-2 md:px-6 rounded-lg transition-colors text-center"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PremiumRequiredModal;
