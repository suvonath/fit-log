import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a] bg-[#0b0b0b]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 sm:px-8 md:flex-row lg:px-10">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center bg-[#ccff00] text-black">
            <Dumbbell size={17} strokeWidth={2.5} />
          </div>

          <span className="text-lg font-black tracking-tight text-white">
            FITLOG
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-center text-xs uppercase tracking-wide text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}