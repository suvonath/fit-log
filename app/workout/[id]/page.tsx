
import { notFound } from "next/navigation";
import { getWorkoutById } from "@/lib/api";
import WorkoutActions from "@/components/WorkoutActions";

interface WorkoutDetailsPageProps {
  params: Promise<{ id: string }>;
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
    <section className="min-h-[calc(100vh-120px)] border-b border-[#1d2026]">
      <div className="mx-auto max-w-[1000px] px-5 py-10 lg:px-0 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-2">

          {/* Workout Image */}
          <div className="overflow-hidden rounded-xl">
            <img
              src={workout.image}
              alt={workout.name}
              className="aspect-[0.72] w-full object-cover"
            />
          </div>

          {/* Workout Information */}
          <div>
            <h1 className="font-oswald text-[34px] font-black uppercase leading-none tracking-[-0.5px] sm:text-[38px]">
              {workout.name}
            </h1>

            <p className="mt-4 text-[14px] leading-[21px] text-[#9a9ca4]">
              {workout.description}
            </p>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {workout.muscleGroups.map((group) => (
                <span
                  key={group}
                  className="rounded-full bg-[#c8ff00] px-3 py-1.5 text-[10px] font-bold uppercase text-[#111]"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* Specifications */}
            <div className="mt-6 overflow-hidden rounded-xl border border-[#252932] bg-[#171a20]">
              {[
                ["Equipment", workout.equipment],
                ["Difficulty", workout.difficulty],
                ["Sets", workout.sets],
                ["Reps", workout.reps],
                ["Duration", `${workout.duration} min`],
                ["Calories", `${workout.caloriesBurned} kcal`],
                ["Rating", workout.rating],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex min-h-[42px] items-center justify-between border-b border-[#252932] px-4 last:border-b-0"
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#92959e]">
                    {label}
                  </span>

                  <span className="text-[13px] font-medium text-[#e5e6e9]">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Instructions */}
            <div className="mt-7">
              <h2 className="text-[14px] font-black uppercase tracking-wide text-white">
                Instructions
              </h2>

              <ol className="mt-4 space-y-2.5">
                {workout.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-[13px] leading-[19px] text-[#b0b2b9]"
                  >
                    <span className="shrink-0 font-bold text-[#b0b2b9]">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            <WorkoutActions workout={workout} />
          </div>
        </div>
      </div>
    </section>
  );
}

