import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { PageContainer } from "@/components/layout/page-container";

export default function DesignSystemPage() {
  return (
    <PageContainer>
      <Container>
        <div className="space-y-10 py-10">
          {/* Header */}
          <section>
            <Badge>SnapFrame UI</Badge>
            <Badge variant="secondary">Privacy Protected</Badge>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight">
              Design System Showcase
            </h1>

            <p className="mt-3 text-muted-foreground">
              Preview komponen dasar SnapFrame sebelum masuk ke fitur
              photobooth.
            </p>
          </section>

          {/* Typography */}
          <Card>
            <CardHeader>
              <CardTitle>Typography</CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              <div>
                <p className="text-4xl font-semibold tracking-tight">
                  Heading XL
                </p>

                <p className="text-muted-foreground">
                  Digunakan untuk judul utama halaman.
                </p>
              </div>

              <div>
                <p className="text-2xl font-semibold">Heading Large</p>

                <p className="text-muted-foreground">
                  Digunakan untuk section title.
                </p>
              </div>

              <div>
                <p className="text-base">Body Text</p>

                <p className="text-muted-foreground">
                  Digunakan untuk deskripsi, instruksi, dan informasi pengguna.
                </p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Caption Text</p>
              </div>
            </CardContent>
          </Card>

          {/* Colors */}
          <Card>
            <CardHeader>
              <CardTitle>Color System</CardTitle>
            </CardHeader>

            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-primary p-6 text-primary-foreground">
                  Primary
                </div>

                <div className="rounded-xl bg-accent p-6 text-accent-foreground">
                  Accent
                </div>

                <div className="rounded-xl border bg-surface p-6">Surface</div>
              </div>
            </CardContent>
          </Card>

          {/* Buttons */}
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
            </CardHeader>

            <CardContent className="flex flex-wrap gap-3">
              <Button>Capture Photo</Button>

              <Button variant="secondary">Secondary</Button>

              <Button variant="outline">Outline</Button>

              <Button variant="ghost">Ghost</Button>
            </CardContent>
          </Card>

          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle>Input</CardTitle>
            </CardHeader>

            <CardContent>
              <Input placeholder="Masukkan nama pengguna" />
            </CardContent>
          </Card>
        </div>
      </Container>
    </PageContainer>
  );
}
