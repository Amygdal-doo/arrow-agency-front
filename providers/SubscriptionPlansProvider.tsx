"use client";

import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { AxiosResponse } from "axios";
import { apiService } from "@/core/services/apiService";

export interface SubscriptionPlanFeatures {
  unlimitedCVEdits: boolean;
  unlimitedCVStorage: boolean;
  accessToAllJobPostings: boolean;
  unlimitedCVScanningTools: boolean;
  advancedCandidateFilteringAndSearch: boolean;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  currency: string;
  period: string;
  features: SubscriptionPlanFeatures;
  createdAt: string;
  updatedAt: string;
}

interface ISubscriptionContextProps {
  plans: SubscriptionPlan[];
  loading: boolean;
  fetchPlans: () => Promise<void>;
  selectedPlanId: string;
  setSelectedPlanId: (id: string) => void;
}

export const SubscriptionContext = createContext<ISubscriptionContextProps>({
  plans: [],
  loading: false,
  fetchPlans: async () => {},
  selectedPlanId: "",
  setSelectedPlanId: () => {},
});

export const SubscriptionProvider: FC<PropsWithChildren> = ({ children }) => {
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const [selectedPlanId, setSelectedPlanId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPlans = async () => {
    setLoading(true);
    try {
      const response: AxiosResponse<SubscriptionPlan[]> = await apiService.get(
        "/subscription-plan"
      );
      setPlans(response.data);
    } catch (error) {
      console.error("Error fetching subscription plans:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <SubscriptionContext.Provider
      value={{ plans, loading, fetchPlans, selectedPlanId, setSelectedPlanId }}
    >
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscriptionPlans = () => useContext(SubscriptionContext);
