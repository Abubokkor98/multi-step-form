"use client";

import { useFormContext } from "@/context/FormContext";

type Props = {
  isValid: boolean;
};

export default function FormNavigation({ isValid }: Props) {
  const { currentStep, goToNextStep, goToPrevStep, status } = useFormContext();

  // Don't show navigation if submission was successful
  if (status === "success") return null;

  return (
    <div className="flex justify-between mt-6">
      {/* Previous Button */}
      {currentStep > 1 && (
        <button
          type="button"
          onClick={goToPrevStep}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
        >
          Previous
        </button>
      )}

      {/* Next/Submit Button */}
      <button
        type="submit"
        disabled={!isValid || status === "submitting"}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {currentStep === 4 ? "Submit" : "Next"}
      </button>
    </div>
  );
}
