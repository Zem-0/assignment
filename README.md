# AI Chat Application

## Author
Parinith
parinith99@gmail.com

## Overview
A modern AI chat application built with Next.js that provides an interactive chat interface. The application features real-time messaging, authentication, and a responsive design.

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/Zem-0/assignment.git
cd assignment
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:
```
# Google OAuth
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Third-Party Libraries
- **Authentication:** @clerk/nextjs
- **UI Components:** 
  - @radix-ui/react-dialog
  - @radix-ui/react-slot
- **Styling Utilities:**
  - class-variance-authority
  - clsx
  - tailwind-merge
- **Animations:** framer-motion
- **Icons:** lucide-react

## Challenges & Assumptions
- Implemented secure authentication flow using Clerk
- Assumed users have a Google account for OAuth login
- Handled real-time message updates and state management
- Ensured responsive design across different device sizes

## Note
Never commit your `.env.local` file or expose your OAuth credentials. Always use environment variables for sensitive information.
