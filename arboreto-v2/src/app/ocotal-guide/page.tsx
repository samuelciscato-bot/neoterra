import DownloadGate from "@/components/forms/DownloadGate";

export default function OcotalGuidePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-mono text-xs uppercase tracking-[0.4em] text-gold">Local intel</p>
          <h2 className="mt-4 text-display text-3xl md:text-4xl">
            The insider guide to Playa Ocotal.
          </h2>
          <p className="mt-4 text-warmgray">
            Discover the beaches, dining, marina, and day trips that make Ocotal the most relaxed
            luxury bay in Guanacaste. Perfect for buyers who want to understand the lifestyle before
            scheduling a visit.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-warmgray">
            <li>Curated dining and nightlife in Playas del Coco</li>
            <li>Private beaches, snorkeling spots, and boat charters</li>
            <li>Driving times, airport logistics, and local services</li>
          </ul>
        </div>
        <DownloadGate
          badge="PDF download"
          assetName="Ocotal Insider Guide"
          description="A location deep-dive with maps, dining, and lifestyle tips."
          downloadHref="/downloads/Arboreto-Ocotal-Guide.pdf"
        />
      </div>
    </div>
  );
}
