"use client";

import { FRAME_OPTIONS } from "./frame-data";
import { FrameCard } from "./frame-card";
import { useSessionStore } from "@/lib/store/session-store";

export function FrameGrid() {
  const selectedFrame = useSessionStore((state) => state.selectedFrame);

  const setSelectedFrame = useSessionStore((state) => state.setSelectedFrame);

  return (
    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4">
      {FRAME_OPTIONS.map((frame) => (
        <FrameCard
          key={frame.id}
          frame={frame}
          selected={selectedFrame === frame.id}
          onClick={() => setSelectedFrame(frame.id)}
        />
      ))}
    </div>
  );
}
