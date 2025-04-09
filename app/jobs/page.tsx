"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useJobs } from "@/providers/AllJobsProvider";
import Link from "next/link";
import { useSession } from "next-auth/react";
import TabButton from "../components/TabButton";

export default function JobsPage() {
  const { status } = useSession();

  const {
    jobs,
    myJobs,
    page,
    setPage,
    pages,
    loading,
    myJobsPage,
    setMyJobsPage,
    myJobsPages,
    search,
    setSearch,
    myJobsSearch,
    setMyJobsSearch,
    fetchJobs,
    fetchMyJobs,
    worldwide,
    setWorldwide,
    remote,
    setRemote,
  } = useJobs();
  const [showMyJobs, setShowMyJobs] = useState(false);

  const currentJobs = showMyJobs ? myJobs : jobs;
  const currentSearch = showMyJobs ? myJobsSearch : search;
  const setCurrentSearch = showMyJobs ? setMyJobsSearch : setSearch;
  const currentPage = showMyJobs ? myJobsPage : page;
  const totalPages = showMyJobs ? myJobsPages : pages;
  const setCurrentPage = showMyJobs ? setMyJobsPage : setPage;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      fetchJobs();
    } else {
      fetchMyJobs();
      fetchJobs();
    }
  }, [status]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#01070a] to-gray-900">
      <div className="container mx-auto px-4 pb-24 pt-40">
        {/* Hero Section */}
        <div className="mx-auto text-start mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-300"
          >
            {showMyJobs ? "My Job Listings" : "Find Your Next Opportunity"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            {showMyJobs
              ? "Manage and track your posted positions"
              : "Discover cutting-edge positions in AI and technology"}
          </motion.p>
        </div>

        {/* Tabs and Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mb-12 space-y-6"
        >
          {status === "authenticated" && (
            <div className="flex space-x-4">
              <TabButton
                isActive={!showMyJobs}
                onClick={() => setShowMyJobs(false)}
              >
                All Jobs
              </TabButton>
              <TabButton
                isActive={showMyJobs}
                onClick={() => setShowMyJobs(true)}
              >
                My Jobs
              </TabButton>
            </div>
          )}

          <div className=" bg-white/5 rounded-2xl p-6">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <input
                  type="text"
                  placeholder={`Search ${showMyJobs ? "my" : "all"} jobs...`}
                  value={currentSearch}
                  onChange={(e) => setCurrentSearch(e.target.value)}
                  className="flex-1 w-full p-4 rounded-xl bg-gray-800/50 text-white border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
                {showMyJobs && (
                  <Link href="/post-job" className="w-full sm:w-auto">
                    <button className="px-6 w-full sm:w-auto py-4 rounded-xl font-medium  bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white transition-all">
                      Post New Job
                    </button>
                  </Link>
                )}
              </div>

              {/* Filters */}
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={remote}
                    onChange={(e) => setRemote(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 rounded-full border border-gray-600/50 bg-gray-800/50 peer-checked:bg-orange-500 relative">
                    <svg
                      className="absolute w-3 h-3 top-1 left-1 text-white opacity-0 peer-checked:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-300">
                    Remote Only
                  </span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={worldwide}
                    onChange={(e) => setWorldwide(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-5 h-5 rounded-full border border-gray-600/50 bg-gray-800/50 peer-checked:bg-orange-500 relative">
                    <svg
                      className="absolute w-3 h-3 top-1 left-1 text-white opacity-0 peer-checked:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-gray-300">
                    Worldwide
                  </span>
                </label>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
          </div>
        )}

        {/* Empty State */}
        {!loading && currentJobs.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {showMyJobs ? "You haven't posted any jobs yet" : "No jobs found"}
            </h3>
            <p className="text-gray-400 mb-8">
              {showMyJobs
                ? "Start by posting your first job"
                : "Try adjusting your search criteria"}
            </p>
            {showMyJobs && (
              <Link href="/post-job">
                <button className="px-8 py-3 rounded-xl font-medium bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white transition-all">
                  Post a Job
                </button>
              </Link>
            )}
          </div>
        )}

        {/* Jobs Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto"
        >
          {currentJobs.map((job) => (
            <motion.div
              key={job.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="group relative  bg-white/5 rounded-2xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {job.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {job.organization.name}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    {job.remote && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-400">
                        Remote
                      </span>
                    )}
                  </div>
                </div>

                {/* Category and Type */}
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400">
                    {job.jobCategory.name}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400">
                    {job.jobType.replace("_", " ")}
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {job.jobSkills.slice(0, 3).map(({ skill }) => (
                    <span
                      key={skill.id}
                      className="px-2 py-1 rounded-lg text-xs bg-gray-800/50 text-gray-400 border border-gray-700/50"
                    >
                      {skill.name}
                    </span>
                  ))}
                  {job.jobSkills.length > 3 && (
                    <span className="px-2 py-1 rounded-lg text-xs bg-gray-800/50 text-gray-400">
                      +{job.jobSkills.length - 3} more
                    </span>
                  )}
                </div>

                <p className="text-orange-400 font-medium">{job.salary}</p>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <span>{job.organization.location}</span>
                  </div>
                  <span>Apply before {formatDate(job.applyBeforeDate)}</span>
                </div>

                <Link
                  href={`/jobs/${job.id}`}
                  className="mt-4 block w-full text-center  bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white py-3 rounded-xl transition-all duration-200 font-semibold"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg bg-gray-800/50 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700/50 transition-all"
            >
              Previous
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                      pageNum === currentPage
                        ? "bg-orange-500 text-white"
                        : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50"
                    }`}
                  >
                    {pageNum}
                  </button>
                )
              )}
            </div>
            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg bg-gray-800/50 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700/50 transition-all"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
