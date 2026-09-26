"use client";

import {
  Bookmark,
  BookmarkCheck,
  CalendarPlus,
  Check,
} from "lucide-react";
import type { Workout } from "@/types/workout";
import { useFitLog } from "@/context/FitLogContext";

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const {
    addToPlan,
    saveWorkout,
    isInPlan,
    isSaved,
    showToast,
  } = useFitLog();

  const addedToPlan = isInPlan(workout.id);
  const saved = isSaved(workout.id);

  function handleAddToPlan() {
    if (addedToPlan) return;

    addToPlan(workout);
    showToast(`${workout.name} added to today's plan`);
  }

  function handleSave() {
    if (saved) return;

    saveWorkout(workout);
    showToast(`${workout.name} saved for later`);
  }

  return (
    <div className="mt-6 flex gap-3">
      <button
        type="button"
        onClick={handleAddToPlan}
        disabled={addedToPlan}
        className="flex h-8 items-center gap-2 rounded-[7px] bg-[#c8ff00] px-4 text-[10px] font-bold text-[#111] transition hover:bg-[#d5ff42] disabled:bg-[#252932] disabled:text-[#777] "
      >
        {addedToPlan ? (
          <Check size={12} />
        ) : (
          <CalendarPlus size={12} />
        )}

        {addedToPlan
          ? "Added to today's plan"
          : "Add to today's plan"}
      </button>

      <button
        type="button"
        onClick={handleSave}
        disabled={saved}
        className="flex h-8 items-center gap-2 rounded-[7px] border border-[#30343d] px-4 text-[10px] font-medium text-white transition hover:border-[#c8ff00] hover:text-[#c8ff00] disabled:text-[#777] "
      >
        {saved ? (
          <BookmarkCheck size={12} />
        ) : (
          <Bookmark size={12} />
        )}

        {saved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
}