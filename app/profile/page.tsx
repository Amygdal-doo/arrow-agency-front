"use client";
import { apiService } from "@/core/services/apiService";
import { AxiosResponse } from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
      return;
    }

    if (status === "authenticated" && session?.user) {
      const fetchProfile = async () => {
        setLoading(true);
        try {
          const response: AxiosResponse = await apiService.get(`users/me`);

          setProfile(response.data);
        } catch (error) {
          console.error("Error fetching profile data:", error);
          //   handleError(error);
          setError("Failed to fetch profile data.");
        } finally {
          setLoading(false);
        }
      };
      fetchProfile();
      setLoading(false);
    }
  }, [status, session, router]);

  return <div className="text-white">{JSON.stringify(status, null, 2)}</div>;
}
