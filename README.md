# FitLog

FitLog is a modern workout library and personal workout planning application built with Next.js, TypeScript, Tailwind CSS, and daisyUI.

It allows users to explore exercises, view detailed workout information, build a daily workout plan, save workouts for later, and track completed exercises.

## Live Project

Add your deployed URL here after deployment.

## Features

- Browse a library of 12 workouts covering major muscle groups
- View detailed workout information including equipment, difficulty, sets, reps, duration, calories, rating, and instructions
- Sort workouts by duration, calories, or rating
- Add workouts to Today's Plan
- Save workouts for later
- View and manage Today's Plan
- Mark workouts as completed
- Remove workouts from the plan or saved list
- Persistent workout data using localStorage
- Responsive design for mobile, tablet, and desktop
- Toast notifications for workout actions
- Custom loading state
- Custom 404 page
- Dynamic workout detail routes

## Technologies

- Next.js
- React
- TypeScript
- Tailwind CSS
- daisyUI
- Lucide React
- REST API
- localStorage

## API

FitLog uses the FitLog REST API to retrieve workout data.

API endpoint:

`https://api.abcz.workers.dev/api/fitlog`

## Project Structure

```text
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
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/ProgrammingHero1/B14-A6-Fit-Log.git
```

Navigate into the project:

```bash
cd B14-A6-Fit-Log
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the application at:

```text
http://localhost:3000
```

## Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Author

Built as a Programming Hero assignment using Next.js, TypeScript, and modern frontend development practices.
