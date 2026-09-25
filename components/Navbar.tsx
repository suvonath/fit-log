"use client";

import Link from "next/link";
import { Dumbbell, Menu, X } from "lucide-react";
import { useState } from "react";
import { useFitLog } from "@/context/FitLogContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { plan, saved } = useFitLog();
  const pathname = usePathname();

  const isWorkoutPage = pathname === "/";
  const isPlanPage = pathname === "/my-plan";

  return (
    <header className="border-b border-[#2a2a2a] bg-[#111111]">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="flex h-9 w-9 items-center justify-center bg-[#ccff00] text-black">
            <Dumbbell size={20} strokeWidth={2.5} />
          </div>

          <span className="text-xl font-black tracking-tight text-white">
            FITLOG
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className={`text-sm font-bold uppercase tracking-wider transition ${
              isWorkoutPage
                ? "text-[#ccff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workout
          </Link>

          <Link
            href="/my-plan"
            className={`text-sm font-bold uppercase tracking-wider transition ${
              isPlanPage ? "text-[#ccff00]" : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Desktop Counters */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/my-plan"
            className="rounded-full bg-[#ccff00] px-4 py-2 text-xs font-black uppercase tracking-wider text-black transition hover:bg-white"
          >
            Plan <span className="ml-1">{plan.length}</span>
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full border border-[#555] px-4 py-2 text-xs font-black uppercase tracking-wider text-white transition hover:border-white"
          >
            Saved <span className="ml-1">{saved.length}</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="btn btn-square btn-ghost text-white md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-[#2a2a2a] px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className={`text-sm font-bold uppercase tracking-wider ${
                isWorkoutPage ? "text-[#ccff00]" : "text-gray-400"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Workout
            </Link>

            <Link
              href="/my-plan"
              className={`text-sm font-bold uppercase tracking-wider ${
                isPlanPage ? "text-[#ccff00]" : "text-gray-400"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              My Plan
            </Link>

            <div className="mt-2 flex gap-3">
              <Link
                href="/my-plan"
                className="rounded-full bg-[#ccff00] px-4 py-2 text-xs font-black uppercase tracking-wider text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Plan <span className="ml-1">{plan.length}</span>
              </Link>

              <Link
                href="/my-plan"
                className="rounded-full border border-[#555] px-4 py-2 text-xs font-black uppercase tracking-wider text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Saved <span className="ml-1">{saved.length}</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
