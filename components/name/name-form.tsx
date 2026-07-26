"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";
import { ContinueButton } from "./continue-button";
import { HelperText } from "./helper-text";
import { useSessionStore } from "@/lib/store/session-store";

export function NameForm() {
  const [name, setName] = useState("");

  const router = useRouter();

  const setNameSession = useSessionStore((state) => state.setName);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) return;

    // Simpan ke global state
    setNameSession(trimmedName);

    // Lanjut ke halaman berikutnya
    router.push("/session/frame");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Input
          placeholder="Masukkan nama..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <HelperText />
      </div>

      <ContinueButton disabled={!name.trim()} />
    </form>
  );
}
