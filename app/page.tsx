export default function Home() {
  return (
    <section className="mx-auto min-h-[70vh] max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#ccff00]">
        Workout Library
      </p>

      <h1 className="max-w-4xl text-5xl font-black uppercase leading-none tracking-tight sm:text-6xl lg:text-8xl">
        Train with intent.
        <br />
        Log every set.
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-7 text-gray-400">
        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
        today&apos;s plan, and watch the week&apos;s work add up.
      </p>
    </section>
  );
}