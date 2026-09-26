"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useFitLog } from "@/context/FitLogContext";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { plan = [], saved = [] } = useFitLog();
  const pathname = usePathname();

  const isWorkoutPage = pathname === "/";
  const isPlanPage = pathname === "/my-plan";

  return (
    <header className="w-full border-b border-[#1f2128] bg-[#0c0d10]">
      <div className="mx-auto flex h-[64px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-4 transition opacity-90 hover:opacity-100"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src="/logo.png"
            alt="FITLOG logo"
            className="h-6 md:h-8 w-auto "
          />
          <span className="font-oswald text-lg  md:text-3xl font-black tracking-wider text-white">
            FITLOG
          </span>
        </Link>

        {/* Center Navigation (Workouts / My Plan) */}
        <nav className="hidden items-center gap-2 md:flex">
          <Link
            href="/"
            className={`rounded-full px-4 py-1.5 text-lg  transition ${
              isWorkoutPage
                ? "bg-[#182606] text-[#ccff00]"
                : "text-gray-400 hover:text-white "
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-1.5  text-lg  transition ${
              isPlanPage
                ? "bg-[#182606] text-[#ccff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Right Side Counters (Plan / Saved) */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/my-plan"
            className="flex items-center gap-2  text-lg  font-medium text-gray-300 hover:text-white"
          >
            <span>Plan</span>
            <span className="flex h-5 w-5 justify-center items-center rounded-full bg-[#ccff00]  text-lg  font-bold text-black">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2  text-lg  font-medium text-gray-300 hover:text-white"
          >
            <span>Saved</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#333]  text-lg  font-bold text-gray-300">
              {saved.length}
            </span>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="text-white md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="border-t border-[#1f2128] bg-[#0c0d10] px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              className={`text-sm font-semibold ${
                isWorkoutPage ? "text-[#ccff00]" : "text-gray-400"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              className={`text-sm font-semibold ${
                isPlanPage ? "text-[#ccff00]" : "text-gray-400"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              My Plan
            </Link>

            <div className="mt-2 flex gap-5 border-t border-[#1f2128] pt-4">
              <Link
                href="/my-plan"
                className="flex items-center gap-2 text-xs font-medium text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Plan</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ccff00] text-[11px] font-bold text-black">
                  {plan.length}
                </span>
              </Link>

              <Link
                href="/my-plan"
                className="flex items-center gap-2 text-xs font-medium text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Saved</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#333] text-[11px] font-bold text-gray-300">
                  {saved.length}
                </span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
