"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useSessionStore } from "@/lib/store/session-store";

export function ContinueButton() {
  const router = useRouter();

  const selectedFrame = useSessionStore((state) => state.selectedFrame);

  return (
    <Button
      size="lg"
      disabled={!selectedFrame}
      onClick={() => router.push("/session/filter")}
      className="mx-auto flex w-full max-w-xs"
    >
      Lanjut
    </Button>
  );
}
