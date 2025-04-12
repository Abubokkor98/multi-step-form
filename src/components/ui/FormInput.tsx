"use client";

import { Controller } from "react-hook-form";

type Props = {
  control: any;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: {
    message?: string;
  };
};

export default function FormInput({
  control,
  name,
  label,
  type = "text",
  placeholder = "",
  error,
}: Props) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="relative">
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className={`w-full p-2 border rounded-md focus:ring-2 focus:outline-none transition-all ${
                error
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:border-blue-500 focus:ring-blue-200"
              }`}
            />
            {error?.message && (
              <p className="text-red-500 text-sm mt-1">{error.message}</p>
            )}
          </div>
        )}
      />
    </div>
  );
}
