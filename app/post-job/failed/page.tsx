"use client";

import { useRouter } from "next/navigation";

const steps = [
  { id: 1, name: "Job Details", completed: true },
  { id: 2, name: "Company Info", completed: true },
  { id: 3, name: "Preview", completed: true },
  { id: 4, name: "Purchase", completed: true },
];

export default function FailedPage() {
  const router = useRouter();

  return (
    <div className="min-h-[92vh] py-12 px-4 sm:px-6 lg:px-8 bg-[#01070a]">
      <div className="container mx-auto h-full pt-20 relative">
        <div className="px-0 h-full flex flex-col">
          <div className="py-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                Failed to Post Job
              </h2>
              <div className="h-px flex-1 bg-gray-700 mx-4" />
            </div>

            <div className="flex items-center justify-between gap-2 mb-4">
              {steps.map((step) => (
                <div key={step.id} className="flex-1 text-center h-10">
                  <div className="h-1 rounded-full bg-red-900 transition-all" />
                  <p className="text-red-500 text-xs sm:text-[14px] md:text-lg">
                    {step.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-2xl mx-auto w-full rounded-2xl p-8 border border-red-900">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Oops! <br />
                Something Went Wrong
              </h3>
              <p className="text-slate-400 max-w-lg mx-auto">
                We couldn’t complete your job posting due to an unexpected
                issue. Please try again in a moment. If the problem continues,
                feel free to reach out to our support team for help.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/post-job")}
                className="px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-slate-600 transition-all"
              >
                Try Again
              </button>
              <a
                href="mailto:info@digital-arrow.agency"
                className="px-6 py-3 bg-gradient-to-r from-red-600 font-semibold to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
