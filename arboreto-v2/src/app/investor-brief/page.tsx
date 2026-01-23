import DownloadGate from "@/components/forms/DownloadGate";

export default function InvestorBriefPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-mono text-xs uppercase tracking-[0.4em] text-gold">Investor access</p>
          <h2 className="mt-4 text-display text-3xl md:text-4xl">
            Boutique scarcity, quantified.
          </h2>
          <p className="mt-4 text-warmgray">
            The Investor Brief packages the market data, rental demand logic, and delivery timeline
            behind Arboreto. It is the fastest way to understand the pricing logic and investor
            protections in Playa Ocotal.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-warmgray">
            <li>Comparative rental benchmarks for Guanacaste</li>
            <li>Supply scarcity vs. large resort developments</li>
            <li>Projected holding strategy and resale positioning</li>
          </ul>
        </div>
        <DownloadGate
          badge="PDF download"
          assetName="Arboreto Investor Brief"
          description="Everything a serious investor needs before scheduling a private tour."
          downloadHref="/downloads/Arboreto-Investor-Brief.pdf"
        />
      </div>
    </div>
  );
}
