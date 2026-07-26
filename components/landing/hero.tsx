import { FeatureList } from "./feature-list";
import { PrivacyBanner } from "./privacy-banner";
import { StartButton } from "./start-button";

export function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center space-y-8">
        <h1 className="text-5xl font-bold tracking-tight">SnapFrame</h1>

        <p className="text-xl text-muted-foreground">
          Modern privacy-first web photobooth yang berjalan langsung di browser
          tanpa instalasi aplikasi.
        </p>

        <div className="flex justify-center">
          <StartButton />
        </div>

        <FeatureList />

        <PrivacyBanner />
      </div>
    </section>
  );
}
