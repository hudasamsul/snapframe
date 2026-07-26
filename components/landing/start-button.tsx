"use client";

import { useRouter } from "next/navigation";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StartButton() {
  const router = useRouter();

  return (
    <Button size="lg" onClick={() => router.push("/privacy")}>
      <Camera className="mr-2 h-4 w-4" />
      Mulai Sekarang
    </Button>
  );
}
