"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { FrameOption } from "./frame-data";

interface FrameCardProps {
  frame: FrameOption;
  selected: boolean;
  onClick: () => void;
}

export function FrameCard({ frame, selected, onClick }: FrameCardProps) {
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
        <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
          <Check className="h-4 w-4" />
        </div>
      )}

      <div className="aspect-[2/3] bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
        <span className="text-sm font-medium text-neutral-500">
          {frame.name}
        </span>
      </div>

      <div className="border-t p-4">
        <h3 className="font-semibold">{frame.name}</h3>

        <p className="mt-1 text-sm text-neutral-500">Template photobooth</p>
      </div>
    </button>
  );
}
