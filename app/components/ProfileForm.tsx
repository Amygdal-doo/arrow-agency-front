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
      firstName: profile?.firstName || "",
      lastName: profile?.lastName || "",
    },
  });

  useEffect(() => {
    setValue("phoneNumber", profile?.phoneNumber || "");
    setValue("address", profile?.address || "");
    setValue("firstName", profile?.firstName || "");
    setValue("lastName", profile?.lastName || "");
  }, [profile, setValue]);

  const onSubmit = async (data: ProfileFormData) => {
    try {
      await apiService.put(`user/profile`, {
        phoneNumber: data.phoneNumber,
        address: data.address,
      });

      fetchProfile();
    } catch (error) {
      console.log("Error updating profile", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-gray-800 rounded-lg p-8 border border-gray-700 space-y-6"
    >
      <h2 className="text-2xl font-bold text-white">Personal Information</h2>

      {/* First & Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-300">First Name</label>
          <input
            {...register("firstName", {
              required: "First name is required",
            })}
            placeholder={profile?.firstName || ""}
            className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-700"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-300">Last Name</label>
          <input
            placeholder={profile?.lastName || ""}
            {...register("lastName", { required: "Last name is required" })}
            className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-700"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Phone & Address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-300">Phone Number</label>
          <input
            {...register("phoneNumber", {
              required: "Phone number is required",
            })}
            className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-700"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-300">Address</label>
          <input
            {...register("address", { required: "Address is required" })}
            className="w-full px-4 py-2 rounded-md bg-gray-900 text-white border border-gray-700"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>
      </div>

      {/* Read-only Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-300">Created At</label>
          {profile && (
            <input
              value={new Date(profile.createdAt).toLocaleDateString()}
              disabled
              className="w-full px-4 py-2 rounded-md bg-gray-900 text-gray-400 border border-gray-700 cursor-not-allowed"
            />
          )}
        </div>

        <div>
          <label className="block text-gray-300">Updated At</label>
          {profile && (
            <input
              value={new Date(profile.updatedAt).toLocaleDateString()}
              disabled
              className="w-full px-4 py-2 rounded-md bg-gray-900 text-gray-400 border border-gray-700 cursor-not-allowed"
            />
          )}
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-orange-600 text-white py-3 px-6 rounded-md hover:bg-orange-400 transition-colors font-semibold"
      >
        {isSubmitting ? "Updating..." : "Update Profile"}
      </button>
    </form>
  );
};

export default ProfileForm;
