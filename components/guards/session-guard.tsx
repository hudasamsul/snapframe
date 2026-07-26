"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSessionStore } from "@/lib/store/session-store";

interface SessionGuardProps {
  children: React.ReactNode;
}

export function SessionGuard({ children }: SessionGuardProps) {
  const router = useRouter();

  const name = useSessionStore((state) => state.name);

  useEffect(() => {
    if (!name) {
      router.replace("/session/name");
    }
  }, [name, router]);

  if (!name) {
    return null;
  }

  return <>{children}</>;
}
