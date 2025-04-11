"use client";

import { FormData, FormStatus, FormStep } from "@/types/formTypes";
import { createContext, ReactNode, useContext, useState } from "react";

type FormContextType = {
  formData: FormData;
  updateFormData: (newData: FormData) => void;
  currentStep: FormStep;
  goToNextStep: () => void;
  goToPrevStep: () => void;
  status: FormStatus;
  setStatus: (status: FormStatus) => void;
};

const FormContext = createContext<FormContextType>({} as FormContextType);

export function FormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<FormData>({});
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [status, setStatus] = useState<FormStatus>("idle");

  const updateFormData = (newData: FormData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  const goToNextStep = () =>
    setCurrentStep((s) => Math.min(s + 1, 4) as FormStep);
  const goToPrevStep = () =>
    setCurrentStep((s) => Math.max(s - 1, 1) as FormStep);

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        currentStep,
        goToNextStep,
        goToPrevStep,
        status,
        setStatus,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export const useFormContext = () => useContext(FormContext);
