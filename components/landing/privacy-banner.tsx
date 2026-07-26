import { Badge } from "@/components/ui/badge";
import { ShieldCheck } from "lucide-react";

export function PrivacyBanner() {
  return (
    <div className="flex items-start gap-3 rounded-xl border bg-surface p-4">
      <ShieldCheck className="mt-0.5 h-5 w-5 text-accent" />

      <div>
        <Badge variant="secondary">Privacy First</Badge>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Semua foto diproses langsung di browser Anda. Pengembang App
          tidak dapat melihat, mengakses, ataupun menyimpan foto pengguna.
        </p>
      </div>
    </div>
  );
}
