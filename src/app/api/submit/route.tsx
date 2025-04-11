import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.json();

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Received form data:", formData);

    return NextResponse.json(
      {
        success: true,
        message: "Form submitted successfully",
        data: formData,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
