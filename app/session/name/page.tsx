import { PageContainer } from "@/components/layout/page-container";
import { Container } from "@/components/ui/container";
import { NameCard } from "@/components/name/name-card";

export default function NamePage() {
  return (
    <PageContainer>
      <Container>
        <div className="flex min-h-[80vh] items-center justify-center py-12">
          <NameCard />
        </div>
      </Container>
    </PageContainer>
  );
}
