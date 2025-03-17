"use client";
import { useApplicants } from "@/providers/ApplicantsProvider";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ApplicantsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
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
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen w-full bg-[#01070a] pt-40"
    >
      <div className="container mx-auto h-full flex flex-col justify-evenly relative z-10">
        <div className="flex-col px-8 space-y-8 text-white">
          <p className="text-6xl font-bold max-w-lg">
            Find Your Next AI Talent
          </p>
          <p className="text-3xl font-medium">
            Browse through our pool of AI-specialized candidates
          </p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-lg p-8 mt-8"
        >
          {applicants?.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {applicants.map((applicant) => (
                <motion.div
                  key={applicant.cvId}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-700"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {applicant.firstName + " " + applicant.lastName}
                      </h3>
                      <p className="text-gray-400">AI Engineer</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-indigo-900 text-indigo-200">
                      Available
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
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
                      <span>{applicant.email}</span>
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
                      <span>{applicant.phone}</span>
                    </div>
                  </div>

                  <a
                    href={`/applicant/${applicant?.id}`}
                    className="mt-4 block w-full text-center bg-orange-600 hover:bg-orange-400 text-white py-2 rounded-md transition-colors"
                  >
                    View Details
                  </a>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl text-white text-center"
            >
              No applicants available at the moment
            </motion.p>
          )}

          {applicants?.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-end items-center mt-8 space-x-4"
            >
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className="rounded-full disabled:opacity-50 h-10 w-10 bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <p className="text-lg font-bold text-white">
                {page} <span className="opacity-50">of {pages}</span>
              </p>

              <button
                onClick={() => setPage(page + 1)}
                disabled={page === pages}
                className="rounded-full h-10 w-10 disabled:opacity-50 bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
