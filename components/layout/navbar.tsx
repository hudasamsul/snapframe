import { Container } from "@/components/ui/container";

export function Navbar() {
  return (
    <header className="border-b bg-background">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <span className="text-lg font-semibold">SnapFrame</span>
        </div>
      </Container>
    </header>
  );
}
