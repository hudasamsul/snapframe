"use client";

import { useState } from "react";
import type { CameraState } from "./types";

export function useCamera() {
  const [cameraState] = useState<CameraState>({
    stream: null,
    isReady: false,
    isLoading: false,
    error: null,
  });

  return {
    cameraState,
  };
}
