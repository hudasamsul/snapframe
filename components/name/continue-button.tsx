import { Button } from "@/components/ui/button";

interface ContinueButtonProps {
  disabled: boolean;
}

export function ContinueButton({ disabled }: ContinueButtonProps) {
  return (
    <Button type="submit" size="lg" disabled={disabled} className="w-full">
      Lanjut
    </Button>
  );
}
