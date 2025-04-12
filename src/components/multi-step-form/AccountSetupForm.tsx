"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountInfoSchema } from "@/schemas/formSchemas";
import { useFormContext } from "@/context/FormContext";
import FormInput from "@/components/ui/FormInput";
import FormNavigation from "./FormNavigation";

export default function AccountSetupForm() {
  const { formData, updateFormData, goToNextStep } = useFormContext();
  const { control, handleSubmit, formState } = useForm({
    resolver: zodResolver(accountInfoSchema),
    defaultValues: formData.account || {},
  });

  const onSubmit = (data: any) => {
    updateFormData({ account: data });
    goToNextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormInput
        control={control}
        name="username"
        label="Username"
        placeholder="john_doe123"
      />
      <FormInput
        control={control}
        name="password"
        label="Password"
        type="password"
      />
      <FormInput
        control={control}
        name="confirmPassword"
        label="Confirm Password"
        type="password"
      />
      <FormNavigation isValid={formState.isValid} />
    </form>
  );
}
