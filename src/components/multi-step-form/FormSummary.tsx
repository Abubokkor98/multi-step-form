"use client";

import { useFormContext } from "@/context/FormContext";
import { useMutation } from "@tanstack/react-query";
import SuccessMessage from "./SuccessMessage";
import { FormData } from "@/types/formTypes";

async function submitForm(data: FormData) {
  //API call
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/submit`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  // console.log(data);
  if (!response.ok) {
    throw new Error("Submission failed");
  }

  return response.json();
}

export default function FormSummary() {
  const { formData, status, setStatus } = useFormContext();

  const mutation = useMutation({
    mutationFn: (data: FormData) => submitForm(data),
    onSuccess: () => setStatus("success"),
    onError: () => setStatus("error"),
  });

  if (status === "success") return <SuccessMessage />;

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Review Your Information</h3>

      <div className="space-y-2">
        <p>
          <strong>Full Name:</strong> {formData.personal?.fullName}
        </p>
        <p>
          <strong>Email:</strong> {formData.personal?.email}
        </p>
        <p>
          <strong>Phone:</strong> {formData.personal?.phone}
        </p>
        <p>
          <strong>Address:</strong> {formData.address?.street}
        </p>
        <p>
          <strong>City:</strong> {formData.address?.city}
        </p>
        <p>
          <strong>ZIP Code:</strong> {formData.address?.zipCode}
        </p>
        <p>
          <strong>Username:</strong> {formData.account?.username}
        </p>
      </div>

      <button
        onClick={() => {
          setStatus("submitting");
          mutation.mutate(formData);
        }}
        disabled={status === "submitting"}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        {status === "submitting" ? "Submitting..." : "Confirm Registration"}
      </button>

      {status === "error" && (
        <p className="text-red-500">Submission failed. Please try again.</p>
      )}
    </div>
  );
}
