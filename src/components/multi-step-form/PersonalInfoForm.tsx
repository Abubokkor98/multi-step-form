"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalInfoSchema } from "@/schemas/formSchemas";
import { useFormContext } from "@/context/FormContext";
import FormInput from "@/components/ui/FormInput";
import FormNavigation from "./FormNavigation";

export default function PersonalInfoForm() {
  const { formData, updateFormData, goToNextStep } = useFormContext();

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    resolver: zodResolver(personalInfoSchema),
    mode: "onChange", // Validate on every change
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
        placeholder="Your Name"
        error={errors.fullName}
      />
      <FormInput
        control={control}
        name="email"
        label="Email"
        placeholder="yourname@example.com"
        type="email"
        error={errors.email}
      />
      <FormInput
        control={control}
        name="phone"
        label="Phone Number"
        placeholder="123-456-7890"
        error={errors.phone}
      />
      <FormNavigation isValid={isValid} />
    </form>
  );
}
