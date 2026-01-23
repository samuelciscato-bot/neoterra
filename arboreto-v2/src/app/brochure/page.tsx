import DownloadGate from "@/components/forms/DownloadGate";

export default function BrochurePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-mono text-xs uppercase tracking-[0.4em] text-gold">Brochure access</p>
          <h2 className="mt-4 text-display text-3xl md:text-4xl">
            Arboreto full brochure.
          </h2>
          <p className="mt-4 text-warmgray">
            Floor plans, finish palettes, investment positioning, and the complete collection
            overview. For best results, take the fit quiz first so we can match you with the right
            villa profile.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-warmgray">
            <li>Detailed floor plans and private pool specs</li>
            <li>Construction timeline and delivery milestones</li>
            <li>Pricing logic and availability updates</li>
          </ul>
        </div>
        <DownloadGate
          badge="PDF download"
          assetName="Arboreto Full Brochure"
          description="The complete collection in a single premium brief."
          downloadHref="/downloads/Arboreto-Brochure.pdf"
        />
      </div>
    </div>
  );
}
