# Multi-Step Form with Validation

A responsive multi-step form built with React & Next.js (App Router) featuring client-side validation and state management.

## Demo Video

[Watch Demo Video on Loom](https://www.loom.com/share/9ee5371a0d6c4a3cb9a66c0605b03233?sid=b75b6054-a1d9-4754-8a89-e214d71456c0)

## Features

- Three-step form process with validation
- Form progress indicator
- Input validation with real-time error messages
- Comprehensive form state management
- Simulated API submission
- Responsive design with TailwindCSS

## Tech Stack

- **Next.js** (App Router)
- **React Hook Form** for form handling
- **Zod** for validation schemas
- **TailwindCSS** for styling
- **React Query** for API simulation

## Prerequisites

- Node.js 18.x or higher
- npm or yarn

## Installation and Setup Guide

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/Abubokkor98/multi-step-form.git
cd multi-step-form
```

### 2. Install Dependencies

```bash
npm install
# or
yarn
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    # Next.js App Router files
│   ├── api/                # API routes
│   │   └── submit/         # Form submission endpoint
│   ├── page.tsx            # Main page component
│   └── layout.tsx          # Root layout with providers
├── components/             # React components
│   ├── multi-step-form/    # Form step components
│   └── ui/                 # Reusable UI components
├── context/                # React context providers
├── providers/              # Service providers
├── schemas/                # Validation schemas
└── types/                  # TypeScript type definitions
```

## Form Steps

1. **Personal Information**

   - Full Name (required)
   - Email (required, valid format)
   - Phone Number (required, min 10 digits)

2. **Address Details**

   - Street Address (required)
   - City (required)
   - ZIP Code (required, numbers only, min 5 digits)

3. **Account Setup**

   - Username (required, min 4 characters)
   - Password (required, min 6 characters)
   - Confirm Password (must match password)

4. **Summary & Submission**
   - Review all entered information
   - Submit data to API

## Environment Variables

The project includes the necessary environment variables in the repository. No additional configuration is required.

## Testing

You can test the form by:

1. Filling out each step with valid/invalid data to check validation
2. Navigating between steps using the Next/Previous buttons
3. Reviewing the summary page
4. Submitting the form and checking the console for logged data

## Future Plan

- Dark mode support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
