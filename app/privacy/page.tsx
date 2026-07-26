import { PageContainer } from "@/components/layout/page-container";
import { Container } from "@/components/ui/container";
import { PrivacyCard } from "@/components/privacy/privacy-card";

export default function PrivacyPage() {
  return (
    <PageContainer>
      <Container>
        <div className="flex min-h-[80vh] items-center justify-center py-12">
          <PrivacyCard />
        </div>
      </Container>
    </PageContainer>
  );
}
