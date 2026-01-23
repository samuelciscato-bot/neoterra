"use client";

import { useMemo, useState } from "react";

export default function CalculatorPage() {
  const [nightlyRate, setNightlyRate] = useState(520);
  const [occupancy, setOccupancy] = useState(62);
  const [managementFee, setManagementFee] = useState(25);
  const [annualExpenses, setAnnualExpenses] = useState(18000);

  const projection = useMemo(() => {
    const gross = nightlyRate * 365 * (occupancy / 100);
    const management = gross * (managementFee / 100);
    const net = gross - management - annualExpenses;
    return { gross, management, net };
  }, [nightlyRate, occupancy, managementFee, annualExpenses]);

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-mono text-xs uppercase tracking-[0.4em] text-gold">ROI calculator</p>
      <h1 className="mt-4 text-display text-4xl md:text-5xl">
        Model your Arboreto investment.
      </h1>
      <p className="mt-4 text-warmgray">
        Adjust nightly rate, occupancy, and fees to understand projected annual performance.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-black/5 bg-white p-8 shadow-premium">
          <div className="space-y-6">
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-warmgray">
                Nightly rate (${nightlyRate})
              </label>
              <input
                type="range"
                min={350}
                max={750}
                value={nightlyRate}
                onChange={(event) => setNightlyRate(Number(event.target.value))}
                className="mt-3 w-full"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-warmgray">
                Occupancy ({occupancy}%)
              </label>
              <input
                type="range"
                min={40}
                max={85}
                value={occupancy}
                onChange={(event) => setOccupancy(Number(event.target.value))}
                className="mt-3 w-full"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-warmgray">
                Management fee ({managementFee}%)
              </label>
              <input
                type="range"
                min={15}
                max={35}
                value={managementFee}
                onChange={(event) => setManagementFee(Number(event.target.value))}
                className="mt-3 w-full"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.3em] text-warmgray">
                Annual expenses (${annualExpenses})
              </label>
              <input
                type="range"
                min={12000}
                max={30000}
                step={1000}
                value={annualExpenses}
                onChange={(event) => setAnnualExpenses(Number(event.target.value))}
                className="mt-3 w-full"
              />
            </div>
          </div>
        </div>
        <div className="rounded-[32px] border border-black/5 bg-white p-8 shadow-premium">
          <p className="text-xs uppercase tracking-[0.3em] text-warmgray">Projection</p>
          <div className="mt-6 space-y-4 text-sm text-warmgray">
            <div className="flex items-center justify-between">
              <span>Annual gross revenue</span>
              <span className="text-mono text-gold">${projection.gross.toFixed(0)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Management fees</span>
              <span className="text-mono text-gold">-${projection.management.toFixed(0)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Estimated annual expenses</span>
              <span className="text-mono text-gold">-${annualExpenses}</span>
            </div>
            <div className="border-t border-black/10 pt-4">
              <div className="flex items-center justify-between text-charcoal">
                <span>Estimated net revenue</span>
                <span className="text-mono text-lg text-gold">${projection.net.toFixed(0)}</span>
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm text-warmgray">
            These numbers are illustrative only. Schedule a call for a tailored projection.
          </p>
          <button type="button" className="btn-primary mt-6 text-xs">
            Discuss with the team
          </button>
        </div>
      </div>
    </div>
  );
}
