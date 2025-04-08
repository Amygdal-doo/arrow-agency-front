"use client";
import { apiService } from "@/core/services/apiService";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface IPackage {
  id: string;
  name: string;
  price: string;
  currency: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface IPackagesContextProps {
  packages: IPackage[];
  packageId: string;
  setPackageId: (id: string) => void;
  loading: boolean;
  error: string | null;
  fetchPackages: () => Promise<void>;
}

export const PackagesContext = createContext<IPackagesContextProps>({
  packages: [],
  packageId: "",
  setPackageId: () => {},
  loading: false,
  error: null,
  fetchPackages: async () => {},
});

export const PackagesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [packages, setPackages] = useState<IPackage[]>([]);
  const [packageId, setPackageId] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPackages = async () => {
    setLoading(true);
    try {
      const response = await apiService.get<IPackage[]>(`package`);
      setPackages(response.data || []);
    } catch (error) {
      console.error("Error fetching packages:", error);
      setError("Failed to fetch packages.");
    } finally {
      setLoading(false);
    }
  };

  //   useEffect(() => {
  //     fetchPackages();
  //   }, [packages]);

  return (
    <PackagesContext.Provider
      value={{
        packages,
        loading,
        error,
        fetchPackages,
        packageId,
        setPackageId,
      }}
    >
      {children}
    </PackagesContext.Provider>
  );
};

export const usePackages = () => useContext(PackagesContext);
