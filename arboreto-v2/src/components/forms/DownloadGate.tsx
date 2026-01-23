"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

type DownloadGateProps = {
  assetName: string;
  description: string;
  downloadHref: string;
  badge?: string;
};

export default function DownloadGate({
  assetName,
  description,
  downloadHref,
  badge,
}: DownloadGateProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    trackEvent("download_gate_submitted", { asset: assetName });
  };

  return (
    <div className="rounded-[32px] border border-black/5 bg-white p-8 shadow-premium">
      {badge && (
        <p className="text-mono text-xs uppercase tracking-[0.35em] text-gold">{badge}</p>
      )}
      <h1 className="mt-4 text-display text-3xl">{assetName}</h1>
      <p className="mt-3 text-warmgray">{description}</p>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <div>
            <label className="text-xs uppercase tracking-[0.25em] text-warmgray">Full name</label>
            <input
              required
              type="text"
              className="mt-2 w-full rounded-2xl border border-black/10 bg-offwhite px-4 py-3 text-sm"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.25em] text-warmgray">Email</label>
            <input
              required
              type="email"
              className="mt-2 w-full rounded-2xl border border-black/10 bg-offwhite px-4 py-3 text-sm"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.25em] text-warmgray">
              Primary interest
            </label>
            <select
              className="mt-2 w-full rounded-2xl border border-black/10 bg-offwhite px-4 py-3 text-sm"
              defaultValue="Lifestyle"
            >
              <option>Lifestyle</option>
              <option>Investment</option>
              <option>Retirement</option>
              <option>Relocation</option>
            </select>
          </div>
          <button type="submit" className="btn-primary mt-2 text-xs">
            Unlock the download
          </button>
        </form>
      ) : (
        <div className="mt-6 rounded-3xl border border-gold/30 bg-gold/10 p-6">
          <p className="text-sm text-charcoal">
            Thank you. Your download is ready and a copy will be sent to your inbox.
          </p>
          <a
            href={downloadHref}
            download
            onClick={() => trackEvent("download_asset", { asset: assetName })}
            className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-charcoal"
          >
            Download now →
          </a>
        </div>
      )}
    </div>
  );
}
