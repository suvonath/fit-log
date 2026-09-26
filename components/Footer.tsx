import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2a2a] bg-[#0b0b0b]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-8 sm:px-8 md:flex-row lg:px-10">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition opacity-90 hover:opacity-100"
        >
          <img src="/logo.png" alt="FITLOG logo" className="h-6 w-auto" />

          <span className="font-oswald text-lg font-black tracking-wider text-white">
            FITLOG
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-center text-xs uppercase tracking-wide text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest
        </p>
      </div>
    </footer>
  );
}
