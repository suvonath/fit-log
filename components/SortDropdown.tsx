
"use client";

export type SortOption = "duration" | "calories" | "rating";

interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export default function SortDropdown({
  value,
  onChange,
}: SortDropdownProps) {
  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor="sort-workouts"
        className="text-xs font-bold uppercase tracking-wider text-gray-500"
      >
        Sort By
      </label>

      <select
        id="sort-workouts"
        value={value}
        onChange={(event) => {
          const newValue = event.target.value as SortOption;
          onChange(newValue);
        }}
        className="rounded-xl border border-[#444] bg-[#151515] px-4 py-3 text-xs font-bold uppercase tracking-wider text-white outline-none focus:border-[#ccff00]"
      >
        <option value="duration">
          Duration
        </option>

        <option value="calories">
          Calories
        </option>

        <option value="rating">
          Rating
        </option>
      </select>
    </div>
  );
}
