"use client";

import { SessionGuard } from "@/components/guards/session-guard";
import { useSessionStore } from "@/lib/store/session-store";

export default function FramePage() {
  const name = useSessionStore((state) => state.name);

  return (
    <SessionGuard>
      <div className="p-10">
        <h1 className="text-3xl font-bold">Halo, {name} 👋</h1>
      </div>
    </SessionGuard>
  );
}
