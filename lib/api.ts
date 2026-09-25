import type { Workout } from "@/types/workout";

const API_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch workouts");
  }

  const workouts: Workout[] = await response.json();

  return workouts;
}

export async function getWorkoutById(
  id: string
): Promise<Workout | undefined> {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    return undefined;
  }

  const workout: Workout = await response.json();

  return workout;
}