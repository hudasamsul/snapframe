"use client";

import { FrameGuard } from "@/components/guards/frame-guard";
import { PageContainer } from "@/components/layout/page-container";
import { Container } from "@/components/ui/container";
import { FilterGrid } from "@/components/filter/filter-grid";
import { ContinueButton } from "@/components/filter/continue-button";

export default function FilterPage() {
  return (
    <FrameGuard>
      <PageContainer>
        <Container>
          <div className="mx-auto max-w-6xl space-y-10 py-12">
            <div className="space-y-2 text-center">
              <h1 className="text-4xl font-bold">Pilih Filter</h1>

              <p className="text-neutral-500">
                Pilih filter yang ingin diterapkan pada hasil photobooth.
              </p>
            </div>

            <FilterGrid />

            <ContinueButton />
          </div>
        </Container>
      </PageContainer>
    </FrameGuard>
  );
}
