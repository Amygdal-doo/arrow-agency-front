"use client";
import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { AxiosResponse } from "axios";
import { apiService } from "@/core/services/apiService";

interface ISubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  currency: string;
  period: string;
}

export interface ISubscriptionStatus {
  id: string;
  planId: string;
  status: "ACTIVE" | "PAST_DUE" | "CANCELED" | "PENDING" | "FAILED";
  startDate: string;
  nextBillingDate: string;
  ammount: string;
  customerCancelled: boolean;
  cancelledAt: string | null;
  createdAt: string;
  updatedAt: string;
  plan: ISubscriptionPlan;
}

interface ISubscriptionStatusContextProps {
  subscription: ISubscriptionStatus | null;
  loading: boolean;
  fetchSubscriptionStatus: () => Promise<void>;
}

export const SubscriptionStatusContext =
  createContext<ISubscriptionStatusContextProps>({
    subscription: null,
    loading: false,
    fetchSubscriptionStatus: async () => {},
  });

export const SubscriptionStatusProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [subscription, setSubscription] = useState<ISubscriptionStatus | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  const fetchSubscriptionStatus = async () => {
    setLoading(true);
    try {
      if (session?.user?.accessToken) {
        const response: AxiosResponse<ISubscriptionStatus> =
          await apiService.get("subscription/status");
        setSubscription(response.data);
      }
    } catch (error) {
      console.error("Error fetching subscription status:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetchSubscriptionStatus();
    }
  }, [status, session, router]);

  return (
    <SubscriptionStatusContext.Provider
      value={{ subscription, loading, fetchSubscriptionStatus }}
    >
      {children}
    </SubscriptionStatusContext.Provider>
  );
};

export const useSubscriptionStatus = () =>
  useContext(SubscriptionStatusContext);
