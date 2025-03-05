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

interface IUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  applicants: any[];
  files: any[];
}

export interface IUserProfile {
  id: string;
  address: string;
  phoneNumber: string;
  userId: string;
  user: IUser;
}
interface IProfileContextProps {
  profile: IUserProfile | null;
  loading: boolean;
  fetchProfile: () => Promise<void>;
}

export const ProfileContext = createContext<IProfileContextProps>({
  profile: null,
  loading: false,
  fetchProfile: async () => {},
});

export const ProfileProvider: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [profile, setProfile] = useState<IUserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    setLoading(true);
    try {
      if (session?.user?.accessToken) {
        const response: AxiosResponse<IUserProfile> = await apiService.get(
          "user/profile"
        );
        setProfile(response.data);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/");
      return;
    }
    if (status === "authenticated") {
      fetchProfile();
    }
  }, [status, session, router]);

  return (
    <ProfileContext.Provider value={{ profile, loading, fetchProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
