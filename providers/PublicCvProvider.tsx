"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { apiService } from "@/core/services/apiService";
import {
  IApplicantDetails,
  ICertificate,
  ICourse,
  IEducation,
  IExperience,
  ILanguage,
  IProject,
  ISkill,
  ISocial,
} from "./ApplicantDetailsProvider";
import { ICompanyLogo } from "./ProfileInfoProvider";

interface CVData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  summary: string;
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  showPersonalInfo: boolean;
  showCompanyInfo: boolean;
  companyName: string;
  companyLogo: ICompanyLogo | null;
  hobbies: string[];
  skills: ISkill[];
  experience: IExperience[];
  projects: IProject[];
  educations: IEducation[];
  certificates: ICertificate[];
  courses: ICourse[];
  languages: ILanguage[];
  socials: ISocial[];
  templateId: string;
  createdAt: string;
  updatedAt: string;
  applicant: IApplicantDetails;
}

interface PublicCVContextType {
  cv: CVData | null;
  loading: boolean;
  error: string | null;
  fetchCV: () => Promise<void>;
}

const PublicCVContext = createContext<PublicCVContextType>({
  cv: null,
  loading: true,
  error: null,
  fetchCV: async () => {},
});

export const usePublicCV = () => {
  const context = useContext(PublicCVContext);
  if (!context) {
    throw new Error("usePublicCV must be used within a PublicCVProvider");
  }
  return context;
};

interface PublicCVProviderProps {
  id: string;
  children: React.ReactNode;
}

export const PublicCVProvider: React.FC<PublicCVProviderProps> = ({
  id,
  children,
}) => {
  const [cv, setCV] = useState<CVData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCV = async () => {
    if (!id) return;

    setLoading(true);
    setError(null);

    try {
      const response: AxiosResponse<CVData> = await apiService.get(
        `cv/public/${id}`
      );
      setCV(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch CV");
      setCV(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCV();
  }, [id]);

  const contextValue: PublicCVContextType = {
    cv,
    loading,
    error,
    fetchCV,
  };

  return (
    <PublicCVContext.Provider value={contextValue}>
      {children}
    </PublicCVContext.Provider>
  );
};
