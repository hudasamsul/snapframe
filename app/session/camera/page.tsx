"use client";

import { CameraGuard } from "@/components/guards/camera-guard";
import { PageContainer } from "@/components/layout/page-container";
import { Container } from "@/components/ui/container";

import { CameraView } from "@/components/camera/camera-view";
import { CameraControls } from "@/components/camera/camera-controls";

export default function CameraPage() {
  return (
    <CameraGuard>
      <PageContainer>
        <Container>
          <div className="mx-auto max-w-4xl space-y-8 py-12">
            <CameraView />

            <CameraControls />
          </div>
        </Container>
      </PageContainer>
    </CameraGuard>
  );
}
