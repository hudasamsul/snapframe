"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSessionStore } from "@/lib/store/session-store";

interface FrameGuardProps {
  children: React.ReactNode;
}

export function FrameGuard({ children }: FrameGuardProps) {
  const router = useRouter();

  const name = useSessionStore((state) => state.name);
  const selectedFrame = useSessionStore((state) => state.selectedFrame);

  useEffect(() => {
    if (!name) {
      router.replace("/session/name");
      return;
    }

    if (!selectedFrame) {
      router.replace("/session/frame");
    }
  }, [name, selectedFrame, router]);

  // Hanya sembunyikan saat nama belum ada
  if (!name) {
    return null;
  }

  return <>{children}</>;
}
