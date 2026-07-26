import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { NameForm } from "./name-form";

export function NameCard() {
  return (
    <Card className="mx-auto max-w-xl">
      <CardHeader>
        <CardTitle className="text-center text-3xl">Siapa Nama Anda?</CardTitle>
      </CardHeader>

      <CardContent>
        <NameForm />
      </CardContent>
    </Card>
  );
}
