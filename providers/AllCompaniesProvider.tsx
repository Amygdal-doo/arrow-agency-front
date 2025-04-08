"use client";

import React, {
  createContext,
  useState,
  useEffect,
  FC,
  PropsWithChildren,
  useContext,
} from "react";
import { AxiosResponse } from "axios";
import { apiService } from "@/core/services/apiService";
import { useSession } from "next-auth/react";

// Company Interface (reuse IOrganization from your jobs file)

interface IOrganizationLogo {
  id: string;
  name: string;
  url: string;
  extension: string;
  filteCreatedAt: string;
  userId: string | null;
  organizationId: string | null;
  jobId: string | null;
  applicantId: string | null;
  cvId: string | null;
  height: number;
  width: number;
  profileId: string | null;
  createdAt: string;
  updatedAt: string;
}
export interface IOrganization {
  id: string;
  email: string;
  name: string;
  about: string;
  status: string;
  culture: string | null;
  benefits: string | null;
  location: string;
  verified: boolean;
  createdBy: string;
  userId: string | null;
  createdAt: string;
  updatedAt: string;
  logo: IOrganizationLogo;
}

interface CompaniesResponse {
  results: IOrganization[];
  pages: number;
  limit: number;
  page: number;
  total: number;
}

interface ICompaniesContextProps {
  companies: IOrganization[];
  selectedCompany: IOrganization | null;
  setSelectedCompany: (company: IOrganization | null) => void;
  loading: boolean;
  error: string | null;
  page: number;
  setPage: (page: number) => void;
  limit: number;
  setLimit: (limit: number) => void;
  type: string;
  setType: (type: string) => void;
  search: string;
  setSearch: (search: string) => void;
  pages: number;
  fetchCompanies: () => Promise<void>;
  myCompanies: IOrganization[];
  myCompaniesLoading: boolean;
  myCompaniesError: string | null;
  myCompaniesPage: number;
  setMyCompaniesPage: (page: number) => void;
  myCompaniesLimit: number;
  setMyCompaniesLimit: (limit: number) => void;
  myCompaniesType: string;
  setMyCompaniesType: (type: string) => void;
  myCompaniesSearch: string;
  setMyCompaniesSearch: (search: string) => void;
  myCompaniesPages: number;
  fetchMyCompanies: () => Promise<void>;
}

export const CompaniesContext = createContext<ICompaniesContextProps>({
  companies: [],
  selectedCompany: null,
  setSelectedCompany: () => {},
  loading: false,
  error: null,
  page: 1,
  setPage: () => {},
  limit: 10,
  setLimit: () => {},
  type: "asc",
  setType: () => {},
  search: "",
  setSearch: () => {},
  pages: 1,
  fetchCompanies: async () => {},
  myCompanies: [],
  myCompaniesLoading: false,
  myCompaniesError: null,
  myCompaniesPage: 1,
  setMyCompaniesPage: () => {},
  myCompaniesLimit: 10,
  setMyCompaniesLimit: () => {},
  myCompaniesType: "asc",
  setMyCompaniesType: () => {},
  myCompaniesSearch: "",
  setMyCompaniesSearch: () => {},
  myCompaniesPages: 1,
  fetchMyCompanies: async () => {},
});

export const AllCompaniesProvider: FC<PropsWithChildren> = ({ children }) => {
  const { data: session, status } = useSession();
  const [selectedCompany, setSelectedCompany] = useState<IOrganization | null>(
    null
  );
  const [companies, setCompanies] = useState<IOrganization[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [type, setType] = useState("asc");
  const [search, setSearch] = useState("");
  const [pages, setPages] = useState(1);

  const [myCompanies, setMyCompanies] = useState<IOrganization[]>([]);
  const [myCompaniesLoading, setMyCompaniesLoading] = useState(true);
  const [myCompaniesError, setMyCompaniesError] = useState<string | null>(null);
  const [myCompaniesPage, setMyCompaniesPage] = useState(1);
  const [myCompaniesLimit, setMyCompaniesLimit] = useState(10);
  const [myCompaniesType, setMyCompaniesType] = useState("asc");
  const [myCompaniesSearch, setMyCompaniesSearch] = useState("");
  const [myCompaniesPages, setMyCompaniesPages] = useState(1);

  const fetchCompanies = async () => {
    if (!session?.user?.accessToken) return;
    setLoading(true);
    try {
      const response: AxiosResponse<CompaniesResponse> = await apiService.get(
        `organization/search`,
        {
          params: {
            page,
            limit,
            type,
            search,
          },
        }
      );
      setCompanies(response.data.results || []);
      setPages(response.data.pages || 1);
    } catch (error) {
      console.error("Error fetching companies:", error);
      setError("Failed to fetch companies.");
    } finally {
      setLoading(false);
    }
  };

  const fetchMyCompanies = async () => {
    if (!session?.user?.accessToken) return;

    setMyCompaniesLoading(true);
    try {
      const response: AxiosResponse<CompaniesResponse> = await apiService.get(
        `organization/search/me`,
        {
          params: {
            page: myCompaniesPage,
            limit: myCompaniesLimit,
            type: myCompaniesType,
            search: myCompaniesSearch,
          },
        }
      );
      setMyCompanies(response.data.results || []);
      setMyCompaniesPages(response.data.pages || 1);
    } catch (error) {
      console.error("Error fetching my companies:", error);
      setMyCompaniesError("Failed to fetch my companies.");
    } finally {
      setMyCompaniesLoading(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      const companiesTimer = setTimeout(() => {
        fetchCompanies();
      }, 300);

      const myCompaniesTimer = setTimeout(() => {
        fetchMyCompanies();
      }, 300);

      return () => {
        clearTimeout(companiesTimer);
        clearTimeout(myCompaniesTimer);
      };
    }
  }, [
    status,
    session,
    // Companies dependencies
    page,
    limit,
    type,
    search,
    // My Companies dependencies
    myCompaniesPage,
    myCompaniesLimit,
    myCompaniesType,
    myCompaniesSearch,
  ]);

  return (
    <CompaniesContext.Provider
      value={{
        companies,
        selectedCompany,
        setSelectedCompany,
        loading,
        error,
        page,
        setPage,
        limit,
        setLimit,
        type,
        setType,
        search,
        setSearch,
        pages,
        fetchCompanies,
        myCompanies,
        myCompaniesLoading,
        myCompaniesError,
        myCompaniesPage,
        setMyCompaniesPage,
        myCompaniesLimit,
        setMyCompaniesLimit,
        myCompaniesType,
        setMyCompaniesType,
        myCompaniesSearch,
        setMyCompaniesSearch,
        myCompaniesPages,
        fetchMyCompanies,
      }}
    >
      {children}
    </CompaniesContext.Provider>
  );
};

export const useCompanies = () => useContext(CompaniesContext);
