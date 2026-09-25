"use client";

import { Check, Plus, Bookmark, BookmarkCheck } from "lucide-react";
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
  } = useFitLog();

  const addedToPlan = isInPlan(workout.id);
  const saved = isSaved(workout.id);

  function handleAddToPlan() {
    if (addedToPlan) return;

    addToPlan(workout);
  }

  function handleSave() {
    if (saved) return;

    saveWorkout(workout);
  }

  return (
    <div className="mt-12 flex flex-col gap-3 sm:flex-row">
      <button
        onClick={handleAddToPlan}
        disabled={addedToPlan}
        className="btn rounded-none border-[#ccff00] bg-[#ccff00] px-8 text-black hover:border-[#ccff00] hover:bg-[#ccff00] disabled:border-[#444] disabled:bg-[#222] disabled:text-gray-500"
      >
        {addedToPlan ? (
          <>
            <Check size={18} />
            Added to Plan
          </>
        ) : (
          <>
            <Plus size={18} />
            Add to Today&apos;s Plan
          </>
        )}
      </button>

      <button
        onClick={handleSave}
        disabled={saved}
        className="btn btn-outline rounded-none border-[#444] px-8 text-white hover:border-[#ccff00] hover:bg-transparent hover:text-[#ccff00] disabled:border-[#444] disabled:text-gray-500"
      >
        {saved ? (
          <>
            <BookmarkCheck size={18} />
            Saved
          </>
        ) : (
          <>
            <Bookmark size={18} />
            Save for Later
          </>
        )}
      </button>
    </div>
  );
}