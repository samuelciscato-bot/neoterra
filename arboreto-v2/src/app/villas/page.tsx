import Image from "next/image";
import Link from "next/link";
import { villas } from "@/lib/villas";

export default function VillasPage() {
  return (
    <div className="bg-sand">
      <section className="relative overflow-hidden bg-offwhite py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-mono text-xs uppercase tracking-[0.4em] text-gold">The collection</p>
          <h1 className="mt-4 text-display text-4xl md:text-5xl">
            Six residences, each named after Costa Rica's precious hardwoods.
          </h1>
          <p className="mt-4 max-w-2xl text-warmgray">
            Arboreto is a boutique release of only six villas. Each one blends coastal architecture,
            private pools, and refined interior palettes built for high-end living and premium
            rental demand.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {villas.map((villa) => (
            <Link
              key={villa.slug}
              href={`/villas/${villa.slug}`}
              className="group rounded-[32px] border border-black/5 bg-white p-6 shadow-premium transition hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={villa.gallery[0]}
                  alt={`Villa ${villa.name}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex items-center justify-between">
                <h2 className="text-display text-3xl">{villa.name}</h2>
                <span className="text-mono text-sm text-gold">{villa.price}</span>
              </div>
              <p className="mt-2 text-warmgray">{villa.description}</p>
              <div className="mt-4 flex flex-wrap gap-4 text-xs uppercase tracking-[0.25em] text-warmgray">
                <span>{villa.bedrooms} beds</span>
                <span>{villa.area} sqm</span>
                <span>{villa.status}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-offwhite py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-display text-3xl md:text-4xl">Quick comparison</h2>
          <div className="mt-6 overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-premium">
            <table className="w-full text-left text-sm">
              <thead className="bg-sand text-xs uppercase tracking-[0.25em] text-warmgray">
                <tr>
                  <th className="px-6 py-4">Villa</th>
                  <th className="px-6 py-4">Beds</th>
                  <th className="px-6 py-4">Area</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {villas.map((villa) => (
                  <tr key={villa.slug} className="border-t border-black/5">
                    <td className="px-6 py-4 text-charcoal">{villa.name}</td>
                    <td className="px-6 py-4 text-warmgray">{villa.bedrooms}</td>
                    <td className="px-6 py-4 text-warmgray">{villa.area} sqm</td>
                    <td className="px-6 py-4 text-mono text-gold">{villa.price}</td>
                    <td className="px-6 py-4 text-warmgray">{villa.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
