"use client";
import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
  useEffect,
} from "react";
// import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
import { AxiosResponse } from "axios";
import { apiService } from "@/core/services/apiService";

export interface OrganizationResponse {
  id: string;
  name: string;
  location: string;
  status: string;
  updatedAt: string;
  userId: string | null;
  verified: boolean;
  about: string;
  benefits: string | null;
  createdAt: string;
  createdBy: string;
  culture: string | null;
  email: string;
  file: null | any;
}

export interface ICategory {
  id: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ISkill {
  id: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}

interface ICreateJobContextProps {
  categories: ICategory[];
  skills: ISkill[];
  selectedSkills: ISkill[];
  setSelectedSkills: React.Dispatch<React.SetStateAction<ISkill[]>>;
  loading: boolean;
  fetchCategories: () => Promise<void>;
  fetchSkills: () => Promise<void>;
}

export const CreateJobContext = createContext<ICreateJobContextProps>({
  categories: [],
  skills: [],
  selectedSkills: [],
  loading: false,
  setSelectedSkills: () => {},
  fetchCategories: async () => {},
  fetchSkills: async () => {},
});

export const CreateJobProvider: FC<PropsWithChildren> = ({ children }) => {
  //   const router = useRouter();
  //   const { data: session, status } = useSession();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [skills, setSkills] = useState<ISkill[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<ISkill[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const response: AxiosResponse<{ results: ICategory[] }> =
        await apiService.get("job-category/search?page=1&limit=20&type=asc");
      setCategories(response.data.results);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchSkills = async () => {
    setLoading(true);
    try {
      const response: AxiosResponse<{ results: ISkill[] }> =
        await apiService.get("skill/search?page=1&limit=158&type=asc");
      setSkills(response.data.results);
    } catch (error) {
      console.error("Error fetching skills:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchSkills();
  }, []);

  return (
    <CreateJobContext.Provider
      value={{
        categories,
        skills,
        loading,
        selectedSkills,
        setSelectedSkills,
        fetchCategories,
        fetchSkills,
      }}
    >
      {children}
    </CreateJobContext.Provider>
  );
};

export const useCreateJob = () => useContext(CreateJobContext);
