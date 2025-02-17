"use client";
import Image from "next/image";
import React, { useState } from "react";
import HeroBackground from "../../public/hero.jpg";
import Modal from "./Modal";
import CVForm from "./CVForm";

const HeroSection = () => {
  const [showCVModal, setShowCVModal] = useState(false);
  return (
    <section className="relative h-[90vh] w-full">
      <Image
        src={HeroBackground}
        alt="Hero Background"
        className="w-full h-[90vh] object-fill absolute"
      />
      <div className="container mx-auto h-full flex flex-col justify-evenly relative">
        <div className="flex-col space-y-8">
          <p className="text-white text-6xl font-bold max-w-lg">
            Turn AI research into real-world impact
          </p>
          <p className="text-white text-3xl font-medium">
            Looking to post a job or explore AI-powered CV generation?
          </p>
          <button
            onClick={() => setShowCVModal(true)}
            className="bg-white px-10 py-3 rounded-md font-bold"
          >
            Get Started
          </button>
        </div>
      </div>
      <Modal isOpen={showCVModal} onClose={() => setShowCVModal(false)}>
        <CVForm />
      </Modal>
    </section>
  );
};

export default HeroSection;
