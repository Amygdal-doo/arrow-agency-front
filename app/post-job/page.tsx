"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
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
import { OrganizationResponse } from "@/providers/JobProvider";

const steps = [
  { id: 1, name: "Job Details" },
  { id: 2, name: "Company Info" },
  { id: 3, name: "Preview" },
  { id: 4, name: "Purchase" },
];

export default function PostJob() {
  const [currentStep, setCurrentStep] = useState(1);

  // const [previewLogo] = useState<string | null>(null);

  // const [organizationId, setOrganizationId] = useState<string>("");

  const jobMethods = useForm<JobFormData>({
    resolver: zodResolver(jobSchema),
  });

  const companyMethods = useForm<CompanyFormData>({
    resolver: zodResolver(companySchema),
  });

  const handleNext = async () => {
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
          const formData = new FormData();

          // setCurrentStep(3);

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

          // Make a request to backend API
          const response = await apiService.post<OrganizationResponse>(
            `organization/create`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );

          if (response) {
            console.log("response company", response);
            jobMethods.setValue("organization", response.data.id, {
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
      setCurrentStep(4);
    }
  };

  const onSubmit = async () => {
    const jobData = jobMethods.getValues();
    const companyData = companyMethods.getValues();
    console.log("job data", jobData);
    console.log("company data", companyData);
    try {
      // Make a request to backend API
      const response = await apiService.post(`jobs/create`, {
        ...jobData,
        typeOfApplication: "EMAIL",
      });

      if (response) {
        alert("Job created successfully!");
      }
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };

  return (
    <div className="h-[92vh] py-12 px-4 sm:px-6 lg:px-8 bg-[#01070a]">
      <div className="container mx-auto h-full pt-20 relative">
        {/* Modal-like container */}
        <div className="px-0 h-full flex flex-col">
          {/* Progress bar and header */}

          {/* Fixed header with steps - will stay at top */}
          <div className="py-8 sticky top-0 z-20">
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

          {/* Form */}
          {/* Scrollable form content */}
          <div className="flex-1 overflow-y-auto">
            <div className="space-y-6 overflow-x-auto max-h-[80vh]">
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

              {currentStep === 4 && (
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white mb-8">
                    Purchase Details
                  </h2>
                  <p className="text-gray-300">Coming soon...</p>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="bg-gray-700/50 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-600/50 transition-all"
                  >
                    Previous
                  </button>
                )}
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="ml-auto bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-3 rounded-lg font-medium hover:from-orange-700 hover:to-orange-800 transition-all duration-200 shadow-lg"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={onSubmit}
                    className="ml-auto bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-3 rounded-lg font-medium hover:from-orange-700 hover:to-orange-800 transition-all duration-200 shadow-lg"
                  >
                    Submit
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
