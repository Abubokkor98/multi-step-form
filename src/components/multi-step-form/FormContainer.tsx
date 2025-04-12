'use client';

import { useFormContext } from '@/context/FormContext';
import FormProgress from '@/components/multi-step-form/FormProgress';
import PersonalInfoForm from '@/components/multi-step-form/PersonalInfoForm';
import AddressInfoForm from '@/components/multi-step-form/AddressInfoForm';
import AccountSetupForm from '@/components/multi-step-form/AccountSetupForm';
import FormSummary from '@/components/multi-step-form/FormSummary';

export default function FormContainer() {
  const { currentStep } = useFormContext();

  return (
    <div className="max-w-2xl mx-auto">
      <FormProgress />
      {currentStep === 1 && <PersonalInfoForm />}
      {currentStep === 2 && <AddressInfoForm />}
      {currentStep === 3 && <AccountSetupForm />}
      {currentStep === 4 && <FormSummary />}
    </div>
  );
}