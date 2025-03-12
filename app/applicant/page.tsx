"use client";
import { useApplicants } from "@/providers/ApplicantsProvider";
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
    <div>
      {applicants?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applicants.map((applicant) => (
            <div
              key={applicant.cvId}
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
                href={`/applicant/${applicant?.cvId}`}
                className="mt-4 block font-bold w-full text-center bg-orange-600 hover:bg-orange-400 text-white py-2 rounded-md transition-colors"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-xl text-white">No applicant added</p>
      )}
      {applicants?.length ? (
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
      ) : (
        ""
      )}
    </div>
  );
}
