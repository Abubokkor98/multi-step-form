"use client";

import { useFormContext } from "@/context/FormContext";

export default function FormProgress() {
  const { currentStep } = useFormContext();

  return (
    <div className="flex justify-center gap-4 mb-8">
      {[1, 2, 3, 4].map((step) => (
        <div
          key={step}
          className={`w-8 h-8 rounded-full flex items-center justify-center 
            ${currentStep >= step ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          {step}
        </div>
      ))}
    </div>
  );
}
