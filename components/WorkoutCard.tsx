import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";
import type { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group block overflow-hidden border border-[#2a2a2a] bg-[#151515] transition hover:-translate-y-1 hover:border-[#ccff00]"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#202020]">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/10 transition group-hover:bg-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full border border-[#444] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-300"
            >
              {group}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3 className="text-lg font-black uppercase leading-tight text-white">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-2 text-sm text-gray-500">{workout.equipment}</p>

        {/* Stats */}
        <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-[#2a2a2a] pt-4 text-xs text-gray-400">
          <span className="flex items-center gap-1.5">
            <Clock3 size={14} />
            {workout.duration} min
          </span>

          <span className="flex items-center gap-1.5">
            <Flame size={14} />
            {workout.caloriesBurned} kcal
          </span>

          <span className="flex items-center gap-1.5">
            <Star size={14} />
            {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}