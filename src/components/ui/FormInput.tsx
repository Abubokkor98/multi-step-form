"use client";

import { Controller } from "react-hook-form";

type Props = {
  control: any;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
};

export default function FormInput({
  control,
  name,
  label,
  type = "text",
  placeholder = "",
}: Props) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium">{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <>
            <input
              {...field}
              type={type}
              placeholder={placeholder}
              className={`w-full p-2 border rounded ${
                fieldState.error ? "border-red-500" : "border-gray-300"
              }`}
            />
            {fieldState.error && (
              <p className="text-red-500 text-sm mt-1">
                {fieldState.error.message}
              </p>
            )}
          </>
        )}
      />
    </div>
  );
}
