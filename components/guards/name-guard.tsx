"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSessionStore } from "@/lib/store/session-store";

interface NameGuardProps {
  children: React.ReactNode;
}

export function NameGuard({ children }: NameGuardProps) {
  const router = useRouter();

  const name = useSessionStore((state) => state.name);

  console.log("NameGuard:", name);

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
