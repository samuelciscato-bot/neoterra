import Image from "next/image";
import Link from "next/link";
import { villas } from "@/lib/villas";

const profileCopy: Record<string, { title: string; description: string }> = {
  Lifestyle: {
    title: "You want a sanctuary, not a resort.",
    description:
      "Your answers point to lifestyle-first living with boutique privacy and walkable beach access.",
  },
  Investment: {
    title: "You value scarcity and cash flow.",
    description:
      "You are focused on nightly-rate performance, scarcity-driven pricing, and long-term value.",
  },
  Retirement: {
    title: "Your next chapter deserves calm.",
    description:
      "You want low-density living, comfort, and a community that feels like home year-round.",
  },
  "Remote work": {
    title: "You need a base that works as hard as you do.",
    description:
      "You prioritize calm, privacy, and spaces that support remote productivity.",
  },
};

export default function QuizResultsPage({
  searchParams,
}: {
  searchParams: { profile?: string; villa?: string };
}) {
  const profile = searchParams.profile ?? "Lifestyle";
  const villa = villas.find((item) => item.slug === searchParams.villa) ?? villas[0];
  const copy = profileCopy[profile] ?? profileCopy.Lifestyle;

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-mono text-xs uppercase tracking-[0.4em] text-gold">Your fit</p>
      <h1 className="mt-4 text-display text-3xl md:text-4xl">{copy.title}</h1>
      <p className="mt-3 text-warmgray">{copy.description}</p>

      <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-black/5 bg-white p-8 shadow-premium">
          <p className="text-xs uppercase tracking-[0.3em] text-warmgray">Recommended villa</p>
          <h2 className="mt-4 text-display text-3xl">Villa {villa.name}</h2>
          <p className="mt-3 text-warmgray">{villa.highlight}</p>
          <div className="mt-6 grid gap-4 text-sm text-warmgray">
            <div className="flex items-center justify-between">
              <span>Price</span>
              <span className="text-mono text-gold">{villa.price}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Bedrooms</span>
              <span>{villa.bedrooms}</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Area</span>
              <span>{villa.area} sqm</span>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href={`/villas/${villa.slug}`} className="btn-primary text-xs">
              Explore this villa
            </Link>
            <Link href="/brochure" className="btn-secondary text-xs">
              Unlock the brochure
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-premium">
          <Image
            src={villa.gallery[0]}
            alt={`Villa ${villa.name} exterior`}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
