"use client";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IOrganization } from "@/providers/AllCompaniesProvider";
import Image from "next/image";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { apiService } from "@/core/services/apiService";
import { useSession } from "next-auth/react";

export default function CompanyDetailsPage() {
  const { data: session, status } = useSession();
  const { id } = useParams();
  const router = useRouter();
  const [company, setCompany] = useState<IOrganization | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchCompany = async () => {
    setLoading(true);
    try {
      const response = await apiService.get<IOrganization>(
        `organization/{id}?id=${id}`
      );
      if (response.data) {
        setCompany(response.data);
      } else {
        throw new Error("Company not found");
      }
    } catch (error) {
      console.error("Error fetching company:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/");
      return;
    } else {
      fetchCompany();
    }
  }, [status, id, session]);

  if (loading || !company) {
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
          onClick={() => router.back()}
          className="text-orange-500 hover:text-orange-600 transition-all mb-10"
        >
          ← Back to All Companies
        </button>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Company Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className=" bg-white/5 rounded-2xl p-8 border border-gray-700/50"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {company.logo && (
                  <div className="relative w-32 h-32 rounded-lg overflow-hidden">
                    <Image
                      src={company.logo.url}
                      alt={company.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h1 className="text-4xl font-bold text-white mb-2">
                    {company.name}
                  </h1>
                  <div className="flex items-center gap-2 text-gray-400 mb-4">
                    <HiOutlineLocationMarker className="w-5 h-5" />
                    <span>{company.location}</span>
                  </div>
                  {company.verified && (
                    <span className="px-4 py-2 rounded-xl text-sm font-medium bg-blue-500/10 text-blue-400">
                      Verified Company
                    </span>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Company Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className=" bg-white/5 rounded-2xl p-8 border border-gray-700/50"
            >
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">About</h2>
                  <p className="text-gray-300 whitespace-pre-wrap">
                    {company.about}
                  </p>
                </div>

                {company.culture && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Company Culture
                    </h2>
                    <p className="text-gray-300 whitespace-pre-wrap">
                      {company.culture}
                    </p>
                  </div>
                )}

                {company.benefits && (
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Benefits
                    </h2>
                    <p className="text-gray-300 whitespace-pre-wrap">
                      {company.benefits}
                    </p>
                  </div>
                )}
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
            {/* Contact Info */}
            <div className=" bg-white/5 rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <HiOutlineMail className="w-5 h-5 text-orange-400" />
                  <a
                    href={`mailto:${company.email}`}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    {company.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <HiOutlineLocationMarker className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300">{company.location}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            {/* <Link href={`/companies/${company.id}/jobs`}>
              <button className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2">
                View Open Positions
                <BsBriefcase className="w-5 h-5" />
              </button>
            </Link> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
