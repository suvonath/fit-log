import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center border-b border-[#2a2a2a] px-5">
      <div className="max-w-xl text-center">
        <p className="text-sm font-black uppercase tracking-[0.3em] text-[#ccff00]">
          Error 404
        </p>

        <h1 className="mt-4 text-7xl font-black uppercase tracking-tight sm:text-8xl">
          Lost?
        </h1>

        <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-gray-500">
          This workout page doesn't exist. Head back to the
          library and find your next exercise.
        </p>

        <Link
          href="/#library"
          className="btn mt-8 rounded-none border-[#ccff00] bg-[#ccff00] px-7 text-black hover:border-[#ccff00] hover:bg-[#ccff00]"
        >
          Back to Workout Library
        </Link>
      </div>
    </main>
  );
}