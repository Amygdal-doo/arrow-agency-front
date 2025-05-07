"use client";
import { useProfile } from "@/providers/ProfileInfoProvider";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProfileForm from "../components/ProfileForm";
import { useApplicants } from "@/providers/ApplicantsProvider";
import { useSubscriptionStatus } from "@/providers/SubscriptionStatusProvider";
import SubscriptionModal from "../components/SubscriptionModal";

export default function Profile() {
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  const { subscription } = useSubscriptionStatus();
  const { profile } = useProfile();
  const { fetchApplicants } = useApplicants();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/");
      return;
    } else {
      fetchApplicants();
    }
  }, [status, session, router]);

  // const [isUploading, setIsUploading] = useState(false);

  // const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (!file || !(file instanceof File)) return;

  //   try {
  //     setIsUploading(true);
  //     const formData = new FormData();
  //     formData.append("file", file);

  //     await apiService.put("user/profile/company-logos", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });

  //     await fetchProfile();
  //   } catch (error) {
  //     console.error("Error uploading logo:", error);
  //   } finally {
  //     setIsUploading(false);
  //   }
  // };

  return (
    <div className="min-h-screen bg-[#01070a] text-white pb-12 pt-20 lg:pt-40">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        {/* <pre className="text-white">
          {JSON.stringify(subscription, null, 2)}
        </pre> */}
        {/* <pre className="text-white">{JSON.stringify(profile, null, 2)}</pre> */}
        <div className=" flex flex-col lg:flex-row justify-between gap-8 rounded-lg py-8 mb-8 ">
          <div className="flex-1">
            <h1 className="text-4xl font-bold mb-4 text-white">Profile</h1>
            <p className="text-gray-300">{profile?.user?.email}</p>
            <div className="bg-orange-600 text-gray-300 px-3 py-1 rounded-full font-semibold text-sm mt-2 inline-block">
              {profile?.user?.role}
            </div>
          </div>

          {subscription && (
            <div className="flex-1 bg-gray-900/50 rounded-xl p-6 border border-gray-700">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-white mb-2">
                    {subscription.plan.name}
                  </h2>
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        subscription.status === "ACTIVE"
                          ? "bg-green-500/20 text-green-400"
                          : subscription.status === "PAST_DUE"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : subscription.status === "CANCELED"
                          ? "bg-red-500/20 text-red-400"
                          : subscription.status === "PENDING"
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-gray-500/20 text-gray-400"
                      }`}
                    >
                      {subscription.status}
                    </span>
                    <span className="text-2xl font-bold text-white">
                      ${subscription.ammount}
                      <span className="text-sm text-gray-400">
                        /{subscription.plan.period}
                      </span>
                    </span>
                  </div>
                </div>
                {subscription.status === "ACTIVE" &&
                  !subscription.customerCancelled && (
                    <button
                      onClick={() => setShowSubscriptionModal(true)}
                      className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-all duration-200"
                    >
                      Cancel
                    </button>
                  )}
              </div>

              <p className="text-sm text-gray-400 mb-4">
                {subscription.plan.description}
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Start Date</p>
                  <p className="text-white">
                    {new Date(subscription.startDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Next Billing</p>
                  <p className="text-white">
                    {new Date(
                      subscription.nextBillingDate
                    ).toLocaleDateString()}
                  </p>
                </div>
                {subscription.cancelledAt && (
                  <div className="col-span-2">
                    <p className="text-gray-400">Cancelled On</p>
                    <p className="text-red-400">
                      {new Date(subscription.cancelledAt).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* <div className="bg-gray-800/50 flex justify-between items-start rounded-lg p-8 mb-8 border border-gray-700">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-white">Profile</h1>
            <p className="text-gray-300">{profile?.user?.email}</p>
          </div>
          <div className="flex flex-col space-y-4 items-end">
            <div>
              <div className="bg-green-700 text-gray-300 px-3 py-1 rounded-full text-sm mt-2 inline-block">
                {profile?.user?.role}
              </div>
            </div>
            <button
              onClick={() => {}}
              className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white rounded-full font-medium transition-all duration-200 shadow-lg disabled:opacity-50"
            >
              Cancel subscription
            </button>
          </div>
        </div> */}

        {/* Profile Form */}
        <ProfileForm />

        {/* <div className="flex items-center justify-between my-8">
          <h2 className="text-2xl font-bold text-white">Company Logos</h2>
          <div className="h-px flex-1 bg-gray-700 mx-4" />
          <label className="relative cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="hidden"
              disabled={isUploading}
            />
            <span className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white rounded-lg font-medium  transition-all duration-200 shadow-lg disabled:opacity-50">
              {isUploading ? (
                <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              ) : (
                "Add New Logo"
              )}
            </span>
          </label>
        </div> */}

        {/* <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-lg my-8">
          {profile?.companyLogos && profile.companyLogos.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {profile.companyLogos.map((logo) => (
                <div
                  key={logo.id}
                  className="group relative bg-gray-800/30 rounded-lg p-4 border border-gray-700/50 hover:bg-gray-800/50 transition-all duration-200"
                >
                  <Image
                    src={logo.url}
                    alt={logo.name}
                    width={logo.width || 200}
                    height={logo.height || 200}
                    className="w-full h-32 object-contain rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
                    <div className="text-center p-4">
                      <p className="text-sm text-gray-300 mb-2">{logo.name}</p>
                      <p className="text-xs text-gray-400">
                        {new Date(logo.createdAt).toLocaleDateString()}
                      </p>
                      <p className="text-xs text-gray-400">
                        {logo.width}x{logo.height}px
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-400 ">
              No company logos uploaded yet
            </div>
          )}
        </div> */}

        {/* Applicants Section */}

        {/* <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Applicants</h2>
          <div className="h-px flex-1 bg-gray-700 mx-4" />
          <button
            onClick={() => {
              if (
                profile?.user?.role === "USER" &&
                applicants &&
                applicants.length >= 1
              ) {
                setShowPremiumModal(true);
              } else {
                setShowCVModal(true);
              }
            }}
            className="inline-flex items-center px-4 py-2 bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white rounded-lg font-medium transition-all duration-200 shadow-lg disabled:opacity-50"
          >
            Add New Applicant
          </button>
        </div> */}

        {/* {applicants?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applicants.map((applicant) => (
              <div
                key={applicant.id}
                className="bg-gray-800/50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-700 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {applicant.firstName + " " + applicant.lastName}
                    </h3>
                    <p className="text-gray-400">Position</p>
                  </div>
                
                </div>
                <p className="text-gray-300 mb-4">{applicant.email}</p>
                <p className="text-gray-300 mb-4">{applicant.phone}</p>

                <a
                  href={`/applicant/${applicant?.id}`}
                  className="mt-4 block font-semibold w-full text-center bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white py-2 rounded-md transition-colors"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-14 text-gray-400 bg-gray-800/50 rounded-xl border border-gray-700/50 shadow-lg my-8">
            No applicant added
          </div>
        )}
        {applicants?.length > 0 ? (
          <div className="flex w-full justify-end py-8">
            <button
              onClick={() => router.push("/applicant")}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-lg font-medium hover:from-orange-700 hover:to-orange-800 transition-all duration-200 shadow-lg disabled:opacity-50"
            >
              View all
            </button>
          </div>
        ) : (
          <></>
        )} */}
      </div>
      <SubscriptionModal
        setShowModal={setShowSubscriptionModal}
        isOpen={showSubscriptionModal}
      />
    </div>
  );
}
