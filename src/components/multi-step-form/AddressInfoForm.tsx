"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addressInfoSchema } from "@/schemas/formSchemas";
import { useFormContext } from "@/context/FormContext";
import FormInput from "@/components/ui/FormInput";
import FormNavigation from "./FormNavigation";

export default function AddressInfoForm() {
  const { formData, updateFormData, goToNextStep, goToPrevStep } =
    useFormContext();
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    resolver: zodResolver(addressInfoSchema),
    mode: "onChange",
    defaultValues: formData.address || {},
  });

  const onSubmit = (data: any) => {
    updateFormData({ address: data });
    goToNextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormInput
        control={control}
        name="street"
        label="Street Address"
        placeholder="123 Main St"
        error={errors.street}
      />
      <FormInput
        control={control}
        name="city"
        label="City"
        placeholder="Dhaka"
        error={errors.city}
      />
      <FormInput
        control={control}
        name="zipCode"
        label="ZIP Code"
        placeholder="12345"
        error={errors.zipCode}
      />
      <FormNavigation isValid={isValid} />
    </form>
  );
}
