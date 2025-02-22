'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import HeroBackground from "../../public/hero.jpg";
import { jobListings } from "../conts/jobList";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isRemoteOnly, setIsRemoteOnly] = useState(false);

  const filteredJobs = Array.from(new Set(jobListings.filter((job) => {
    const matchesSearch = 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.technologies.some(tech => 
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    const matchesRemote = isRemoteOnly ? job.isRemote : true;

    return matchesSearch && matchesRemote;
  }).map(job => job.id))).map(id => jobListings.find(job => job.id === id));

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-screen w-full bg-[#01070a]">
      <Image
        src={HeroBackground}
        alt="Hero Background"
        className="w-full h-[90vh] object-fill absolute"
      />
      <div className="container mx-auto h-full flex flex-col justify-evenly relative z-10">
        <div className="flex-col px-8 space-y-8 text-white">
          <p className="text-6xl font-bold max-w-lg">
            Turn AI research into real-world impact
          </p>
          <p className="text-3xl font-medium">
            Looking to post a job or explore AI-powered CV generation?
          </p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-lg p-8 mt-8">
          <div className="mb-8 flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Search by job title or technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-orange-600"
            />
            <div className="flex items-center space-x-2 text-white">
              <input
                type="checkbox"
                id="remoteOnly"
                checked={isRemoteOnly}
                onChange={(e) => setIsRemoteOnly(e.target.checked)}
                className="w-4 h-4 rounded border-gray-700 text-orange-600 focus:ring-orange-600 bg-gray-800"
              />
              <label htmlFor="remoteOnly">Show remote positions only</label>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-white">
            Available Positions
          </h2>
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <motion.div
                key={job?.id}
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
                      {job?.title}
                    </h3>
                    <p className="text-gray-400">{job?.companyName}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      job?.seniority === "senior"
                        ? "bg-purple-900 text-purple-200"
                        : job?.seniority === "mid"
                        ? "bg-blue-900 text-blue-200"
                        : "bg-green-900 text-green-200"
                    }`}
                  >
                    {job?.seniority}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-gray-300 mb-2">{job?.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job?.technologies.map((tech, index) => (
                      <span
                        key={`${job?.id}-${tech}-${index}`}
                        className="bg-gray-700 px-2 py-1 rounded-md text-sm text-gray-300 border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-2">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{job?.location}</span>
                  </div>
                  {job?.isRemote && (
                    <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                      Remote
                    </span>
                  )}
                </div>

                <a
                  href={`/for-talent/${job?.id}`}
                  className="mt-4 block w-full text-center bg-orange-600 hover:bg-orange-400 text-white py-2 rounded-md transition-colors"
                >
                  View Details
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
