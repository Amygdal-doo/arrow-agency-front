"use client";
import { useApplicants } from "@/providers/ApplicantsProvider";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import CVForm from "../components/CVForm";
import { useProfile } from "@/providers/ProfileInfoProvider";
import PremiumRequiredModal from "../components/PremiumRequiredModal";

export default function ApplicantsPage() {
  const [showCVModal, setShowCVModal] = useState(false);

  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  const { profile } = useProfile();
  const { applicants, page, setPage, pages, fetchApplicants } = useApplicants();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/");
      return;
    } else {
      fetchApplicants();
    }
  }, [status, session, router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#01070a] to-gray-900">
      <div className="container mx-auto px-4 pb-24 pt-40">
        {/* Hero Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Applicants</h2>
          <div className="h-px flex-1 bg-gray-700 mx-4" />
          <button
            onClick={() => {
              if (
                profile?.user?.role === "USER" &&
                applicants &&
                applicants.length >= 1
              ) {
                setShowPremiumModal(true);
              } else {
                setShowCVModal(true);
              }
            }}
            className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white rounded-lg font-medium transition-all duration-200 shadow-lg disabled:opacity-50"
          >
            Add New Applicant
          </button>
        </div>

        {/* Applicants Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto"
        >
          {applicants.map((applicant) => (
            <motion.div
              key={applicant.cvId}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="group relative bg-white/5 rounded-2xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {applicant.firstName + " " + applicant.lastName}
                    </h3>
                    <p className="text-gray-400 text-sm">AI Engineer</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-400">
                    Available
                  </span>
                </div>

                {/* Contact Info */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-sm">{applicant.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span className="text-sm">{applicant.phone}</span>
                  </div>
                </div>

                <Link
                  href={`/applicant/${applicant.id}`}
                  className="mt-4 block w-full text-center bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white py-3 rounded-xl transition-all duration-200 font-semibold"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {pages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2">
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded-lg bg-gray-800/50 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700/50 transition-all"
            >
              Previous
            </button>
            <div className="flex gap-2">
              {Array.from({ length: pages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => setPage(pageNum)}
                  className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                    pageNum === page
                      ? "bg-orange-500 text-white"
                      : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50"
                  }`}
                >
                  {pageNum}
                </button>
              ))}
            </div>
            <button
              onClick={() => setPage(Math.min(pages, page + 1))}
              disabled={page === pages}
              className="px-4 py-2 rounded-lg bg-gray-800/50 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700/50 transition-all"
            >
              Next
            </button>
          </div>
        )}
      </div>

      <Modal isOpen={showCVModal} onClose={() => setShowCVModal(false)}>
        <CVForm onClose={() => setShowCVModal(false)} />
      </Modal>
      <PremiumRequiredModal
        isOpen={showPremiumModal}
        setShowModal={setShowPremiumModal}
      />
    </div>
  );
}
