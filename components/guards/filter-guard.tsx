"use client";

import { ReactNode } from "react";

interface FilterGuardProps {
  children: ReactNode;
}

export function FilterGuard({ children }: FilterGuardProps) {
  return <>{children}</>;
}
