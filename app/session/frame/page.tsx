"use client";

import { NameGuard } from "@/components/guards/name-guard";
import { PageContainer } from "@/components/layout/page-container";
import { Container } from "@/components/ui/container";

import { FrameGrid } from "@/components/frame/frame-grid";
import { ContinueButton } from "@/components/frame/continue-button";

export default function FramePage() {
  return (
    <NameGuard>
      <PageContainer>
        <Container>
          <div className="mx-auto max-w-6xl space-y-10 py-12">
            <div className="space-y-2 text-center">
              <h1 className="text-4xl font-bold">Pilih Bingkai</h1>

              <p className="text-neutral-500">
                Pilih template yang ingin digunakan untuk sesi photobooth.
              </p>
            </div>

            <FrameGrid />

            <ContinueButton />
          </div>
        </Container>
      </PageContainer>
    </NameGuard>
  );
}
