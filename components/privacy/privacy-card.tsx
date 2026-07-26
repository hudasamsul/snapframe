import { ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PrivacyFeature } from "./privacy-feature";
import { ContinueButton } from "./continue-button";

export function PrivacyCard() {
  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
          <ShieldCheck className="h-7 w-7 text-accent" />
        </div>

        <CardTitle className="text-3xl">Privacy First</CardTitle>
      </CardHeader>

      <CardContent className="space-y-8">
        <p className="text-center text-muted-foreground leading-7">
          Semua foto diproses langsung di browser Anda. SnapFrame tidak
          menyimpan, mengunggah, ataupun dapat melihat foto pengguna.
        </p>

        <div className="space-y-4">
          <PrivacyFeature text="Diproses langsung di perangkat Anda" />

          <PrivacyFeature text="Tidak disimpan di server" />

          <PrivacyFeature text="Nama hanya digunakan sebagai nama file hasil foto" />
        </div>

        <div className="flex justify-center">
          <ContinueButton />
        </div>
      </CardContent>
    </Card>
  );
}
