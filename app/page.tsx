import { Hero } from "@/components/landing/hero";
import { Container } from "@/components/ui/container";
import { PageContainer } from "@/components/layout/page-container";

export default function Home() {
  return (
    <PageContainer>
      <Container>
        <Hero />
      </Container>
    </PageContainer>
  );
}
