import Link from "next/link";
import Image from "next/image";
import { FiArrowDownRight } from "react-icons/fi";


export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      
      <div className="grid items-center gap-8 rounded-3xl border border-[#2a2d37] bg-[#15171D] p-8 sm:p-12 lg:grid-cols-12 lg:p-16">
        
        <div className="flex flex-col justify-center lg:col-span-7">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-[#ccff00]">
            Workout Library
          </p>

          <h1 className="font-oswald max-w-2xl text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-5xl lg:text-6xl">
            Train with intent. Log
            <br />
            every set.
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-400 sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
            <br />
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <div className="mt-8">
            <Link
              href="#library"
              className="inline-flex items-center gap-3 rounded-lg bg-[#ccff00] px-6 py-4 text-xs font-black uppercase tracking-wider text-black transition hover:bg-white"
            >
              Browse Workouts
              <FiArrowDownRight className="text-xl font-bold " />
            </Link>
          </div>
        </div>

        {/* Hero Visual (Right Column) */}

        <div className="flex items-center justify-center lg:col-span-5 lg:justify-end">
          <div className="relative h-[280px] w-full max-w-[360px] sm:h-[350px] lg:h-[400px]">
            <Image
              src="/banner.png"
              alt="FitLog banner"
              fill
              sizes="(max-width: 1024px) 100vw, 360px"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
