"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInfoSchema } from "@/schemas/formSchemas";
import { useFormContext } from "@/context/FormContext";
import FormInput from "@/components/ui/FormInput";
import FormNavigation from "./FormNavigation";

export default function PersonalInfoForm() {
  const { formData, updateFormData, goToNextStep } = useFormContext();
  const { control, handleSubmit, formState } = useForm({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: formData.personal || {},
  });

  const onSubmit = (data: any) => {
    updateFormData({ personal: data });
    goToNextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormInput
        control={control}
        name="fullName"
        label="Full Name"
        placeholder="John Doe"
      />
      <FormInput
        control={control}
        name="email"
        label="Email"
        placeholder="john@example.com"
        type="email"
      />
      <FormInput
        control={control}
        name="phone"
        label="Phone Number"
        placeholder="123-456-7890"
      />
      <FormNavigation isValid={formState.isValid} />
    </form>
  );
}
