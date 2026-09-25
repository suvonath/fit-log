"use client";

import { ChevronDown } from "lucide-react";

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
      <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
        Sort By
      </span>

      <div className="relative">
        <select
          value={value}
          onChange={(event) =>
            onChange(event.target.value as SortOption)
          }
          className="appearance-none rounded-none border border-[#444] bg-[#151515] py-3 pl-4 pr-10 text-xs font-bold uppercase tracking-wider text-white outline-none transition focus:border-[#ccff00]"
        >
          <option value="duration">Duration</option>
          <option value="calories">Calories</option>
          <option value="rating">Rating</option>
        </select>

        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
      </div>
    </div>
  );
}