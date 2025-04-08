"use client";
import { apiService } from "@/core/services/apiService";
import { useProfile } from "@/providers/ProfileInfoProvider";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

interface ProfileFormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
}

const ProfileForm = () => {
  const { profile, fetchProfile } = useProfile();

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
    },
  });

  useEffect(() => {
    setValue("phoneNumber", profile?.phoneNumber || "");
    setValue("address", profile?.address || "");
    setValue("firstName", profile?.user?.firstName || "");
    setValue("lastName", profile?.user?.lastName || "");
  }, [profile, setValue]);

  const onSubmit = async (data: ProfileFormData) => {
    console.log("data");
    try {
      await apiService.put(`user/profile`, {
        phoneNumber: data.phoneNumber,
        address: data.address,
        firstName: data.firstName,
        lastName: data.lastName,
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

        {/* Read-only Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            {profile && (
              <div className="group bg-gray-800/30  rounded-lg p-3 border border-gray-700/50">
                <div className="text-sm text-gray-400">Created At</div>
                <div className="text-gray-300">
                  {new Date(profile.user?.createdAt).toLocaleDateString()}
                </div>
              </div>
            )}
          </div>

          <div>
            {profile && (
              <div className="group bg-gray-800/30 rounded-lg p-3 border border-gray-700/50">
                <div className="text-sm text-gray-400">Updated At</div>
                <div className="text-gray-300">
                  {new Date(profile.user?.updatedAt).toLocaleDateString()}
                </div>
              </div>
            )}
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
