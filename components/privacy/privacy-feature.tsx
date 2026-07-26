import { CheckCircle2 } from "lucide-react";

interface PrivacyFeatureProps {
  text: string;
}

export function PrivacyFeature({ text }: PrivacyFeatureProps) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 className="h-5 w-5 text-accent" />

      <p className="text-sm">{text}</p>
    </div>
  );
}
