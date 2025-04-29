"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

type RegisterRequiredModalProps = {
  setShowModal: (value: boolean) => void;
  isOpen: boolean;
};

const RegisterRequiredModal = ({
  setShowModal,
  isOpen,
}: RegisterRequiredModalProps) => {
  const [showForm, setShowForm] = useState<"initial" | "login" | "register">(
    "initial"
  );

  const handleCloseModal = () => {
    setShowModal(false);
    setShowForm("initial");
  };

  const toggleForm = () => {
    setShowForm(showForm === "login" ? "register" : "login");
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      {showForm === "initial" ? (
        <div className="bg-gray-800 p-8 rounded-xl w-full">
          <div className="text-center px-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Registration Required
            </h3>
            <p className="text-gray-300 mb-8">
              To apply for this position, you need to create an account first.
              Join our platform to access all job opportunities.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowForm("register")}
                className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-center"
              >
                Register Now
              </button>
              <button
                onClick={() => setShowForm("login")}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-gray-300 font-semibold py-3 px-6 rounded-lg transition-colors text-center"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      ) : showForm === "login" ? (
        <LoginForm toggleContent={toggleForm} onClose={handleCloseModal} />
      ) : (
        <RegistrationForm toggleContent={toggleForm} />
      )}
    </Modal>
  );
};

export default RegisterRequiredModal;
