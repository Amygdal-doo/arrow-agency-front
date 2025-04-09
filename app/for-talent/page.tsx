"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { BsPeople } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RiAirplayLine } from "react-icons/ri";
import { useState } from "react";
import Modal from "../components/Modal";
import CVForm from "../components/CVForm";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
import { useJobs } from "@/providers/AllJobsProvider";
import { useRouter } from "next/navigation";
import Image from "next/image";
import HeroBackground from "../../public/hero.jpg";

export default function ForTalentPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { jobs } = useJobs();

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showCVModal, setShowCVModal] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleGetStarted = () => {
    if (status === "authenticated" && session?.user?.accessToken) {
      setShowCVModal(true);
    } else {
      setShowLoginModal(true);
    }
  };

  return (
    <main className="bg-[#01070a]">
      <section className="relative min-h-[100vh] w-full flex items-center">
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

        <div className="container mx-auto px-4 relative z-10 py-28">
          <div className="max-w-4xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-4"
            >
              <span className="bg-orange-500/20 backdrop-blur-sm text-orange-400 px-4 py-2 rounded-full text-sm font-medium">
                For Talent
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold"
            >
              <span className="text-white">Accelerate Your</span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-500 bg-clip-text text-transparent">
                Career
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-2xl"
            >
              Join our platform to discover exciting opportunities, create an
              AI-powered CV, and connect with leading tech companies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              {status === "authenticated" ? (
                <>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/profile"
                      className="bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg inline-block"
                    >
                      Update Profile
                    </Link>
                  </motion.div>
                  <motion.button
                    onClick={() => setShowCVModal(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg"
                  >
                    Create CV
                  </motion.button>
                </>
              ) : (
                <motion.button
                  onClick={handleGetStarted}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg"
                >
                  Get Started
                </motion.button>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-20 container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <RiAirplayLine className="w-8 h-8" />,
              title: "AI-Powered CV Builder",
              description:
                "Create a standout CV with our AI-powered tools that highlight your skills and experience effectively.",
            },
            {
              icon: <FiSearch className="w-8 h-8" />,
              title: "Smart Job Matching",
              description:
                "Get matched with relevant positions based on your skills, experience, and career preferences.",
            },
            {
              icon: <BsPeople className="w-8 h-8" />,
              title: "Company Network",
              description:
                "Connect with leading AI companies and startups looking for talent like you.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(251, 146, 60, 0.2)",
              }}
              className="bg-white/5 rounded-2xl p-8 border border-gray-700/50"
            >
              <div className="text-orange-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-20 bg-gray-900/50"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "1000+", label: "Available Jobs" },
              { number: "500+", label: "Partner Companies" },
              { number: "95%", label: "Success Rate" },
              { number: "24h", label: "Average Response" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-left"
              >
                <p className="text-4xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-20 container mx-auto px-4 relative overflow-hidden"
      >
        <motion.div className="flex flex-col lg:flex-row items-center space-y-20 lg:space-y-0 pt-20 lg:space-x-10">
          <div className="w-full lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-white mb-6"
            >
              Find Your Dream AI Role
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 mb-8"
            >
              Browse through our curated selection of AI positions. From
              startups to industry leaders, find opportunities that match your
              expertise and career goals.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: "Remote First", description: "Global opportunities" },
                { title: "Top Salary", description: "Market-leading packages" },
                { title: "Fast Track", description: "Streamlined hiring" },
                { title: "AI Focus", description: "Cutting-edge projects" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 p-4 rounded-lg"
                >
                  <h4 className="text-orange-500 font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/jobs"
                className="bg-orange-600 text-lg hover:bg-orange-700 hover:shadow-orange-500/25 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg inline-block"
              >
                View All Positions
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 w-full lg:w-1/2 rounded-2xl p-4 md:p-8 border border-gray-700/50"
          >
            <div className="space-y-4">
              {jobs.slice(0, 3).map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  onClick={() => router.push(`/jobs/${job.id}`)}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200 cursor-pointer"
                >
                  <span className="text-white font-medium">{job.name}</span>
                  <span className="text-orange-500">→</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

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
    </main>
  );
}
