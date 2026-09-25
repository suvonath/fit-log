export default function Loading() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#111111]">
      <div className="flex flex-col items-center">
        <span className="loading loading-spinner loading-lg text-[#ccff00]" />

        <p className="mt-5 text-xs font-black uppercase tracking-[0.25em] red-gray-500">
          Loading workouts...
        </p>
      </div>
    </main>
  );
}