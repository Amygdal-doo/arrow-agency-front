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

export interface IJobCategory {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface IJobSkill {
  jobId: string;
  skillId: string;
  skill: {
    id: string;
    name: string;
  };
}

export interface IOrganization {
  id: string;
  name: string;
  about: string;
  culture: string | null;
  benefits: string | null;
  email: string;
  location: string;
  verified: boolean;
  createdBy: string;
  status: string;
  userId: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface IJob {
  id: string;
  worldwide: boolean;
  remote: boolean;
  experienceRequired: string | null;
  name: string;
  description: string;
  salary: string;
  applyBeforeDate: string;
  noOfVacancies: number;
  applicationLinkOrEmail: string;
  typeOfApplication: string;
  status: string;
  createdBy: string;
  jobCategoryId: string;
  userId: string | null;
  organizationId: string;
  jobType: string;
  createdAt: string;
  updatedAt: string;
  jobCategory: IJobCategory;
  organization: IOrganization;
  jobSkills: IJobSkill[];
}

interface JobsResponse {
  results: IJob[];
  pages: number;
}

interface IJobsContextProps {
  jobs: IJob[];
  myJobs: IJob[];
  loading: boolean;
  myJobsLoading: boolean;
  error: string | null;
  myJobsError: string | null;
  worldwide: boolean;
  setWorldwide: (worldwide: boolean) => void;
  remote: boolean;
  setRemote: (remote: boolean) => void;
  page: number;
  setPage: (page: number) => void;
  limit: number;
  setLimit: (limit: number) => void;
  type: string;
  setType: (type: string) => void;
  search: string;
  setSearch: (search: string) => void;
  pages: number;
  myJobsPage: number;
  setMyJobsPage: (page: number) => void;
  myJobsLimit: number;
  setMyJobsLimit: (limit: number) => void;
  myJobsType: string;
  setMyJobsType: (type: string) => void;
  myJobsSearch: string;
  setMyJobsSearch: (search: string) => void;
  myJobsPages: number;
  fetchJobs: () => Promise<void>;
  fetchMyJobs: () => Promise<void>;
}

export const JobsContext = createContext<IJobsContextProps>({
  jobs: [],
  myJobs: [],
  loading: false,
  myJobsLoading: false,
  error: null,
  myJobsError: null,
  worldwide: false,
  setWorldwide: () => {},
  remote: false,
  setRemote: () => {},
  page: 1,
  setPage: () => {},
  limit: 10,
  setLimit: () => {},
  type: "asc",
  setType: () => {},
  search: "",
  setSearch: () => {},
  pages: 1,
  myJobsPage: 1,
  setMyJobsPage: () => {},
  myJobsLimit: 10,
  setMyJobsLimit: () => {},
  myJobsType: "asc",
  setMyJobsType: () => {},
  myJobsSearch: "",
  setMyJobsSearch: () => {},
  myJobsPages: 1,
  fetchJobs: async () => {},
  fetchMyJobs: async () => {},
});

export const AllJobsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [myJobs, setMyJobs] = useState<IJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [myJobsLoading, setMyJobsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [myJobsError, setMyJobsError] = useState<string | null>(null);

  // Jobs state
  const [page, setPage] = useState(1);
  const [worldwide, setWorldwide] = useState(false);
  const [remote, setRemote] = useState(false);
  const [limit, setLimit] = useState(10);
  const [type, setType] = useState("asc");
  const [search, setSearch] = useState("");
  const [pages, setPages] = useState(1);

  // My Jobs state
  const [myJobsPage, setMyJobsPage] = useState(1);
  const [myJobsLimit, setMyJobsLimit] = useState(10);
  const [myJobsType, setMyJobsType] = useState("asc");
  const [myJobsSearch, setMyJobsSearch] = useState("");
  const [myJobsPages, setMyJobsPages] = useState(1);

  const { data: session, status } = useSession();

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response: AxiosResponse<JobsResponse> = await apiService.get(
        `jobs/search`,
        {
          params: {
            page,
            limit,
            type,
            search,
            worldwide,
            remote,
          },
        }
      );
      setJobs(response.data.results || []);
      setPages(response.data.pages || 1);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setError("Failed to fetch jobs.");
    } finally {
      setLoading(false);
    }
  };

  const fetchMyJobs = async () => {
    if (!session?.user?.accessToken) return;

    setMyJobsLoading(true);
    try {
      const response: AxiosResponse<JobsResponse> = await apiService.get(
        `jobs/search/me`,
        {
          params: {
            page: myJobsPage,
            limit: myJobsLimit,
            type: myJobsType,
            search: myJobsSearch,
            worldwide,
            remote,
          },
        }
      );
      setMyJobs(response.data.results || []);
      setMyJobsPages(response.data.pages || 1);
    } catch (error) {
      console.error("Error fetching my jobs:", error);
      setMyJobsError("Failed to fetch my jobs.");
    } finally {
      setMyJobsLoading(false);
    }
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchJobs();
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [page, limit, type, search, worldwide, remote]);

  useEffect(() => {
    if (status === "authenticated") {
      const debounceTimer = setTimeout(() => {
        fetchMyJobs();
      }, 300);

      return () => clearTimeout(debounceTimer);
    }
  }, [
    status,
    session,
    myJobsPage,
    myJobsLimit,
    myJobsType,
    myJobsSearch,
    worldwide,
    remote,
  ]);

  return (
    <JobsContext.Provider
      value={{
        jobs,
        myJobs,
        loading,
        myJobsLoading,
        error,
        myJobsError,
        worldwide,
        setWorldwide,
        remote,
        setRemote,
        page,
        setPage,
        limit,
        setLimit,
        type,
        setType,
        search,
        setSearch,
        pages,
        myJobsPage,
        setMyJobsPage,
        myJobsLimit,
        setMyJobsLimit,
        myJobsType,
        setMyJobsType,
        myJobsSearch,
        setMyJobsSearch,
        myJobsPages,
        fetchJobs,
        fetchMyJobs,
      }}
    >
      {children}
    </JobsContext.Provider>
  );
};

export const useJobs = () => useContext(JobsContext);
