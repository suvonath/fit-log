FitLog

A modern workout library and personal workout planning application built with Next.js, TypeScript, Tailwind CSS, and daisyUI.

FitLog allows users to explore workouts, view detailed exercise information, build a daily workout plan, save workouts for later, and track completed exercises.

Live Project

🔗 https://fit-log-henna-phi.vercel.app/

Technologies Used
Next.js 16 — React framework with App Router
React — Component-based UI development
TypeScript — Type-safe development
Tailwind CSS — Utility-first styling
daisyUI — UI components
Lucide React — Icons
REST API — Workout data
localStorage — Persistent user workout data
Key Features
1. Workout Library

Browse a collection of workouts with useful information such as muscle groups, equipment, duration, calories, and rating.

2. Detailed Workout Information

View complete workout details including difficulty, sets, reps, duration, calories, rating, equipment, and step-by-step instructions.

3. Personal Workout Plan

Add workouts to Today's Plan, manage the selected exercises, and track completed workouts.

4. Save & Sort Workouts

Save workouts for later and sort workouts by duration, calories, or rating for easier browsing.

5. Persistent & Responsive Experience

Workout plans, saved workouts, and completed exercises are preserved using localStorage, while the interface is designed to work across mobile, tablet, and desktop devices.

API

FitLog uses the FitLog REST API to retrieve workout data.

https://api.abcz.workers.dev/api/fitlog
Project Structure
app/
├── workout/
│   └── [id]/
│       └── page.tsx
├── my-plan/
│   └── page.tsx
├── layout.tsx
├── loading.tsx
├── not-found.tsx
├── page.tsx
└── globals.css

components/
├── Footer.tsx
├── Hero.tsx
├── MyPlanContent.tsx
├── Navbar.tsx
├── SortDropdown.tsx
├── Toast.tsx
├── WorkoutActions.tsx
├── WorkoutCard.tsx
└── WorkoutLibrary.tsx

context/
└── FitLogContext.tsx

lib/
└── api.ts

types/
└── workout.ts
Getting Started
Clone the repository
git clone https://github.com/ProgrammingHero1/B14-A6-Fit-Log.git
Navigate to the project directory
cd B14-A6-Fit-Log
Install dependencies
npm install
Start the development server
npm run dev

Open http://localhost:3000 in your browser.

Production Build

Create an optimized production build:

npm run build

Start the production server:

npm start
Author

Built as a Programming Hero assignment using Next.js, TypeScript, and modern frontend development practices.
