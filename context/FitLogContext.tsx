"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Workout } from "@/types/workout";

interface FitLogContextType {
  plan: Workout[];
  saved: Workout[];
  completed: number[];

  addToPlan: (workout: Workout) => void;
  removeFromPlan: (id: number) => void;

  saveWorkout: (workout: Workout) => void;
  removeSaved: (id: number) => void;

  markAsDone: (id: number) => void;

  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
  isCompleted: (id: number) => boolean;
}

const FitLogContext = createContext<
  FitLogContextType | undefined
>(undefined);

interface FitLogProviderProps {
  children: ReactNode;
}

export function FitLogProvider({
  children,
}: FitLogProviderProps) {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [completed, setCompleted] = useState<number[]>([]);

  const [hydrated, setHydrated] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("fitlog-plan");
      const storedSaved = localStorage.getItem("fitlog-saved");
      const storedCompleted =
        localStorage.getItem("fitlog-completed");

      if (storedPlan) {
        setPlan(JSON.parse(storedPlan));
      }

      if (storedSaved) {
        setSaved(JSON.parse(storedSaved));
      }

      if (storedCompleted) {
        setCompleted(JSON.parse(storedCompleted));
      }
    } catch (error) {
      console.error(
        "Failed to load FitLog data:",
        error
      );
    } finally {
      setHydrated(true);
    }
  }, []);

  // Save plan
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plan)
    );
  }, [plan, hydrated]);

  // Save saved workouts
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(saved)
    );
  }, [saved, hydrated]);

  // Save completed workouts
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      "fitlog-completed",
      JSON.stringify(completed)
    );
  }, [completed, hydrated]);

  function addToPlan(workout: Workout) {
    setPlan((currentPlan) => {
      if (
        currentPlan.some(
          (item) => item.id === workout.id
        )
      ) {
        return currentPlan;
      }

      if (currentPlan.length >= 5) {
        return currentPlan;
      }

      return [...currentPlan, workout];
    });
  }

  function removeFromPlan(id: number) {
    setPlan((currentPlan) =>
      currentPlan.filter(
        (workout) => workout.id !== id
      )
    );
  }

  function saveWorkout(workout: Workout) {
    setSaved((currentSaved) => {
      if (
        currentSaved.some(
          (item) => item.id === workout.id
        )
      ) {
        return currentSaved;
      }

      return [...currentSaved, workout];
    });
  }

  function removeSaved(id: number) {
    setSaved((currentSaved) =>
      currentSaved.filter(
        (workout) => workout.id !== id
      )
    );
  }

  function markAsDone(id: number) {
    setCompleted((currentCompleted) => {
      if (currentCompleted.includes(id)) {
        return currentCompleted;
      }

      return [...currentCompleted, id];
    });
  }

  function isInPlan(id: number) {
    return plan.some(
      (workout) => workout.id === id
    );
  }

  function isSaved(id: number) {
    return saved.some(
      (workout) => workout.id === id
    );
  }

  function isCompleted(id: number) {
    return completed.includes(id);
  }

  return (
    <FitLogContext.Provider
      value={{
        plan,
        saved,
        completed,

        addToPlan,
        removeFromPlan,

        saveWorkout,
        removeSaved,

        markAsDone,

        isInPlan,
        isSaved,
        isCompleted,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider"
    );
  }

  return context;
}