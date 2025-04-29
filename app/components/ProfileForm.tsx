"use client";
import { countries } from "@/core/consts/countries";
import { projectTypeList } from "@/core/consts/projectTypeList";
import { apiService } from "@/core/services/apiService";
import { useProfile } from "@/providers/ProfileInfoProvider";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

interface ProfileFormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  countryOrigin: string;
  preferredWorkCountries: string[];
  nonPreferredWorkCountries: string[];
  nonPreferredProjects: string[];
}

const ProfileForm = () => {
  const { profile, fetchProfile } = useProfile();
  const [preferredCountriesOpen, setPreferredCountriesOpen] = useState(false);
  const [nonPreferredCountriesOpen, setNonPreferredCountriesOpen] =
    useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [nonPreferredProjectsOpen, setNonPreferredProjectsOpen] =
    useState(false);
  const [projectSearch, setProjectSearch] = useState("");
  const [selectedNonPreferredProjects, setSelectedNonPreferredProjects] =
    useState<string[]>(profile?.nonPreferredProjects || []);
  const [countryOriginOpen, setCountryOriginOpen] = useState(false);
  const [countryOriginSearch, setCountryOriginSearch] = useState("");
  const [selectedCountryOrigin, setSelectedCountryOrigin] = useState(
    profile?.countryOrigin || ""
  );
  const [selectedPreferredCountries, setSelectedPreferredCountries] = useState<
    string[]
  >(profile?.preferredWorkCountries || []);
  const [selectedNonPreferredCountries, setSelectedNonPreferredCountries] =
    useState<string[]>(profile?.nonPreferredWorkCountries || []);
  const [availableCountries, setAvailableCountries] =
    useState<string[]>(countries);

  const handleCountryOriginSelect = (country: string) => {
    setSelectedCountryOrigin(country);
    setValue("countryOrigin", country, {
      shouldValidate: true,
      shouldDirty: true,
    });
    setCountryOriginOpen(false);
    setCountryOriginSearch("");
  };

  const filteredOriginCountries = countries.filter((country) =>
    country.toLowerCase().includes(countryOriginSearch.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".country-origin-container")) {
        setCountryOriginOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNonPreferredProjectSelect = (project: string) => {
    if (!selectedNonPreferredProjects.includes(project)) {
      const updatedSelected = [...selectedNonPreferredProjects, project];
      setSelectedNonPreferredProjects(updatedSelected);
      setValue("nonPreferredProjects", updatedSelected, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
    setNonPreferredProjectsOpen(false);
    setProjectSearch("");
  };

  const handleRemoveNonPreferredProject = (projectToRemove: string) => {
    const updatedSelected = selectedNonPreferredProjects.filter(
      (project) => project !== projectToRemove
    );
    setSelectedNonPreferredProjects(updatedSelected);
    setValue("nonPreferredProjects", updatedSelected, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  useEffect(() => {
    // Update available countries when selected countries change
    const usedCountries = [
      ...selectedPreferredCountries,
      ...selectedNonPreferredCountries,
    ];
    setAvailableCountries(
      countries.filter((country) => !usedCountries.includes(country))
    );
  }, [selectedPreferredCountries, selectedNonPreferredCountries]);

  const handlePreferredCountrySelect = (country: string) => {
    if (!selectedPreferredCountries.includes(country)) {
      const updatedSelected = [...selectedPreferredCountries, country];
      setSelectedPreferredCountries(updatedSelected);
      setValue("preferredWorkCountries", updatedSelected, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
    setPreferredCountriesOpen(false);
    setCountrySearch("");
  };

  const handleNonPreferredCountrySelect = (country: string) => {
    if (!selectedNonPreferredCountries.includes(country)) {
      const updatedSelected = [...selectedNonPreferredCountries, country];
      setSelectedNonPreferredCountries(updatedSelected);
      setValue("nonPreferredWorkCountries", updatedSelected, {
        shouldValidate: true,
        shouldDirty: true,
      });
    }
    setNonPreferredCountriesOpen(false);
    setCountrySearch("");
  };

  const handleRemovePreferredCountry = (countryToRemove: string) => {
    const updatedSelected = selectedPreferredCountries.filter(
      (country) => country !== countryToRemove
    );
    setSelectedPreferredCountries(updatedSelected);
    setValue("preferredWorkCountries", updatedSelected, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleRemoveNonPreferredCountry = (countryToRemove: string) => {
    const updatedSelected = selectedNonPreferredCountries.filter(
      (country) => country !== countryToRemove
    );
    setSelectedNonPreferredCountries(updatedSelected);
    setValue("nonPreferredWorkCountries", updatedSelected, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormData>({
    defaultValues: {
      phoneNumber: profile?.phoneNumber || "",
      address: profile?.address || "",
      firstName: profile?.user?.firstName || "",
      lastName: profile?.user?.lastName || "",
      countryOrigin: profile?.countryOrigin || "",
      preferredWorkCountries: profile?.preferredWorkCountries || [],
      nonPreferredWorkCountries: profile?.nonPreferredWorkCountries || [],
      nonPreferredProjects: profile?.nonPreferredProjects || [],
    },
  });

  useEffect(() => {
    setValue("phoneNumber", profile?.phoneNumber || "");
    setValue("address", profile?.address || "");
    setValue("firstName", profile?.user?.firstName || "");
    setValue("lastName", profile?.user?.lastName || "");
    setSelectedCountryOrigin(profile?.countryOrigin || "");
    setValue("countryOrigin", profile?.countryOrigin || "");
    setValue("preferredWorkCountries", profile?.preferredWorkCountries || []);
    setSelectedPreferredCountries(profile?.preferredWorkCountries || []);
    setSelectedNonPreferredCountries(profile?.nonPreferredWorkCountries || []);
    setValue(
      "nonPreferredWorkCountries",
      profile?.nonPreferredWorkCountries || []
    );
    setValue("nonPreferredProjects", profile?.nonPreferredProjects || []);
    setSelectedNonPreferredProjects(profile?.nonPreferredProjects || []);
  }, [profile, setValue]);

  const onSubmit = async (data: ProfileFormData) => {
    try {
      await apiService.put(`user/profile`, {
        phoneNumber: data.phoneNumber,
        address: data.address,
        firstName: data.firstName,
        lastName: data.lastName,
        countryOrigin: data.countryOrigin,
        preferredWorkCountries: data.preferredWorkCountries,
        nonPreferredWorkCountries: data.nonPreferredWorkCountries,
        nonPreferredProjects: data.nonPreferredProjects,
      });

      fetchProfile();
    } catch (error) {
      console.log("Error updating profile", error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Personal Information</h2>
        <div className="h-px flex-1 bg-gray-700 mx-4" />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-lg"
      >
        {/* First & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              First Name
            </label>
            <input
              {...register("firstName", {
                required: "First name is required",
              })}
              placeholder="First Name"
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
            {errors.firstName && (
              <p className="text-red-400 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Last Name
            </label>
            <input
              placeholder="Last Name"
              {...register("lastName", { required: "Last name is required" })}
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
            {errors.lastName && (
              <p className="text-red-400 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Phone & Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              {...register("phoneNumber", {
                required: "Phone number is required",
              })}
              placeholder="Phone Number"
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
            {errors.phoneNumber && (
              <p className="text-red-400 text-sm mt-1">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Address
            </label>
            <input
              {...register("address", { required: "Address is required" })}
              placeholder="Address"
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            />
            {errors.address && (
              <p className="text-red-400 text-sm mt-1">
                {errors.address.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="country-origin-container">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Country of Origin *
            </label>
            <div
              className="relative"
              onClick={() => setCountryOriginOpen(!countryOriginOpen)}
            >
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={countryOriginSearch}
                  onChange={(e) => setCountryOriginSearch(e.target.value)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCountryOriginOpen(true);
                  }}
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-300 focus:ring-2 focus:ring-orange-500 outline-none focus:border-transparent transition-all pr-10"
                  placeholder={selectedCountryOrigin || "Select a country"}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 absolute right-3 transition-transform ${
                    countryOriginOpen ? "rotate-180" : ""
                  } text-gray-300`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {countryOriginOpen && (
                <div className="absolute z-50 w-full mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                  {filteredOriginCountries.map((country) => (
                    <div
                      key={country}
                      onClick={() => handleCountryOriginSelect(country)}
                      className="px-4 py-3 cursor-pointer hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg text-gray-300"
                    >
                      {country}
                    </div>
                  ))}
                </div>
              )}
            </div>
            {errors.countryOrigin && (
              <p className="mt-1 text-red-400 text-sm">
                {errors.countryOrigin.message}
              </p>
            )}
          </div>

          {/* Preferred Work Countries */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Preferred Work Countries
            </label>

            <div
              className="relative"
              onClick={() => setPreferredCountriesOpen(!preferredCountriesOpen)}
            >
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={countrySearch}
                  onChange={(e) => setCountrySearch(e.target.value)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setPreferredCountriesOpen(true);
                  }}
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 outline-none focus:border-transparent transition-all pr-10"
                  placeholder="Search or select preferred countries"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 absolute right-3 transition-transform ${
                    preferredCountriesOpen ? "rotate-180" : ""
                  } text-gray-300`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {preferredCountriesOpen && (
                <div className="absolute z-50 w-full mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                  {availableCountries
                    .filter((country) =>
                      country
                        .toLowerCase()
                        .includes(countrySearch.toLowerCase())
                    )
                    .map((country) => (
                      <div
                        key={country}
                        onClick={() => handlePreferredCountrySelect(country)}
                        className="px-4 py-3 cursor-pointer hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg text-gray-300"
                      >
                        {country}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            {selectedPreferredCountries.map((country) => (
              <div
                key={country}
                className="group flex items-center gap-2 bg-gray-700/50 px-3 py-1.5 rounded-lg text-gray-300 hover:bg-gray-600/50 transition-all"
              >
                <span>{country}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemovePreferredCountry(country);
                  }}
                  className="text-gray-400 group-hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Non-Preferred Work Countries */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Non-Preferred Work Countries
            </label>
            <div
              className="relative"
              onClick={() =>
                setNonPreferredCountriesOpen(!nonPreferredCountriesOpen)
              }
            >
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={countrySearch}
                  onChange={(e) => setCountrySearch(e.target.value)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setNonPreferredCountriesOpen(true);
                  }}
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 outline-none focus:border-transparent transition-all pr-10"
                  placeholder="Search or select non-preferred countries"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 absolute right-3 transition-transform ${
                    nonPreferredCountriesOpen ? "rotate-180" : ""
                  } text-gray-300`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {nonPreferredCountriesOpen && (
                <div className="absolute z-50 w-full mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                  {availableCountries
                    .filter((country) =>
                      country
                        .toLowerCase()
                        .includes(countrySearch.toLowerCase())
                    )
                    .map((country) => (
                      <div
                        key={country}
                        onClick={() => handleNonPreferredCountrySelect(country)}
                        className="px-4 py-3 cursor-pointer hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg text-gray-300"
                      >
                        {country}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-2">
            {selectedNonPreferredCountries.map((country) => (
              <div
                key={country}
                className="group flex items-center gap-2 bg-gray-700/50 px-3 py-1.5 rounded-lg text-gray-300 hover:bg-gray-600/50 transition-all"
              >
                <span>{country}</span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveNonPreferredCountry(country);
                  }}
                  className="text-gray-400 group-hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Non-Preferred Project Types
            </label>
            <div
              className="relative"
              onClick={() =>
                setNonPreferredProjectsOpen(!nonPreferredProjectsOpen)
              }
            >
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={projectSearch}
                  onChange={(e) => setProjectSearch(e.target.value)}
                  onClick={(e) => {
                    e.stopPropagation();
                    setNonPreferredProjectsOpen(true);
                  }}
                  className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 focus:ring-2 focus:ring-orange-500 outline-none focus:border-transparent transition-all pr-10"
                  placeholder="Search or select project types"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 absolute right-3 transition-transform ${
                    nonPreferredProjectsOpen ? "rotate-180" : ""
                  } text-gray-300`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {nonPreferredProjectsOpen && (
                <div className="absolute z-50 w-full mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                  {projectTypeList
                    .filter(
                      (project) =>
                        project
                          .toLowerCase()
                          .includes(projectSearch.toLowerCase()) &&
                        !selectedNonPreferredProjects.includes(project)
                    )
                    .map((project) => (
                      <div
                        key={project}
                        onClick={() => handleNonPreferredProjectSelect(project)}
                        className="px-4 py-3 cursor-pointer hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg text-gray-300"
                      >
                        {project}
                      </div>
                    ))}
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {selectedNonPreferredProjects.map((project) => (
                <div
                  key={project}
                  className="group flex items-center gap-2 bg-gray-700/50 px-3 py-1.5 rounded-lg text-gray-300 hover:bg-gray-600/50 transition-all"
                >
                  <span>{project}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveNonPreferredProject(project);
                    }}
                    className="text-gray-400 group-hover:text-white transition-colors"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white p-3 rounded-lg font-medium  transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Updating..." : "Update Profile"}
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
