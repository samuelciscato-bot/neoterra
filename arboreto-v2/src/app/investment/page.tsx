import Link from "next/link";

export default function InvestmentPage() {
  return (
    <div className="bg-sand">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-mono text-xs uppercase tracking-[0.4em] text-gold">Investment</p>
        <h1 className="mt-4 text-display text-4xl md:text-5xl">
          Boutique developments outperform in Guanacaste.
        </h1>
        <p className="mt-4 max-w-2xl text-warmgray">
          Arboreto is a six-villa collection positioned for premium nightly rates and limited
          internal competition. The investment thesis blends scarcity, walk-to-beach location, and
          private pool amenities.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-premium">
            <p className="text-mono text-xs uppercase tracking-[0.3em] text-gold">Scarcity</p>
            <h2 className="mt-3 text-display text-2xl">Only six villas</h2>
            <p className="mt-3 text-sm text-warmgray">
              High-end rentals perform best when supply stays limited. Arboreto keeps competition
              low by design.
            </p>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-premium">
            <p className="text-mono text-xs uppercase tracking-[0.3em] text-gold">Premium rates</p>
            <h2 className="mt-3 text-display text-2xl">Private pool advantage</h2>
            <p className="mt-3 text-sm text-warmgray">
              Villas with private pools command 40-60% higher rates and attract repeat luxury guests.
            </p>
          </div>
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-premium">
            <p className="text-mono text-xs uppercase tracking-[0.3em] text-gold">Walk-to-beach</p>
            <h2 className="mt-3 text-display text-2xl">Rare in Ocotal</h2>
            <p className="mt-3 text-sm text-warmgray">
              200 meters to the bay delivers lifestyle appeal and ensures consistent rental demand.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/investment/calculator" className="btn-primary text-xs">
            Try the ROI calculator
          </Link>
          <Link href="/investor-brief" className="btn-secondary text-xs">
            Get the investor brief
          </Link>
        </div>
      </section>

      <section className="bg-offwhite py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-display text-3xl">Buyer process</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              "Consultation and villa matching",
              "Site visit or private virtual tour",
              "Reservation agreement and due diligence",
              "Closing and construction updates",
              "Handover and rental setup",
              "Post-delivery support",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-black/5 bg-white p-6 text-sm text-warmgray"
              >
                <p className="text-mono text-xs text-gold">Step {index + 1}</p>
                <p className="mt-3 text-charcoal">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
