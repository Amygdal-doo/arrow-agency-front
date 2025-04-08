"use client";
import Image from "next/image";
import React, { useState } from "react";
import HeroBackground from "../../public/hero.jpg";
import Modal from "./Modal";
import CVForm from "./CVForm";
import { useSession } from "next-auth/react";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { data: session, status } = useSession();

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showCVModal, setShowCVModal] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <section className="relative min-h-[100vh] w-full flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={HeroBackground}
          alt="Hero Background"
          className="w-full h-full object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-orange-500/20 via-purple-500/10 to-transparent opacity-60 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-4xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-4"
          >
            <span className="bg-orange-500/20 backdrop-blur-sm text-orange-400 px-4 py-2 rounded-full text-sm font-medium">
              AI-Powered Recruitment Platform
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold"
          >
            <span className="text-white">Turn AI research into</span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent">
              real-world impact
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl"
          >
            Looking to post a job or explore AI-powered CV generation? Join our
            platform and connect with the world&apos;s leading AI talent.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-8"
          >
            <motion.button
              onClick={() => {
                if (status === "authenticated" && session?.user?.accessToken) {
                  setShowCVModal(true);
                } else {
                  setShowLoginModal(true);
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg "
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Modals */}
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
