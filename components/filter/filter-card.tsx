"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FilterOption } from "./filter-data";

interface FilterCardProps {
  filter: FilterOption;
  selected: boolean;
  onClick: () => void;
}

export function FilterCard({ filter, selected, onClick }: FilterCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-white transition-all duration-300",
        "hover:-translate-y-1 hover:shadow-xl",
        selected && "border-black shadow-xl ring-2 ring-black",
      )}
    >
      {selected && (
        <div className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
          <Check className="h-4 w-4" />
        </div>
      )}

      <div
        className={cn(
          "flex aspect-[2/3] items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200",
          filter.previewClass,
        )}
      >
        <span className="text-sm font-medium">Preview</span>
      </div>

      <div className="border-t p-4">
        <h3 className="font-semibold">{filter.name}</h3>

        <p className="mt-1 text-sm text-neutral-500">Filter Effect</p>
      </div>
    </button>
  );
}
