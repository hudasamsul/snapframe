"use client";

import { useSessionStore } from "@/lib/store/session-store";

export default function FramePage() {
  const name = useSessionStore((state) => state.name);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Halo, {name || "Pengguna"} 👋</h1>
    </div>
  );
}
