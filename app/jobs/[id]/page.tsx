"use client";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { apiService } from "@/core/services/apiService";
import Image from "next/image";
import {
  ICategory,
  ISkill,
  OrganizationResponse,
} from "@/providers/CreateJobProvider";
import { BsBriefcase, BsClock, BsPeople } from "react-icons/bs";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { FiExternalLink } from "react-icons/fi";
import { GiSkills } from "react-icons/gi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Link from "next/link";

interface JobDetails {
  id: string;
  worldwide: boolean;
  remote: boolean;
  name: string;
  description: string;
  salary: string;
  applyBeforeDate: string;
  noOfVacancies: number;
  jobType: string;
  organization: OrganizationResponse;
  jobCategory: ICategory;
  status: string;
  typeOfApplication: string;
  applicationLinkOrEmail: string;
  experienceRequired: string | null;
  jobSkills: ISkill[];
  createdAt: string;
  updatedAt: string;
}

export default function JobDetailsPage() {
  const router = useRouter();
  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(dateString));
  };
  const { id } = useParams();
  const [job, setJob] = useState<JobDetails | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await apiService.get<JobDetails>(`jobs/{id}?id=${id}`);
        setJob(response.data);
      } catch (error) {
        console.error("Error fetching job:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  if (loading || !job) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#01070a] to-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#01070a] to-gray-900">
      <div className="container mx-auto px-4 py-24 md:pt-40">
        <button
          onClick={() => {
            router.push("/jobs");
          }}
          className="text-orange-500 hover:text-orange-600 transition-all mb-10"
        >
          ← Back to All Jobs
        </button>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}

          {/* <pre className="text-white">{JSON.stringify(job, null, 2)}</pre> */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className=" bg-white/5 rounded-2xl p-4 md:p-8 border border-gray-700/50"
            >
              <div className="flex flex-col md:flex-row gap-4 justify-between items-start mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">
                    {job.name}
                  </h1>
                  <p className="text-xl text-gray-400">
                    {job.organization.name}
                  </p>
                </div>
                <div className="flex gap-2">
                  {job.remote && (
                    <span className="px-4 py-2 rounded-xl text-sm font-medium bg-orange-500/10 text-orange-400">
                      Remote
                    </span>
                  )}
                  {job.worldwide && (
                    <span className="px-4 py-2 rounded-xl text-sm font-medium bg-blue-500/10 text-blue-400">
                      Worldwide
                    </span>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className=" bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                    <HiOutlineLocationMarker className="w-4 h-4" />
                    <p>Location</p>
                  </div>
                  <p className="text-white">{job.organization.location}</p>
                </div>
                <div className=" bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                    <BsBriefcase className="w-4 h-4" />
                    <p>Job Type</p>
                  </div>
                  <p className="text-white">{job.jobType.replace("_", " ")}</p>
                </div>
                <div className=" bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                    <RiMoneyDollarCircleLine className="w-4 h-4" />
                    <p>Salary</p>
                  </div>
                  <p className="text-orange-400 font-medium">{job.salary}</p>
                </div>
                <div className=" bg-white/5 rounded-xl p-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm mb-1">
                    <BsPeople className="w-4 h-4" />
                    <p>Vacancies</p>
                  </div>
                  <p className="text-white">{job.noOfVacancies}</p>
                </div>
              </div>
            </motion.div>

            {/* Additional Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className=" bg-white/5 rounded-2xl p-4 md:p-8 border border-gray-700/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <BsClock className="w-5 h-5 text-orange-400" />
                  <div>
                    <p className="text-gray-400 text-sm">Apply Before</p>
                    <p className="text-white">
                      {formatDate(job.applyBeforeDate)}
                    </p>
                  </div>
                </div>
                {job.experienceRequired && (
                  <div className="flex items-center gap-3">
                    <BsBriefcase className="w-5 h-5 text-orange-400" />
                    <div>
                      <p className="text-gray-400 text-sm">
                        Experience Required
                      </p>
                      <p className="text-white">{job.experienceRequired}</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Required Skills
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {job.jobSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-xl text-sm font-medium bg-orange-500/10 text-orange-400 flex items-center gap-2"
                      >
                        <GiSkills className="w-4 h-4" />
                        {skill.skill?.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Job Description
                  </h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 whitespace-pre-wrap break-words">
                      {job.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Company Info */}
            <div className=" bg-white/5 rounded-2xl p-4 md:p-8 border border-gray-700/50">
              <div className="space-y-6">
                <div className="flex flex-col items-start gap-4 mb-6">
                  {job.organization.file && (
                    <div className="relative w-32 h-32 rounded-lg overflow-hidden">
                      <Image
                        src={URL.createObjectURL(job.organization.file)}
                        alt={job.organization.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {job.organization.name}
                    </h3>
                    <p className="text-gray-400">{job.organization.location}</p>
                    <p className="text-orange-500">{job.organization.email}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Overview
                  </h3>
                  <p className="text-gray-300 break-words">
                    {job.organization.about}
                  </p>
                </div>
                {job.organization.culture && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Culture
                    </h3>
                    <p className="text-gray-300">{job.organization.culture}</p>
                  </div>
                )}
                {job.organization.benefits && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Benefits
                    </h3>
                    <p className="text-gray-300">{job.organization.benefits}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Apply Button */}
            {job.typeOfApplication === "EMAIL" ? (
              <a
                href={`mailto:${job.applicationLinkOrEmail}?subject=Application for ${job.name}`}
                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2"
              >
                Apply Now
                <HiOutlineMail className="w-5 h-5" />
              </a>
            ) : (
              <Link
                href={
                  job.applicationLinkOrEmail.startsWith("http")
                    ? job.applicationLinkOrEmail
                    : `https://${job.applicationLinkOrEmail}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2"
              >
                Apply Now
                <FiExternalLink className="w-5 h-5" />
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
