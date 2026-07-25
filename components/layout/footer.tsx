import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <Container>
        <div className="flex h-16 items-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SnapFrame
        </div>
      </Container>
    </footer>
  );
}
