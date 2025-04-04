"use client";
import React from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const customerDetailsSchema = z.object({
  transactionType: z.enum(["authorize", "purchase"], {
    required_error: "Transaction type is required",
  }),
  orderInfo: z.string().min(1, "Order info is required"),
  chFullName: z.string().min(1, "Full name is required"),
  chAddress: z.string().min(1, "Address is required"),
  chCity: z.string().min(1, "City is required"),
  chZip: z.string().min(1, "ZIP code is required"),
  chCountry: z.string().min(1, "Country is required"),
  chPhone: z.string().min(1, "Phone number is required"),
  chEmail: z.string().email("Invalid email address"),
});

export type CustomerDetailsFormData = z.infer<typeof customerDetailsSchema>;

interface CustomerDetailsFormProps {
  customerDetailsMethods: UseFormReturn<CustomerDetailsFormData>;
}

const CustomerDetailsForm = ({
  customerDetailsMethods,
}: CustomerDetailsFormProps) => {
  return (
    <FormProvider {...customerDetailsMethods}>
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-20">
          {/* Customer Details */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg relative z-10">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              {...customerDetailsMethods.register("chFullName")}
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="Enter full name"
            />
            {customerDetailsMethods.formState.errors.chFullName && (
              <p className="mt-1 text-red-400 text-sm">
                {customerDetailsMethods.formState.errors.chFullName.message}
              </p>
            )}
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg relative z-10">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email *
            </label>
            <input
              {...customerDetailsMethods.register("chEmail")}
              type="email"
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="Enter email"
            />
            {customerDetailsMethods.formState.errors.chEmail && (
              <p className="mt-1 text-red-400 text-sm">
                {customerDetailsMethods.formState.errors.chEmail.message}
              </p>
            )}
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Phone *
            </label>
            <input
              {...customerDetailsMethods.register("chPhone")}
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="Enter phone number"
            />
            {customerDetailsMethods.formState.errors.chPhone && (
              <p className="mt-1 text-red-400 text-sm">
                {customerDetailsMethods.formState.errors.chPhone.message}
              </p>
            )}
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Address *
            </label>
            <input
              {...customerDetailsMethods.register("chAddress")}
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="Enter address"
            />
            {customerDetailsMethods.formState.errors.chAddress && (
              <p className="mt-1 text-red-400 text-sm">
                {customerDetailsMethods.formState.errors.chAddress.message}
              </p>
            )}
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              City *
            </label>
            <input
              {...customerDetailsMethods.register("chCity")}
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="Enter city"
            />
            {customerDetailsMethods.formState.errors.chCity && (
              <p className="mt-1 text-red-400 text-sm">
                {customerDetailsMethods.formState.errors.chCity.message}
              </p>
            )}
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              ZIP Code *
            </label>
            <input
              {...customerDetailsMethods.register("chZip")}
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="Enter ZIP code"
            />
            {customerDetailsMethods.formState.errors.chZip && (
              <p className="mt-1 text-red-400 text-sm">
                {customerDetailsMethods.formState.errors.chZip.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-30">
          {/* Transaction Type and Order Number */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
            <label className="block text-sm font-medium text-gray-300 mb-4">
              Transaction Type *
            </label>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() =>
                  customerDetailsMethods.setValue(
                    "transactionType",
                    "authorize",
                    {
                      shouldValidate: true,
                    }
                  )
                }
                className={`inline-flex items-center ${
                  customerDetailsMethods.watch("transactionType") ===
                  "authorize"
                    ? "text-orange-500"
                    : "text-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full border ${
                    customerDetailsMethods.watch("transactionType") ===
                    "authorize"
                      ? "border-orange-500"
                      : "border-gray-600"
                  } bg-gray-700 relative`}
                >
                  <div
                    className={`absolute w-2 h-2 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 transition-all ${
                      customerDetailsMethods.watch("transactionType") ===
                      "authorize"
                        ? "scale-100"
                        : "scale-0"
                    }`}
                  ></div>
                </div>
                <span className="ml-2">Authorize</span>
              </button>
              <button
                type="button"
                onClick={() =>
                  customerDetailsMethods.setValue(
                    "transactionType",
                    "purchase",
                    {
                      shouldValidate: true,
                    }
                  )
                }
                className={`inline-flex items-center ${
                  customerDetailsMethods.watch("transactionType") === "purchase"
                    ? "text-orange-500"
                    : "text-gray-300"
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full border ${
                    customerDetailsMethods.watch("transactionType") ===
                    "purchase"
                      ? "border-orange-500"
                      : "border-gray-600"
                  } bg-gray-700 relative`}
                >
                  <div
                    className={`absolute w-2 h-2 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 transition-all ${
                      customerDetailsMethods.watch("transactionType") ===
                      "purchase"
                        ? "scale-100"
                        : "scale-0"
                    }`}
                  ></div>
                </div>
                <span className="ml-2">Purchase</span>
              </button>
            </div>
            {customerDetailsMethods.formState.errors.transactionType && (
              <p className="mt-2 text-sm text-red-400">
                {
                  customerDetailsMethods.formState.errors.transactionType
                    .message
                }
              </p>
            )}
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Country *
            </label>
            <input
              {...customerDetailsMethods.register("chCountry")}
              className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="Enter country"
            />
            {customerDetailsMethods.formState.errors.chCountry && (
              <p className="mt-1 text-red-400 text-sm">
                {customerDetailsMethods.formState.errors.chCountry.message}
              </p>
            )}
          </div>
        </div>

        {/* Order Info */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 shadow-lg">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Order Information *
          </label>
          <textarea
            {...customerDetailsMethods.register("orderInfo")}
            rows={4}
            className="w-full bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            placeholder="Enter order information"
          />
          {customerDetailsMethods.formState.errors.orderInfo && (
            <p className="mt-1 text-red-400 text-sm">
              {customerDetailsMethods.formState.errors.orderInfo.message}
            </p>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default CustomerDetailsForm;
