"use client";
import { usePackages } from "@/providers/PackagesProvider";
import React from "react";

const Packages = () => {
  const { packages, packageId, setPackageId } = usePackages();
  return (
    <div className="space-y-6 px-3">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">
          Choose Your Package
        </h3>
        <p className="text-gray-400">
          Select the best package that suits your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`relative rounded-2xl p-6 transition-all duration-300 cursor-pointer border-2 
${
  packageId === pkg.id
    ? "bg-orange-600/10 border-orange-500"
    : "bg-white/5 border-gray-700/50 hover:border-orange-500/50"
}`}
            onClick={() => setPackageId(pkg.id)}
          >
            {/* Package Header */}
            <div className="text-center mb-6">
              <h4 className="text-xl font-bold text-white mb-2">{pkg.name}</h4>
              <div className="flex items-center justify-center gap-1">
                <span className="text-3xl font-bold text-orange-500">
                  ${pkg.price}
                </span>
                <span className="text-gray-400">USD</span>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-gray-300">
                <svg
                  className="w-5 h-5 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>30-day listing duration</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <svg
                  className="w-5 h-5 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Featured company logo</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <svg
                  className="w-5 h-5 text-orange-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Social media promotion</span>
              </div>
              {pkg.name === "BETTER" && (
                <>
                  <div className="flex items-center gap-2 text-gray-300">
                    <svg
                      className="w-5 h-5 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Priority listing placement</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <svg
                      className="w-5 h-5 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Email blast to candidates</span>
                  </div>
                </>
              )}
              {pkg.name === "BEST" && (
                <>
                  <div className="flex items-center gap-2 text-gray-300">
                    <svg
                      className="w-5 h-5 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Premium placement</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <svg
                      className="w-5 h-5 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Featured in newsletter</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <svg
                      className="w-5 h-5 text-orange-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Candidate matching service</span>
                  </div>
                </>
              )}
            </div>

            {/* Selection Indicator */}
            {packageId === pkg.id && (
              <div className="absolute -top-2 -right-2 bg-orange-500 rounded-full p-1">
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
