"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock3, Flame, Dumbbell } from "lucide-react";
import { useFitLog } from "@/context/FitLogContext";

type Tab = "plan" | "saved";

export default function MyPlanContent() {
  const [activeTab, setActiveTab] = useState<Tab>("plan");

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
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#ccff00]">
            Your Training Dashboard
          </p>

          <h1 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
            My Plan
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500">
            Build your workout plan, track your progress, and keep your saved
            exercises in one place.
          </p>
        </div>

        {/* Metrics */}
        <div className="mt-10 grid grid-cols-1 border-l border-t border-[#2a2a2a] sm:grid-cols-3">
          <div className="border-b border-r border-[#2a2a2a] p-6">
            <div className="flex items-center gap-3 text-[#ccff00]">
              <Dumbbell size={20} />
              <span className="text-xs font-black uppercase tracking-wider">
                Exercises
              </span>
            </div>

            <p className="mt-4 text-4xl font-black">{plan.length}</p>
          </div>

          <div className="border-b border-r border-[#2a2a2a] p-6">
            <div className="flex items-center gap-3 text-[#ccff00]">
              <Clock3 size={20} />
              <span className="text-xs font-black uppercase tracking-wider">
                Minutes
              </span>
            </div>

            <p className="mt-4 text-4xl font-black">{totalMinutes}</p>
          </div>

          <div className="border-b border-r border-[#2a2a2a] p-6">
            <div className="flex items-center gap-3 text-[#ccff00]">
              <Flame size={20} />
              <span className="text-xs font-black uppercase tracking-wider">
                Calories
              </span>
            </div>

            <p className="mt-4 text-4xl font-black">{totalCalories}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12 flex border-b border-[#2a2a2a]">
          <button
            type="button"
            onClick={() => setActiveTab("plan")}
            className={`border-b-2 px-5 py-4 text-xs font-black uppercase tracking-wider transition ${
              activeTab === "plan"
                ? "border-[#ccff00] text-[#ccff00]"
                : "border-transparent text-gray-500 hover:text-white"
            }`}
          >
            Today&apos;s Plan
            <span className="ml-2">({plan.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`border-b-2 px-5 py-4 text-xs font-black uppercase tracking-wider transition ${
              activeTab === "saved"
                ? "border-[#ccff00] text-[#ccff00]"
                : "border-transparent text-gray-500 hover:text-white"
            }`}
          >
            Saved
            <span className="ml-2">({saved.length})</span>
          </button>
        </div>

        {/* Workout List */}
        <div className="mt-8">
          {currentWorkouts.length === 0 ? (
            <div className="border border-dashed border-[#444] px-6 py-16 text-center">
              <h2 className="text-2xl font-black uppercase">
                {activeTab === "plan"
                  ? "Your plan is empty"
                  : "No saved workouts"}
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
                {activeTab === "plan"
                  ? "Browse the workout library and add exercises to build today's plan."
                  : "Save workouts from the library so you can find them here later."}
              </p>

              <Link
                href="/#library"
                className="btn mt-6 rounded-none border-[#ccff00] bg-[#ccff00] px-6 text-black hover:border-[#ccff00] hover:bg-[#ccff00]"
              >
                Browse Workouts
              </Link>
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              {currentWorkouts.map((workout) => (
                <article
                  key={workout.id}
                  className="overflow-hidden border border-[#2a2a2a] bg-[#151515]"
                >
                  <div className="grid sm:grid-cols-[180px_1fr]">
                    <img
                      src={workout.image}
                      alt={workout.name}
                      className="h-full min-h-44 w-full object-cover"
                    />

                    <div className="p-5">
                      <div className="flex flex-wrap gap-2">
                        {workout.muscleGroups.map((group) => (
                          <span
                            key={group}
                            className="rounded-full border border-[#444] px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-gray-400"
                          >
                            {group}
                          </span>
                        ))}
                      </div>

                      <h2 className="mt-4 text-xl font-black uppercase">
                        {workout.name}
                      </h2>

                      <div className="mt-4 flex gap-4 text-xs text-gray-500">
                        <span>{workout.duration} min</span>
                        <span>{workout.caloriesBurned} kcal</span>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        <div className="mt-5 flex flex-wrap gap-2">
                          <Link
                            href={`/workout/${workout.id}`}
                            className="btn btn-sm rounded-none bg-[#ccff00] text-black hover:bg-[#ccff00]"
                          >
                            View Details
                          </Link>

                          {activeTab === "plan" && (
                            <button
                              type="button"
                              disabled={isCompleted(workout.id)}
                              onClick={() => {
                                markAsDone(workout.id);
                                showToast(`${workout.name} marked as done`);
                              }}
                              className="btn btn-sm btn-outline rounded-none border-[#444] text-white hover:border-[#ccff00] hover:bg-transparent hover:text-[#ccff00] disabled:border-[#ccff00] disabled:text-[#ccff00]"
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
                                showToast(`${workout.name} removed from plan`);
                              } else {
                                removeSaved(workout.id);
                                showToast(`${workout.name} removed from saved`);
                              }
                            }}
                            className="btn btn-sm btn-outline rounded-none border-[#444] text-white hover:border-red-400 hover:bg-transparent hover:text-red-400"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
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
