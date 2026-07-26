"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSessionStore } from "@/lib/store/session-store";

interface CameraGuardProps {
  children: React.ReactNode;
}

export function CameraGuard({ children }: CameraGuardProps) {
  const router = useRouter();

  const { name, selectedFrame, selectedFilter } = useSessionStore();

  useEffect(() => {
    if (!name) {
      router.replace("/session/name");
      return;
    }

    if (!selectedFrame) {
      router.replace("/session/frame");
      return;
    }

    if (!selectedFilter) {
      router.replace("/session/filter");
    }
  }, [name, selectedFrame, selectedFilter, router]);

  if (!name || !selectedFrame || !selectedFilter) {
    return null;
  }

  return <>{children}</>;
}
