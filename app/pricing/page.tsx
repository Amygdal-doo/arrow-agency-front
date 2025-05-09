"use client";
import { motion } from "framer-motion";
import { BsCheckCircleFill } from "react-icons/bs";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import CVForm from "../components/CVForm";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
import { useApplicants } from "@/providers/ApplicantsProvider";
import { useProfile } from "@/providers/ProfileInfoProvider";
import { useSubscriptionPlans } from "@/providers/SubscriptionPlansProvider";
import SubscriptionModal from "../components/SubscriptionModal";
import { useSubscriptionStatus } from "@/providers/SubscriptionStatusProvider";

export default function Pricing() {
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const { data: session, status } = useSession();
  const { plans, loading, fetchPlans, setSelectedPlanId } =
    useSubscriptionPlans();
  const { profile } = useProfile();
  const { applicants } = useApplicants();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showCVModal, setShowCVModal] = useState(false);
  const { subscription } = useSubscriptionStatus();

  useEffect(() => {
    fetchPlans();
  }, []);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handlePlanClick = (planName: string, planId: string) => {
    switch (planName) {
      case "Free Plan":
        if (status === "authenticated" && session?.user?.accessToken) {
          setShowCVModal(true);
        } else {
          setShowLoginModal(true);
        }
        break;
      case "HR Subscription":
        if (status === "authenticated" && session?.user?.accessToken) {
          setShowSubscriptionModal(true);
          setSelectedPlanId(planId);
        } else {
          setShowLoginModal(true);
        }
        break;

        break;
      case "Enterprise":
        window.location.href = `mailto:info@amygdal.com?subject=Enterprise Plan Inquiry`;
        break;
    }
  };

  const getButtonText = (planName: string) => {
    if (planName === "Free Plan") return "Get Started";
    if (planName === "Enterprise") return "Contact Sales";
    if (planName === "HR Subscription") {
      if (subscription?.status === "ACTIVE") {
        return subscription.customerCancelled
          ? "Subscribe"
          : "Cancel Subscription";
      }
      return "Subscribe";
    }
    return "Subscribe";
  };

  if (loading)
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#01070a] to-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );

  return (
    <main className="bg-[#01070a]">
      <section className="relative pt-40 w-full flex items-center">
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 py-8">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-4"
            >
              <span className="bg-orange-500/20 backdrop-blur-sm text-orange-400 px-4 py-2 rounded-full text-sm font-medium">
                Pricing Plans
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold"
            >
              <span className="text-white">Choose the right</span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-500 bg-clip-text text-transparent">
                plan for you
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-2xl"
            >
              Select a plan that best suits your needs. Upgrade or downgrade at
              any time.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className={`relative bg-white/5 rounded-2xl p-8 border ${
                plan.name === "HR Subscription"
                  ? "border-orange-500/50 shadow-orange-500/20 shadow-lg"
                  : "border-gray-700/50"
              }`}
            >
              {plan.name === "HR Subscription" && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>

                <div className="flex items-baseline">
                  {plan.name === "Enterprise" ? (
                    <span className="text-4xl font-bold text-white">
                      Custom
                    </span>
                  ) : (
                    <span className="text-4xl font-bold text-white">
                      ${plan.price}
                      <span className="text-lg text-gray-400">
                        /{plan.period}
                      </span>
                    </span>
                  )}
                </div>

                <ul className="space-y-4">
                  {plan.features.cvEdits !== null ? (
                    <li className="flex items-center gap-3 text-gray-300">
                      <BsCheckCircleFill className="text-orange-500" />
                      {`${plan.features.cvEdits} CV Edits`}
                    </li>
                  ) : (
                    <li className="flex items-center gap-3 text-gray-300">
                      <BsCheckCircleFill className="text-orange-500" />
                      Infinite CV Edits
                    </li>
                  )}
                  {plan.features.cvCreations !== null ? (
                    <li className="flex items-center gap-3 text-gray-300">
                      <BsCheckCircleFill className="text-orange-500" />
                      {`${plan.features.cvCreations} CV Creations`}
                    </li>
                  ) : (
                    <li className="flex items-center gap-3 text-gray-300">
                      <BsCheckCircleFill className="text-orange-500" />
                      Infinite CV Creations
                    </li>
                  )}
                  {plan.features.jobUploads !== null ? (
                    <li className="flex items-center gap-3 text-gray-300">
                      <BsCheckCircleFill className="text-orange-500" />
                      {`${plan.features.jobUploads} Job Uploads`}
                    </li>
                  ) : (
                    <li className="flex items-center gap-3 text-gray-300">
                      <BsCheckCircleFill className="text-orange-500" />
                      Infinite Job Uploads
                    </li>
                  )}
                  <li
                    className={`flex items-center gap-3 ${
                      plan.features.unlimitedCVStorage
                        ? "text-gray-300"
                        : "text-gray-500 line-through"
                    }`}
                  >
                    <BsCheckCircleFill
                      className={
                        plan.features.unlimitedCVStorage
                          ? "text-orange-500"
                          : "text-gray-700"
                      }
                    />
                    Unlimited CV Storage
                  </li>
                  <li
                    className={`flex items-center gap-3 ${
                      plan.features.accessToAllJobPostings
                        ? "text-gray-300"
                        : "text-gray-500 line-through"
                    }`}
                  >
                    <BsCheckCircleFill
                      className={
                        plan.features.accessToAllJobPostings
                          ? "text-orange-500"
                          : "text-gray-700"
                      }
                    />
                    Access to All Job Postings
                  </li>
                  <li
                    className={`flex items-center gap-3 ${
                      plan.features.unlimitedCVScanningTools
                        ? "text-gray-300"
                        : "text-gray-500 line-through"
                    }`}
                  >
                    <BsCheckCircleFill
                      className={
                        plan.features.unlimitedCVScanningTools
                          ? "text-orange-500"
                          : "text-gray-700"
                      }
                    />
                    Unlimited CV Scanning Tools
                  </li>
                  <li
                    className={`flex items-center gap-3 ${
                      plan.features.advancedCandidateFilteringAndSearch
                        ? "text-gray-300"
                        : "text-gray-500 line-through"
                    }`}
                  >
                    <BsCheckCircleFill
                      className={
                        plan.features.advancedCandidateFilteringAndSearch
                          ? "text-orange-500"
                          : "text-gray-700"
                      }
                    />
                    Advanced Candidate Filtering And Search
                  </li>
                </ul>

                <button
                  onClick={() => handlePlanClick(plan.name, plan.id)}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-200 ${
                    plan.name === "HR Subscription"
                      ? "bg-orange-600 hover:bg-orange-700 text-white"
                      : "bg-gray-800 hover:bg-gray-700 text-white"
                  }`}
                >
                  {getButtonText(plan.name)}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Modal isOpen={showCVModal} onClose={() => setShowCVModal(false)}>
        {profile?.user?.role === "USER" &&
        applicants &&
        applicants.length >= 1 ? (
          <div className="bg-gray-800 p-8 rounded-xl w-full">
            <div className="text-center px-2 lg:px-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Premium Subscription Required
              </h3>
              <p className="text-gray-300 mb-8">
                You have reached the maximum number of applicants for a free
                account. Upgrade to premium to add unlimited applicants and
                access more features.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setShowCVModal(false);
                  }}
                  className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-2 md:px-6 rounded-lg transition-colors text-center"
                >
                  Subscribe
                </button>
                <button
                  onClick={() => setShowCVModal(false)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-gray-300 font-semibold py-3 px-2 md:px-6 rounded-lg transition-colors text-center"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : (
          <CVForm onClose={() => setShowCVModal(false)} />
        )}
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
      <SubscriptionModal
        setShowModal={setShowSubscriptionModal}
        isOpen={showSubscriptionModal}
      />
    </main>
  );
}
