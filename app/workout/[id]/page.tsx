import { notFound } from "next/navigation";
import { getWorkoutById } from "@/lib/api";
import WorkoutActions from "@/components/WorkoutActions";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutDetailsPage({
  params,
}: WorkoutDetailsPageProps) {
  const { id } = await params;

  const workout = await getWorkoutById(id);

  if (!workout) {
    notFound();
  }

  return (
    <section className="border-b border-[#2a2a2a]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="overflow-hidden bg-[#202020]">
            <img
              src={workout.image}
              alt={workout.name}
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#ccff00]">
              Workout Details
            </p>

            <h1 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
              {workout.name}
            </h1>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {workout.muscleGroups.map((group) => (
                <span
                  key={group}
                  className="rounded-full border border-[#444] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-gray-300"
                >
                  {group}
                </span>
              ))}
            </div>

            <p className="mt-6 leading-7 text-gray-400">
              {workout.description}
            </p>

            {/* Specs */}
            <div className="mt-8 grid grid-cols-2 border-l border-t border-[#2a2a2a]">
              <div className="border-b border-r border-[#2a2a2a] p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Equipment
                </p>
                <p className="mt-1 text-sm font-bold text-white">
                  {workout.equipment}
                </p>
              </div>

              <div className="border-b border-r border-[#2a2a2a] p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Difficulty
                </p>
                <p className="mt-1 text-sm font-bold text-white">
                  {workout.difficulty}
                </p>
              </div>

              <div className="border-b border-r border-[#2a2a2a] p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Sets
                </p>
                <p className="mt-1 text-sm font-bold text-white">
                  {workout.sets}
                </p>
              </div>

              <div className="border-b border-r border-[#2a2a2a] p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Reps
                </p>
                <p className="mt-1 text-sm font-bold text-white">
                  {workout.reps}
                </p>
              </div>

              <div className="border-b border-r border-[#2a2a2a] p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Duration
                </p>
                <p className="mt-1 text-sm font-bold text-white">
                  {workout.duration} min
                </p>
              </div>

              <div className="border-b border-r border-[#2a2a2a] p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Calories
                </p>
                <p className="mt-1 text-sm font-bold text-white">
                  {workout.caloriesBurned} kcal
                </p>
              </div>

              <div className="border-b border-r border-[#2a2a2a] p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                  Rating
                </p>
                <p className="mt-1 text-sm font-bold text-white">
                  {workout.rating}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-16 border-t border-[#2a2a2a] pt-12">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-[#ccff00]">
            How To Perform
          </p>

          <h2 className="text-3xl font-black uppercase sm:text-4xl">
            Instructions
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {workout.instructions.map((instruction, index) => (
              <div
                key={instruction}
                className="border border-[#2a2a2a] bg-[#151515] p-6"
              >
                <span className="text-sm font-black text-[#ccff00]">
                  0{index + 1}
                </span>

                <p className="mt-4 leading-7 text-gray-400">{instruction}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <WorkoutActions workout={workout} />
      </div>
    </section>
  );
}
