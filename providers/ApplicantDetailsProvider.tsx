"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { AxiosResponse } from "axios";
import { apiService } from "@/core/services/apiService";
import { useSession } from "next-auth/react";

export interface IExperience {
  id: string;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface IProject {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  url: string;
}

export interface IEducation {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
}

export interface ICertificate {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expirationDate: string;
  url: string;
}

export interface ICourse {
  id: string;
  name: string;
  url: string;
  startDate: string;
  endDate: string;
}

export interface ISocial {
  id: string;
  name: string;
  url: string;
}

export interface ILanguage {
  id: string;
  name: string;
  efficiency: string;
}

export interface ISkill {
  id: string;
  name: string;
  efficiency: string;
  cvId: string;
}

export interface IFile {
  id: string;
  name: string;
  url: string;
  extension: string;
  fileCreatedAt: string;
  userId: string;
  applicantId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IDelete {
  experience: string[];
  education: string[];
  projects: string[];
  courses: string[];
  certificates: string[];
  languages: string[];
  socials: string[];
  skills: string[];
}

interface IApplicantDetails {
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
    skills: ISkill[];
    hobbies: string[];
    experience: IExperience[];
    projects: IProject[];
    educations: IEducation[];
    certificates: ICertificate[];
    courses: ICourse[];
    languages: ILanguage[];
    socials: ISocial[];
    createdAt: string;
    updatedAt: string;
  };
  userId: string;
  cvId: string;
  file: IFile[];
  createdAt: string;
  updatedAt: string;
}

interface ApplicantContextType {
  applicant?: IApplicantDetails;
  loading: boolean;
  error: string | null;
  firstName: string;
  setFirstName: (value: string) => void;
  lastName: string;
  setLastName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  summary: string;
  setSummary: (value: string) => void;
  skills: ISkill[];
  setSkills: (value: ISkill[]) => void;
  hobbies: string[];
  setHobbies: (value: string[]) => void;
  experience: IExperience[];
  setExperience: (value: IExperience[]) => void;
  projects: IProject[];
  setProjects: (value: IProject[]) => void;
  educations: IEducation[];
  setEducations: (value: IEducation[]) => void;
  certificates: ICertificate[];
  setCertificates: (value: ICertificate[]) => void;
  courses: ICourse[];
  setCourses: (value: ICourse[]) => void;
  socials: ISocial[];
  setSocials: (value: ISocial[]) => void;
  languages: ILanguage[];
  setLanguages: (value: ILanguage[]) => void;
  deleteItems: IDelete;
  setDeleteItems: (value: IDelete) => void;
  updateApplicant: () => Promise<void>;
}

const ApplicantContext = createContext<ApplicantContextType | undefined>(
  undefined
);

export const ApplicantProvider = ({
  children,
  id,
}: {
  children: ReactNode;
  id: string;
}) => {
  const { data: session, status } = useSession();
  const [applicant, setApplicant] = useState<IApplicantDetails | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Editable state for each field
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [skills, setSkills] = useState<ISkill[]>([]);
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [experience, setExperience] = useState<IExperience[]>([]);
  const [projects, setProjects] = useState<IProject[]>([]);
  const [educations, setEducations] = useState<IEducation[]>([]);
  const [certificates, setCertificates] = useState<ICertificate[]>([]);
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [socials, setSocials] = useState<ISocial[]>([]);
  const [languages, setLanguages] = useState<ILanguage[]>([]);
  const [deleteItems, setDeleteItems] = useState<IDelete>({
    experience: [],
    education: [],
    projects: [],
    courses: [],
    certificates: [],
    languages: [],
    socials: [],
    skills: [],
  });

  const fetchApplicant = async () => {
    setLoading(true);
    try {
      if (session?.user?.accessToken) {
        const response: AxiosResponse<IApplicantDetails> = await apiService.get(
          `applicant/${id}`
        );
        const data = response.data;
        setApplicant(data);

        setFirstName(data.cv.firstName);
        setLastName(data.cv.lastName);
        setEmail(data.cv.email);
        setPhone(data.cv.phone);
        setSummary(data.cv.summary);
        setSkills(data.cv.skills);
        setHobbies(data.cv.hobbies);
        setExperience(data.cv.experience);
        setProjects(data.cv.projects);
        setEducations(data.cv.educations);
        setCertificates(data.cv.certificates);
        setCourses(data.cv.courses);
        setSocials(data.cv.socials);
        setLanguages(data.cv.languages);
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const updateApplicant = async () => {
    try {
      setLoading(true);
      await apiService.put(`/cv/${applicant?.cv.id}`, {
        firstName,
        lastName,
        email,
        phone,
        summary,
        skills,
        hobbies,
        experience,
        projects,
        educations,
        certificates,
        courses,
        socials,
        languages,
        delete: {
          expirience: deleteItems.experience,
          education: deleteItems.education,
          projects: deleteItems.projects,
          courses: deleteItems.courses,
          certificates: deleteItems.certificates,
          languages: deleteItems.languages,
          socials: deleteItems.socials,
          skills: deleteItems.skills,
        },
      });
      fetchApplicant();
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetchApplicant();
    }
  }, [status, session, id]);

  return (
    <ApplicantContext.Provider
      value={{
        applicant,
        loading,
        error,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        phone,
        setPhone,
        summary,
        setSummary,
        skills,
        setSkills,
        hobbies,
        setHobbies,
        experience,
        setExperience,
        projects,
        setProjects,
        educations,
        setEducations,
        certificates,
        setCertificates,
        courses,
        setCourses,
        socials,
        setSocials,
        languages,
        setLanguages,
        deleteItems,
        setDeleteItems,
        updateApplicant,
      }}
    >
      {children}
    </ApplicantContext.Provider>
  );
};

export const useApplicant = () => {
  const context = useContext(ApplicantContext);
  if (!context) {
    throw new Error("useApplicant must be used within an ApplicantProvider");
  }
  return context;
};
