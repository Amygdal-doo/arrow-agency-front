"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };
  return (
    <nav className="w-full bg-black p-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-16">
          <p className="text-4xl font-bold text-white">Amygdal</p>

          <ul className="flex space-x-10">
            <li className="text-white font-medium text-xl">What we do</li>
            <li className="text-white font-medium text-xl">For Talent</li>
            <li className="text-white font-medium text-xl">For Clients</li>
          </ul>
        </div>

        <button
          onClick={() => setShowLoginModal(true)}
          className="bg-white px-6 py-2 rounded-md text-[#0a0a23] font-bold"
        >
          Login
        </button>
      </div>

      <Modal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)}>
        {showLoginForm ? (
          <LoginForm toggleContent={toggleLoginForm} />
        ) : (
          <RegistrationForm toggleContent={toggleLoginForm} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
