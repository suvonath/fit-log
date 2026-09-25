import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="border-b border-[#2a2a2a]">
      <div className="mx-auto grid max-w-7xl items-stretch lg:grid-cols-2">
        {/* Content */}
        <div className="flex flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <p className="mb-5 text-xs font-black uppercase tracking-[0.25em] text-[#ccff00]">
            Workout Library
          </p>

          <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            Train with intent.
            <br />
            Log every set.
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div className="mt-8">
            <Link
              href="#library"
              className="inline-flex items-center gap-3 bg-[#ccff00] px-6 py-4 text-xs font-black uppercase tracking-wider text-black transition hover:bg-white"
            >
              Browse Workouts
              <ArrowDownRight size={18} strokeWidth={2.5} />
            </Link>
          </div>
        </div>

        {/* Hero Visual */}
        <div className="relative min-h-[400px] overflow-hidden bg-[#1b1b1b] lg:min-h-[600px]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-8xl font-black uppercase leading-none text-[#2a2a2a] sm:text-9xl">
                FL
              </p>

              <p className="mt-4 text-xs font-bold uppercase tracking-[0.35em] text-gray-500">
                Train Hard
              </p>
            </div>
          </div>

          <div className="absolute bottom-5 left-5 border border-[#555] bg-[#111111]/80 px-4 py-3 backdrop-blur-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
              FitLog / 001
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}