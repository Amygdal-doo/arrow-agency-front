"use client";

import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
  useEffect,
} from "react";
import { AxiosResponse } from "axios";
import { apiService } from "@/core/services/apiService";
import { useSession } from "next-auth/react";

export interface IApplicant {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  technologies: string[];
  cv: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    summary: string;
    skills: string[];
    hobbies: string[];
    certificates: (string | null)[];
    courses: (string | null)[];
    educations: (string | null)[];
    languages: (string | null)[];
    projects: (string | null)[];
    socials: (string | null)[];
    experience: (string | null)[];
    createdAt: string;
    updatedAt: string;
  };
  userId: string;
  cvId: string;
  file: string;
  createdAt: string;
  updatedAt: string;
}

interface ApplicantsResponse {
  results: IApplicant[];
  pages: number;
}

interface IApplicantsContextProps {
  applicants: IApplicant[];
  loading: boolean;
  error: string | null;
  page: number;
  setPage: (page: number) => void;
  limit: number;
  setLimit: (limit: number) => void;
  type: string;
  setType: (type: string) => void;
  technologies: string[];
  setTechnologies: (tech: string[]) => void;
  pages: number;
  fetchApplicants: () => Promise<void>;
}

export const ApplicantsContext = createContext<IApplicantsContextProps>({
  applicants: [],
  loading: false,
  error: null,
  page: 1,
  setPage: () => {},
  limit: 6,
  setLimit: () => {},
  type: "asc",
  setType: () => {},
  technologies: [],
  setTechnologies: () => {},
  pages: 1,
  fetchApplicants: async () => {},
});

export const ApplicantsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [applicants, setApplicants] = useState<IApplicant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [type, setType] = useState("asc");
  const [technologies, setTechnologies] = useState<string[]>([]);
  const [pages, setPages] = useState(1);

  const { data: session, status } = useSession();

  const fetchApplicants = async () => {
    setLoading(true);
    try {
      if (session?.user?.accessToken) {
        const response: AxiosResponse<ApplicantsResponse> =
          await apiService.get(`applicant`, {
            params: {
              page,
              limit,
              type,
              technologies,
            },
          });
        setApplicants(response.data.results || []);
        setPages(response.data.pages || 1);
      }
    } catch (error) {
      console.error("Error fetching applicants:", error);
      setError("Failed to fetch applicants.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetchApplicants();
    }
  }, [status, session, page, limit, type, technologies]);

  return (
    <ApplicantsContext.Provider
      value={{
        applicants,
        loading,
        error,
        page,
        setPage,
        limit,
        setLimit,
        type,
        setType,
        technologies,
        setTechnologies,
        pages,
        fetchApplicants,
      }}
    >
      {children}
    </ApplicantsContext.Provider>
  );
};

export const useApplicants = () => useContext(ApplicantsContext);
