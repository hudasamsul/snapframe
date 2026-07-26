"use client";

import { useCamera } from "./use-camera";

export function CameraView() {
  const { cameraState } = useCamera();

  return (
    <div className="flex h-[420px] items-center justify-center rounded-2xl border bg-slate-100">
      {cameraState.isReady ? "Camera Ready" : "Camera Belum Aktif"}
    </div>
  );
}
