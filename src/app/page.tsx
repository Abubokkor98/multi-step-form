import FormContainer from "@/components/multi-step-form/FormContainer";

export default function Home() {
  return (
    <main className="container mx-auto p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-8 text-center">Multi-Step Form</h1>
      <FormContainer />
    </main>
  );
}
