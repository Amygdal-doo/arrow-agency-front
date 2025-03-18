"use client";
import Image from "next/image";
import React, { useState } from "react";
import HeroBackground from "../../public/hero.jpg";
import Modal from "./Modal";
import CVForm from "./CVForm";
import { useSession } from "next-auth/react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const HeroSection = () => {
  const { data: session, status } = useSession();

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showCVModal, setShowCVModal] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <section className="relative h-[100vh] w-full">
      <Image
        src={HeroBackground}
        alt="Hero Background"
        className="w-full h-[100vh] object-fill absolute"
      />
      <div className="container mx-auto h-full flex flex-col justify-evenly relative px-4">
        <div className="flex-col space-y-8">
          <p className="text-white text-6xl font-bold max-w-lg">
            Turn AI research into real-world impact
          </p>
          <p className="text-white text-3xl font-medium">
            Looking to post a job or explore AI-powered CV generation?
          </p>
          <button
            onClick={() => {
              if (status === "authenticated" && session?.user?.accessToken) {
                setShowCVModal(true);
              } else {
                setShowLoginModal(true);
              }
            }}
            className="bg-white px-10 py-3 rounded-md font-bold"
          >
            Get Started
          </button>
        </div>
      </div>
      <Modal isOpen={showCVModal} onClose={() => setShowCVModal(false)}>
        <CVForm onClose={() => setShowCVModal(false)} />
      </Modal>
      <Modal
        isOpen={showLoginModal}
        onClose={() => {
          setShowLoginModal(false);
          setShowLoginForm(false);
        }}
      >
        {!showLoginForm ? (
          <LoginForm
            toggleContent={toggleLoginForm}
            onClose={() => setShowLoginModal(false)}
          />
        ) : (
          <RegistrationForm toggleContent={toggleLoginForm} />
        )}
      </Modal>
    </section>
  );
};

export default HeroSection;
