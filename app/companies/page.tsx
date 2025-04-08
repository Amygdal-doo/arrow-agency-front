"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useCompanies } from "@/providers/AllCompaniesProvider";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";
import TabButton from "../components/TabButton";

export default function CompaniesPage() {
  const { status } = useSession();

  const {
    companies,
    myCompanies,
    page,
    setPage,
    pages,
    loading,
    myCompaniesPage,
    setMyCompaniesPage,
    myCompaniesPages,
    search,
    setSearch,
    myCompaniesSearch,
    setMyCompaniesSearch,
    fetchCompanies,
    fetchMyCompanies,
  } = useCompanies();

  const [showMyCompanies, setShowMyCompanies] = useState(false);

  const currentCompanies = showMyCompanies ? myCompanies : companies;
  const currentSearch = showMyCompanies ? myCompaniesSearch : search;
  const setCurrentSearch = showMyCompanies ? setMyCompaniesSearch : setSearch;
  const currentPage = showMyCompanies ? myCompaniesPage : page;
  const totalPages = showMyCompanies ? myCompaniesPages : pages;
  const setCurrentPage = showMyCompanies ? setMyCompaniesPage : setPage;

  useEffect(() => {
    if (status === "unauthenticated") {
      fetchCompanies();
    } else {
      fetchMyCompanies();
      fetchCompanies();
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
            {showMyCompanies ? "My Companies" : "Discover Great Companies"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400"
          >
            {showMyCompanies
              ? "Manage and view your organization profiles"
              : "Connect with innovative organizations in tech and AI"}
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
                isActive={!showMyCompanies}
                onClick={() => setShowMyCompanies(false)}
              >
                All Companies
              </TabButton>
              <TabButton
                isActive={showMyCompanies}
                onClick={() => setShowMyCompanies(true)}
              >
                My Companies
              </TabButton>
            </div>
          )}

          <div className=" bg-white/5 rounded-2xl p-6">
            <div className="flex gap-4 items-center">
              <input
                type="text"
                placeholder={`Search ${
                  showMyCompanies ? "my" : "all"
                } companies...`}
                value={currentSearch}
                onChange={(e) => setCurrentSearch(e.target.value)}
                className="flex-1 p-4 rounded-xl bg-gray-800/50 text-white border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              />
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
        {!loading && currentCompanies.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {showMyCompanies
                ? "You haven't created any companies yet"
                : "No companies found"}
            </h3>
            <p className="text-gray-400 mb-8">
              {showMyCompanies
                ? "Start by creating your first company profile"
                : "Try adjusting your search criteria"}
            </p>
            {showMyCompanies && (
              <Link href="/post-job">
                <button className="px-8 py-3 rounded-xl font-medium bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white transition-all">
                  Create Company
                </button>
              </Link>
            )}
          </div>
        )}

        {/* Companies Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto"
        >
          {currentCompanies.map((company) => (
            <motion.div
              key={company.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="group relative  bg-white/5 rounded-2xl p-6 border border-gray-700/50 hover:border-orange-500/50 transition-all"
            >
              <div className="space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Company Logo */}
                  {company.logo && (
                    <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-800/50">
                      <Image
                        src={company.logo.url}
                        alt={company.name}
                        width={company.logo.width}
                        height={company.logo.height}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  {/* Company Info */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {company.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{company.location}</p>
                  </div>
                  {/* About */}
                  <p className="text-gray-400 line-clamp-3">{company.about}</p>
                  {/* Additional Info */}
                  <div className="flex space-x-4">
                    {company.culture && (
                      <div className="flex gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400">
                          Great Culture
                        </span>
                      </div>
                    )}
                    {company.benefits && (
                      <div className="flex gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                          Benefits
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <Link
                  href={`/companies/${company.id}`}
                  className="mt-4 block w-full text-center bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white py-3 rounded-xl transition-all duration-200 font-semibold"
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
