"use client";

export default function SuccessMessage() {
  return (
    <div className="text-center p-8 bg-green-50 rounded-lg">
      <div className="text-4xl mb-4">🎉</div>
      <h2 className="text-2xl font-bold text-green-600 mb-2">
        Registration Complete!
      </h2>
      <p className="text-gray-600">
        Thank you for your submission. We've received your details.
      </p>
    </div>
  );
}
