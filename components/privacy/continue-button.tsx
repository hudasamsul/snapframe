"use client";

import { useRouter } from "next/navigation";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContinueButton() {
  const router = useRouter();

  return (
    <Button size="lg" onClick={() => router.push("/session/name")}>
      <ShieldCheck className="mr-2 h-4 w-4" />
      Saya Mengerti
    </Button>
  );
}
