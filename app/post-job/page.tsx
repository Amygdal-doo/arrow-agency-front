"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import JobForm, {
  JobFormData,
  jobSchema,
} from "../components/post-job/JobForm";
import CompanyForm, {
  CompanyFormData,
  companySchema,
} from "../components/post-job/CompanyForm";
import { apiService } from "@/core/services/apiService";
import Preview from "../components/post-job/Preview";
import { useSession } from "next-auth/react";
import {
  OrganizationResponse,
  useCreateJob,
} from "@/providers/CreateJobProvider";

import { useCompanies } from "@/providers/AllCompaniesProvider";
import { usePackages } from "@/providers/PackagesProvider";
import Packages from "../components/post-job/Packages";
import { useRouter } from "next/navigation";
import { scrollToTop } from "@/core/consts/scrollToTop";

const steps = [
  { id: 1, name: "Job Details" },
  { id: 2, name: "Company Info" },
  { id: 3, name: "Preview" },
  { id: 4, name: "Purchase" },
];

interface PaymentResponse {
  paymentUrl: string;
}

interface JobResponse {
  id: string;
}

export default function PostJob() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const { fetchCategories, fetchSkills, setSelectedSkills } = useCreateJob();
  const { fetchMyCompanies, selectedCompany } = useCompanies();
  const { fetchPackages, packageId } = usePackages();
  const [jobId, setJobId] = useState("");
  const [currentStep, setCurrentStep] = useState(1);

  const [loading, setLoading] = useState(false);

  const jobMethods = useForm<JobFormData>({
    resolver: zodResolver(jobSchema),
  });

  const companyMethods = useForm<CompanyFormData>({
    resolver: zodResolver(companySchema),
  });

  const handleOrganizationCreate = async (formData: FormData) => {
    const endpoint = session?.user?.accessToken
      ? "organization/create-logged-in"
      : "organization/create";

    const response = await apiService.post<OrganizationResponse>(
      endpoint,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          ...(session?.user?.accessToken && {
            Authorization: `Bearer ${session.user.accessToken}`,
          }),
        },
      }
    );

    return response;
  };

  const handleJobCreate = async (jobData: JobFormData) => {
    const endpoint = session?.user?.accessToken
      ? "jobs/create-logged-in"
      : "jobs/create";

    const response = await apiService.post<JobResponse>(
      endpoint,
      {
        ...jobData,
        typeOfApplication: "EMAIL",
      },
      {
        headers: {
          ...(session?.user?.accessToken && {
            Authorization: `Bearer ${session.user.accessToken}`,
          }),
        },
      }
    );

    return response;
  };

  const handlePaymentInitialize = async (jobId: string) => {
    const endpoint = session?.user?.accessToken
      ? "payment/pay-by-link"
      : "payment/pay-by-link/not-logged";

    const response = await apiService.post<PaymentResponse>(endpoint, {
      jobId,
      packageId,
    });

    return response;
  };

  const handleNext = async () => {
    scrollToTop();
    if (currentStep === 1) {
      try {
        const isValid = await jobMethods.trigger();
        console.log("Validation errors:", jobMethods.formState.errors);
        console.log("data job", jobMethods.getValues());
        if (isValid) {
          setCurrentStep(2);
        } else {
          // Log specific validation errors
          Object.entries(jobMethods.formState.errors).forEach(
            ([field, error]) => {
              console.log(`${field}:`, error.message);
            }
          );
        }
      } catch (error) {
        console.error("Form validation error:", error);
      }
    } else if (currentStep === 2) {
      const isValid = await companyMethods.trigger();
      if (isValid) {
        try {
          const data = companyMethods.getValues();

          if (!selectedCompany) {
            const formData = new FormData();

            formData.append("name", data.name);
            formData.append("about", data.about);
            formData.append("location", data.location);
            if (data.culture) {
              formData.append("culture", data.culture);
            }
            if (data.benefits) {
              formData.append("benefits", data.benefits);
            }
            formData.append("email", data.email);
            if (data.file) {
              formData.append("file", data.file);
            }
            console.log("company", data);
            // setOrganizationId(data.id);

            const response = await handleOrganizationCreate(formData);

            if (response) {
              console.log("response company", response);
              jobMethods.setValue("organization", response.data.id, {
                shouldValidate: true,
                shouldDirty: true,
              });
              setCurrentStep(3);
            }
          } else {
            jobMethods.setValue("organization", selectedCompany.id, {
              shouldValidate: true,
              shouldDirty: true,
            });
            setCurrentStep(3);
          }
        } catch (error) {
          console.error("Error creating organization:", error);
        }
      }
    } else if (currentStep === 3) {
      const jobData = jobMethods.getValues();
      try {
        // Make a request to backend API
        const response = await handleJobCreate(jobData);
        if (response?.data) {
          console.log("response company", response);
          setJobId(response.data.id);
          setCurrentStep(4);
        }
      } catch (error) {
        console.error("Error creating job:", error);
      }
    }
  };

  const onSubmit = async () => {
    try {
      setLoading(true);

      const response = await handlePaymentInitialize(jobId);

      if (response?.data?.paymentUrl) {
        window.open(response.data.paymentUrl, "_blank", "noopener,noreferrer");
        jobMethods.reset();
        companyMethods.reset();
        setCurrentStep(1);
        setSelectedSkills([]);
        router.push("/jobs");
      }
    } catch (error) {
      console.error("Error initializing payment:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
    fetchCategories();
    fetchSkills();
    if (status === "authenticated") {
      fetchMyCompanies();
    }
  }, [status]);

  return (
    <div className="h-[92vh] py-12 px-4 sm:px-6 lg:px-8 bg-[#01070a]">
      <div className="container mx-auto h-full pt-20 relative">
        {/* Modal-like container */}
        <div className="px-0 h-full flex flex-col">
          {/* Progress bar and header */}

          {/* Fixed header with steps - will stay at top */}
          <div className="py-8 top-0 z-20">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Post a New Job</h2>
              <div className="h-px flex-1 bg-gray-700 mx-4" />
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-between gap-2 mb-4">
              {steps.map((step) => (
                <div key={step.id} className="flex-1 text-center">
                  <div
                    className={` h-1 rounded-full transition-all ${
                      currentStep >= step.id ? "bg-orange-600" : "bg-gray-700"
                    }`}
                  />
                  <p
                    className={` ${
                      currentStep === step.id
                        ? "text-orange-500"
                        : "text-gray-500"
                    }`}
                  >
                    {step.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* <pre className="text-white">callback url{callbackUrl}</pre> */}

          {/* Form */}
          {/* Scrollable form content */}
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-6  max-h-[80vh]">
              {currentStep === 1 && <JobForm jobMethods={jobMethods} />}
              {currentStep === 2 && (
                <CompanyForm companyMethods={companyMethods} />
              )}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <Preview
                    jobData={jobMethods.getValues()}
                    companyData={companyMethods.getValues()}
                  />
                </div>
              )}

              {currentStep === 4 && <Packages />}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentStep(currentStep - 1);
                      scrollToTop();
                    }}
                    className="bg-gray-700/50 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600/50 transition-all"
                  >
                    Previous
                  </button>
                )}
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="ml-auto bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white px-6 py-3 rounded-lg font-medium  transition-all duration-200 shadow-lg"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={onSubmit}
                    disabled={loading || !packageId}
                    className={`ml-auto bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white px-6 py-3 rounded-lg font-medium 
                    ${
                      loading
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:shadow-orange-500/25"
                    } 
                    transition-all duration-200 shadow-lg`}
                  >
                    {loading ? "Processing..." : "Submit"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
