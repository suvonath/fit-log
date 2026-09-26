
"use client";

import type { Workout } from "@/types/workout";
import WorkoutCard from "@/components/WorkoutCard";

interface WorkoutLibraryProps {
  workouts: Workout[];
}

export default function WorkoutLibrary({
  workouts,
}: WorkoutLibraryProps) {
  return (
    <section id="library" className="border-b border-[#2a2a2a]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        {/* Heading */}
        <div>
          <h2 className="font-oswald text-4xl font-black uppercase leading-none tracking-tight text-2xl lg:text-4xl">
            The Library
          </h2>

          <p className="mt-4 max-w-lg text-lg leading-6 text-gray-500">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        {/* Workout Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      </div>
    </section>
  );
}

