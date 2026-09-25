"use client";

import { useMemo, useState } from "react";
import type { Workout } from "@/types/workout";
import WorkoutCard from "@/components/WorkoutCard";
import SortDropdown, {
  type SortOption,
} from "@/components/SortDropdown";

interface WorkoutLibraryProps {
  workouts: Workout[];
}

export default function WorkoutLibrary({
  workouts,
}: WorkoutLibraryProps) {
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  const sortedWorkouts = useMemo(() => {
    const sorted = [...workouts];

    sorted.sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      return a.rating - b.rating;
    });

    return sorted;
  }, [workouts, sortBy]);

  return (
    <section
      id="library"
      className="border-b border-[#2a2a2a]"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#ccff00]">
              Workout Collection
            </p>

            <h2 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
              The Library
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-6 text-gray-500">
              Twelve lifts covering every major muscle group.
            </p>
          </div>

          <SortDropdown
            value={sortBy}
            onChange={setSortBy}
          />
        </div>

        {/* Workout Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sortedWorkouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
            />
          ))}
        </div>
      </div>
    </section>
  );
}