"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useSessionStore } from "@/lib/store/session-store";

export function ContinueButton() {
  const router = useRouter();

  const selectedFilter = useSessionStore((state) => state.selectedFilter);

  return (
    <Button
      size="lg"
      className="mx-auto flex w-full max-w-xs"
      disabled={!selectedFilter}
      onClick={() => router.push("/session/camera")}
    >
      Buka Kamera
    </Button>
  );
}
