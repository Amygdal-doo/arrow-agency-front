"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
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

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function ForTalentPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { jobs } = useJobs();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);

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
    <AnimatePresence>
      <main className="min-h-screen bg-gradient-to-b from-[#01070a] to-gray-900">
        <motion.section
          style={{ opacity, scale }}
          className="container mx-auto px-4 pt-40 pb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300"
            >
              Accelerate Your Career in AI
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-400 mb-8"
            >
              Join our platform to discover exciting opportunities, create an
              AI-powered CV, and connect with leading tech companies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex gap-4"
            >
              {status === "authenticated" ? (
                <>
                  <Link
                    href="/profile"
                    className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
                  >
                    Update Your Profile
                  </Link>
                  <button
                    onClick={() => setShowCVModal(true)}
                    className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
                  >
                    Create CV
                  </button>
                </>
              ) : (
                <button
                  onClick={handleGetStarted}
                  className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
                >
                  Create CV
                </button>
              )}
            </motion.div>
          </motion.div>
        </motion.section>

        <section className="container mx-auto px-4 py-20">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
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
                variants={fadeInUp}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(251, 146, 60, 0.2)",
                }}
                className=" bg-white/5 rounded-2xl p-8 border border-gray-700/50"
              >
                <div className="text-orange-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="bg-gray-900/50 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { number: "1000+", label: "Available Jobs" },
                { number: "500+", label: "Partner Companies" },
                { number: "95%", label: "Success Rate" },
                { number: "24h", label: "Average Response" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="text-left"
                >
                  <motion.p
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="text-4xl font-bold text-orange-500 mb-2"
                  >
                    {stat.number}
                  </motion.p>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Find Your Dream AI Role
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Browse through our curated selection of AI positions. From
                startups to industry leaders, find opportunities that match your
                expertise and career goals.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="text-orange-500 font-semibold mb-2">
                    Remote First
                  </h4>
                  <p className="text-gray-400">Global opportunities</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="text-orange-500 font-semibold mb-2">
                    Top Salary
                  </h4>
                  <p className="text-gray-400">Market-leading packages</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="text-orange-500 font-semibold mb-2">
                    Fast Track
                  </h4>
                  <p className="text-gray-400">Streamlined hiring</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg">
                  <h4 className="text-orange-500 font-semibold mb-2">
                    AI Focus
                  </h4>
                  <p className="text-gray-400">Cutting-edge projects</p>
                </div>
              </div>
              <Link
                href="/jobs"
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 inline-block"
              >
                View All Positions
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 rounded-2xl p-8 border border-gray-700/50"
            >
              <div className="space-y-4">
                {jobs.slice(0, 3).map((job, index) => (
                  <motion.div
                    key={index}
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
        </section>

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
    </AnimatePresence>
  );
}
