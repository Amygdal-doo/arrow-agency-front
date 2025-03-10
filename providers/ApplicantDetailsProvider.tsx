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
  id?: string;
  position: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface IProject {
  id?: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  url: string;
}

export interface IEducation {
  id?: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
}

export interface ICertificate {
  id?: string;
  name: string;
  issuer: string;
  issueDate: string;
  expirationDate: string;
  url: string;
}

export interface ICourse {
  id?: string;
  name: string;
  url: string;
  startDate: string;
  endDate: string;
}

export interface ISocial {
  id?: string;
  name: string;
  url: string;
}

export interface ILanguage {
  id?: string;
  name: string;
  efficiency: string;
}

export interface ISkill {
  id?: string;
  name: string;
  efficiency: string;
  // cvId: string;
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
  currentSkills: ISkill[];
  setCurrentSkills: (value: ISkill[]) => void;
  hobbies: string[];
  setHobbies: (value: string[]) => void;
  experience: IExperience[];
  setExperience: (value: IExperience[]) => void;
  currentExperience: IExperience[];
  setCurrentExperience: (value: IExperience[]) => void;
  projects: IProject[];
  setProjects: (value: IProject[]) => void;
  currentProjects: IProject[];
  setCurrentProjects: (value: IProject[]) => void;
  educations: IEducation[];
  setEducations: (value: IEducation[]) => void;
  currentEducations: IEducation[];
  setCurrentEducations: (value: IEducation[]) => void;
  certificates: ICertificate[];
  setCertificates: (value: ICertificate[]) => void;
  currentCertificates: ICertificate[];
  setCurrentCertificates: (value: ICertificate[]) => void;
  courses: ICourse[];
  setCourses: (value: ICourse[]) => void;
  currentCourses: ICourse[];
  setCurrentCourses: (value: ICourse[]) => void;
  socials: ISocial[];
  setSocials: (value: ISocial[]) => void;
  currentSocials: ISocial[];
  setCurrentSocials: (value: ISocial[]) => void;
  languages: ILanguage[];
  setLanguages: (value: ILanguage[]) => void;
  currentLanguages: ILanguage[];
  setCurrentLanguages: (value: ILanguage[]) => void;
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
  const [currentSkills, setCurrentSkills] = useState<ISkill[]>([]);
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [experience, setExperience] = useState<IExperience[]>([]);
  const [currentExperience, setCurrentExperience] = useState<IExperience[]>([]);
  const [projects, setProjects] = useState<IProject[]>([]);
  const [currentProjects, setCurrentProjects] = useState<IProject[]>([]);
  const [educations, setEducations] = useState<IEducation[]>([]);
  const [currentEducations, setCurrentEducations] = useState<IEducation[]>([]);
  const [certificates, setCertificates] = useState<ICertificate[]>([]);
  const [currentCertificates, setCurrentCertificates] = useState<
    ICertificate[]
  >([]);
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [currentCourses, setCurrentCourses] = useState<ICourse[]>([]);
  const [socials, setSocials] = useState<ISocial[]>([]);
  const [currentSocials, setCurrentSocials] = useState<ISocial[]>([]);
  const [languages, setLanguages] = useState<ILanguage[]>([]);
  const [currentLanguages, setCurrentLanguages] = useState<ILanguage[]>([]);
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
          `cv/${id}`
        );
        const data = response.data;
        setApplicant(data);

        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
        setPhone(data.phone);
        setSummary(data.summary);
        setSkills(data.skills);
        setCurrentSkills(data.skills);
        setHobbies(data.hobbies);
        setExperience(data.experience);
        setCurrentExperience(data.experience);
        setProjects(data.projects);
        setCurrentProjects(data.projects);
        setEducations(data.educations);
        setCurrentEducations(data.educations);
        setCertificates(data.certificates);
        setCurrentCertificates(data.certificates);
        setCourses(data.courses);
        setCurrentCourses(data.courses);
        setSocials(data.socials);
        setCurrentSocials(data.socials);
        setLanguages(data.languages);
        setCurrentLanguages(data.languages);
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
      await apiService.put(`/cv/${applicant?.id}`, {
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
        currentSkills,
        setCurrentSkills,
        hobbies,
        setHobbies,
        experience,
        setExperience,
        currentExperience,
        setCurrentExperience,
        projects,
        setProjects,
        currentProjects,
        setCurrentProjects,
        educations,
        setEducations,
        currentEducations,
        setCurrentEducations,
        certificates,
        setCertificates,
        currentCertificates,
        setCurrentCertificates,
        courses,
        setCourses,
        currentCourses,
        setCurrentCourses,
        socials,
        setSocials,
        currentSocials,
        setCurrentSocials,
        languages,
        setLanguages,
        currentLanguages,
        setCurrentLanguages,
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
