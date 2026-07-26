import { Check } from "lucide-react";

const features = [
  "100% Browser Based",
  "Privacy First",
  "Download via QR Code",
  "Photo & Live Photo",
];

export function FeatureList() {
  return (
    <ul className="space-y-3">
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-3 text-sm">
          <Check className="h-4 w-4 text-accent" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}
