"use client";

import { useState } from "react";
import { Clock3, Flame, Star } from "lucide-react";
import Link from "next/link";
import { RxCross1 } from "react-icons/rx";

import { useFitLog } from "@/context/FitLogContext";
import SortDropdown, { type SortOption } from "@/components/SortDropdown";

type Tab = "plan" | "saved";

export default function MyPlanContent() {
  const [activeTab, setActiveTab] = useState<Tab>("plan");
  const [planSortBy, setPlanSortBy] = useState<SortOption>("duration");
  const [savedSortBy, setSavedSortBy] = useState<SortOption>("duration");

  const {
    plan,
    saved,
    removeFromPlan,
    removeSaved,
    markAsDone,
    isCompleted,
    showToast,
  } = useFitLog();

  const currentWorkouts = activeTab === "plan" ? plan : saved;

  const sortBy = activeTab === "plan" ? planSortBy : savedSortBy;

  function handleSortChange(value: SortOption) {
    if (activeTab === "plan") {
      setPlanSortBy(value);
    } else {
      setSavedSortBy(value);
    }
  }

  const sortedWorkouts = [...currentWorkouts];

  if (sortBy === "duration") {
    sortedWorkouts.sort((a, b) => a.duration - b.duration);
  }

  if (sortBy === "calories") {
    sortedWorkouts.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
  }

  if (sortBy === "rating") {
    sortedWorkouts.sort((a, b) => a.rating - b.rating);
  }

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  return (
    <section className="border-b border-[#2a2a2a]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-24">
        {/* Header */}
        <div>
          <h1 className="font-oswald text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
            My Plan
          </h1>

          <p className="mt-4 max-w-xl text-lg leading-6 text-gray-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-10 grid grid-cols-1 overflow-hidden rounded-xl border border-[#2a2a2a] sm:grid-cols-3">
          <div className="flex flex-col items-center justify-around p-6 lg:items-start">
            <span className="text-xs uppercase tracking-wider text-gray-400">
              Exercises
            </span>

            <p className="font-oswald mt-4 text-6xl font-black text-[#ccff00]">
              {plan.length}
            </p>
          </div>

          <div className="flex flex-col items-center justify-around p-6 lg:items-start">
            <span className="text-xs uppercase tracking-wider text-gray-400">
              Minutes
            </span>

            <p className="font-oswald mt-4 text-6xl font-black">
              {totalMinutes}
            </p>
          </div>

          <div className="flex flex-col items-center justify-around p-6 lg:items-start">
            <span className="text-xs uppercase tracking-wider text-gray-400">
              Calories
            </span>

            <p className="font-oswald mt-4 text-6xl font-black">
              {totalCalories}
            </p>
          </div>
        </div>

        {/* Tabs + Sort */}
        <div className="mt-12 flex items-center justify-between">
          {/* Tabs */}
          <div className="rounded-xl border-l border-t border-[#282f3d] bg-[#151921] p-2">
            <button
              type="button"
              onClick={() => setActiveTab("plan")}
              className={
                activeTab === "plan"
                  ? "rounded-xl bg-black px-3 py-3 text-xs font-black uppercase tracking-wider text-[#ccff00] sm:px-5 sm:py-4"
                  : "rounded-xl px-3 py-3 text-xs font-black uppercase tracking-wider text-gray-500 hover:text-white sm:px-5 sm:py-4"
              }
            >
              Today&apos;s Plan
              <span className="ml-2">({plan.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("saved")}
              className={
                activeTab === "saved"
                  ? "rounded-xl bg-black px-3 py-3 text-xs font-black uppercase tracking-wider text-[#ccff00] sm:px-5 sm:py-4"
                  : "rounded-xl px-3 py-3 text-xs font-black uppercase tracking-wider text-gray-500 hover:text-white sm:px-5 sm:py-4"
              }
            >
              Saved
              <span className="ml-2">({saved.length})</span>
            </button>
          </div>

          {/* Sort */}
          <SortDropdown value={sortBy} onChange={handleSortChange} />
        </div>

        {/* Workout List */}
        <div className="mt-8">
          {sortedWorkouts.length === 0 ? (
            <div className="border border-dashed border-[#444] px-6 py-16 text-center">
              <h2 className="font-oswald text-2xl font-black uppercase">
                NOTHING HERE YET
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
                Browse the library and add a lift to get today moving.
              </p>

              <Link
                href="/#library"
                className="btn mt-6 rounded-full border-[#ccff00] bg-[#ccff00] px-6 text-black"
              >
                Go to workout
              </Link>
            </div>
          ) : (
            <div className="grid gap-5">
              {sortedWorkouts.map((workout) => (
                <article
                  key={workout.id}
                  className="flex flex-col gap-5 overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#151515] px-4 py-4 sm:px-5 md:flex-row md:items-center md:justify-between"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                      <img
                        src={workout.image}
                        alt={workout.name}
                        className="h-32 w-full rounded-xl object-cover sm:h-25 sm:w-40"
                      />

                      <div className="min-w-0 p-1 sm:p-5">
                        <h2 className="break-words text-xl font-black uppercase">
                          {workout.name}
                        </h2>

                        <p className="text-sm text-gray-500">
                          {workout.equipment}
                        </p>

                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-4 text-xs text-gray-400">
                          <span className="flex items-center gap-1.5">
                            <Clock3 size={14} className="text-[#ccff00]" />
                            {workout.duration} min
                          </span>

                          <span className="flex items-center gap-1.5">
                            <Flame size={14} className="text-[#ccff00]" />
                            {workout.caloriesBurned} kcal
                          </span>

                          <span className="flex items-center gap-1.5">
                            <Star size={14} className="text-[#ccff00]" />
                            {workout.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-auto">
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      <Link
                        href={"/workout/" + workout.id}
                        className="btn btn-md rounded-full text-white"
                      >
                        View Details
                      </Link>

                      {activeTab === "plan" && (
                        <button
                          type="button"
                          disabled={isCompleted(workout.id)}
                          onClick={() => {
                            markAsDone(workout.id);

                            showToast(workout.name + " marked as done");
                          }}
                          className="btn btn-md rounded-full bg-[#ccff00] text-black"
                        >
                          {isCompleted(workout.id)
                            ? "✓ Completed"
                            : "Mark as Done"}
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => {
                          if (activeTab === "plan") {
                            removeFromPlan(workout.id);

                            showToast(workout.name + " removed from plan");
                          } else {
                            removeSaved(workout.id);

                            showToast(workout.name + " removed from saved");
                          }
                        }}
                        className="btn-sm"
                      >
                        <RxCross1 />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
