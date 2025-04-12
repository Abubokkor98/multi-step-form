"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { accountInfoSchema } from "@/schemas/formSchemas";
import { useFormContext } from "@/context/FormContext";
import FormInput from "@/components/ui/FormInput";
import FormNavigation from "./FormNavigation";

export default function AccountSetupForm() {
  const { formData, updateFormData, goToNextStep } = useFormContext();
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    resolver: zodResolver(accountInfoSchema),
    mode: "onChange",
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
        placeholder="abubokkor123"
        error={errors.username}
      />
      <FormInput
        control={control}
        name="password"
        label="Password"
        type="password"
        error={errors.password}
      />
      <FormInput
        control={control}
        name="confirmPassword"
        label="Confirm Password"
        type="password"
        error={errors.confirmPassword}
      />
      <FormNavigation isValid={isValid} />
    </form>
  );
}
