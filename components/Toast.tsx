"use client";

import { Check } from "lucide-react";
import { useFitLog } from "@/context/FitLogContext";

export default function Toast() {
  const { toast } = useFitLog();

  if (!toast) {
    return null;
  }

  return (
    <div className="toast toast-end toast-bottom z-50">
      <div className="flex items-center gap-3 rounded-none border border-[#ccff00] bg-[#151515] px-5 py-4 text-white shadow-xl">
        <div className="flex h-7 w-7 items-center justify-center bg-[#ccff00] text-black">
          <Check size={16} strokeWidth={3} />
        </div>

        <span className="text-sm font-bold">
          {toast.message}
        </span>
      </div>
    </div>
  );
}