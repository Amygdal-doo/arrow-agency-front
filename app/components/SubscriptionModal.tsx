"use client";
import React, { useState } from "react";
import Modal from "./Modal";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import { useSubscriptionPlans } from "@/providers/SubscriptionPlansProvider";
import { apiService } from "@/core/services/apiService";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useProfile } from "@/providers/ProfileInfoProvider";
import { useSubscriptionStatus } from "@/providers/SubscriptionStatusProvider";

type SubscriptionModalProps = {
  setShowModal: (value: boolean) => void;
  isOpen: boolean;
};

interface PaymentResponse {
  paymentUrl: string;
}

const SubscriptionModal = ({
  setShowModal,
  isOpen,
}: SubscriptionModalProps) => {
  const router = useRouter();
  const [, setShowLoginModal] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const { data: session, status } = useSession();
  const { profile, fetchProfile } = useProfile();
  const { subscription, fetchSubscriptionStatus } = useSubscriptionStatus();
  const { selectedPlanId, setSelectedPlanId } = useSubscriptionPlans();
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setConsent(false);
    setShowLoginModal(false);
    setShowLoginForm(false);
  };

  const handleCancelSubscription = async () => {
    try {
      setLoading(true);
      const response = await apiService.post(
        "payment/subscribe/customer/cancel",
        {}
      );

      if (response.status === 201) {
        await fetchProfile();
        await fetchSubscriptionStatus();
        handleCloseModal();
      }
    } catch (error) {
      console.error("Error canceling subscription:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePaymentInitialize = async (planId: string) => {
    if (session?.user?.accessToken) {
      const endpoint = "payment/subscribe";
      const response = await apiService.post<PaymentResponse>(endpoint, {
        planId,
        consent,
      });
      return response;
    }
  };

  const onSubmit = async () => {
    if (!consent) return;

    try {
      setLoading(true);
      const response = await handlePaymentInitialize(selectedPlanId);

      if (response?.data?.paymentUrl) {
        window.open(response.data.paymentUrl, "_blank", "noopener,noreferrer");
        setSelectedPlanId("");
        router.push("/profile");
      }
    } catch (error) {
      console.error("Error initializing payment:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal}>
      {status === "authenticated" && session?.user?.accessToken ? (
        <div className="bg-gray-800 p-8 rounded-xl w-full">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              {profile?.user?.role !== "USER"
                ? "Premium Subscription"
                : "Subscribe to Premium"}
            </h3>
            {profile?.user?.role !== "USER" ? (
              <div className="space-y-6">
                <p className="text-gray-300">
                  {subscription?.status === "ACTIVE" &&
                  !subscription?.customerCancelled
                    ? "You currently have an active premium subscription. Do you really want to cancel it?"
                    : `Your subscription will remain active until ${
                        subscription &&
                        new Date(
                          subscription.nextBillingDate
                        ).toLocaleDateString()
                      }. You will be able to subscribe again to this plan when the time expires.`}
                </p>
                {subscription?.status === "ACTIVE" &&
                !subscription?.customerCancelled ? (
                  <button
                    onClick={handleCancelSubscription}
                    disabled={loading}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors relative"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-2"
                          viewBox="0 0 24 24"
                        >
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
                        Processing...
                      </div>
                    ) : (
                      "Cancel Subscription"
                    )}
                  </button>
                ) : (
                  <button
                    onClick={handleCloseModal}
                    className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors relative"
                  >
                    OK
                  </button>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-gray-300 mb-8">
                  Please review and accept our terms before proceeding with the
                  subscription.
                </p>
                <div className="bg-gray-700/30 rounded-lg p-6 text-left">
                  <label className="inline-flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 border-2 border-gray-600 rounded peer-checked:border-orange-500 bg-gray-700/50 relative after:content-[''] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2 after:h-2 after:bg-orange-500 after:rounded-sm after:scale-0 peer-checked:after:scale-100 transition-all"></div>
                    <span className="ml-3 text-sm text-gray-300 group-hover:text-gray-200">
                      I agree to the{" "}
                      <Link
                        href="/terms"
                        className="text-orange-500 hover:text-orange-400 underline"
                        target="_blank"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/privacy"
                        className="text-orange-500 hover:text-orange-400 underline"
                        target="_blank"
                      >
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                </div>
                <div className="flex flex-col gap-4">
                  <button
                    onClick={onSubmit}
                    disabled={!consent || loading}
                    className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors relative"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-2"
                          viewBox="0 0 24 24"
                        >
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
                        Processing...
                      </div>
                    ) : (
                      "Continue to Payment"
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : !showLoginForm ? (
        <LoginForm
          toggleContent={toggleLoginForm}
          onClose={() => setShowLoginModal(false)}
        />
      ) : (
        <RegistrationForm toggleContent={toggleLoginForm} />
      )}
    </Modal>
  );
};

export default SubscriptionModal;
