import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <main className="min-h-screen bg-background py-10">
      <Container>
        <Card>
          <CardHeader>
            <CardTitle>SnapFrame Design System</CardTitle>
          </CardHeader>

          <CardContent>
            <p className="mb-6 text-muted-foreground">
              UI foundation berhasil berjalan.
            </p>

            <Button>Test Capture Button</Button>
          </CardContent>
        </Card>
      </Container>
    </main>
  );
}
