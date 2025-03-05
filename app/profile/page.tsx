"use client";
import { useProfile } from "@/providers/ProfileInfoProvider";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ProfileForm from "../components/ProfileForm";
import { useApplicants } from "@/providers/ApplicantsProvider";

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { profile } = useProfile();
  const { applicants, page, setPage, pages } = useApplicants();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/");
      return;
    }
  }, [status, session, router]);

  return (
    <div className="min-h-screen bg-[#01070a] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        {/* <pre className="text-white">{JSON.stringify(applicants, null, 2)}</pre> */}
        <div className="bg-gray-800 flex justify-between items-start rounded-lg p-8 mb-8 border border-gray-700">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-white">Profile</h1>
            <p className="text-gray-300">{profile?.user?.email}</p>
          </div>
          <div className="bg-green-700 text-gray-300 px-3 py-1 rounded-full text-sm mt-2 inline-block">
            {profile?.user?.role}
          </div>
        </div>

        {/* Profile Form */}
        <ProfileForm />

        {/* Applicants Section */}
        <h2 className="text-3xl font-bold mt-8 mb-4 text-white">Applicants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applicants?.map((applicant) => (
            <div
              key={applicant.id}
              className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-700 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {applicant.firstName + " " + applicant.lastName}
                  </h3>
                  <p className="text-gray-400">Position</p>
                </div>
                {/* <span
                  className={`px-3 py-1 rounded-full text-sm font-medium bg-gray-600 text-gray-200
                    
                    `}
                >
                  hired
                </span> */}
              </div>
              <p className="text-gray-300 mb-4">{applicant.email}</p>
              <p className="text-gray-300 mb-4">{applicant.phone}</p>

              <a
                href={`/applicant/${applicant?.id}`}
                className="mt-4 block font-bold w-full text-center bg-orange-600 hover:bg-orange-400 text-white py-2 rounded-md transition-colors"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-end items-center my-4 space-x-4">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="rounded-full disabled:opacity-50 h-10 w-10 bg-gray-700 flex items-center justify-center"
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

          {/* Page Number */}
          <p className="text-lg font-bold text-white">
            {page} <span className="opacity-50">of {pages}</span>
          </p>

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === pages}
            className="rounded-full h-10 w-10 disabled:opacity-50 bg-gray-700 flex items-center justify-center"
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
        </div>
      </div>
    </div>
  );
}
