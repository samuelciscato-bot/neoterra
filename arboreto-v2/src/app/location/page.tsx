import Image from "next/image";
import Link from "next/link";

export default function LocationPage() {
  return (
    <div className="bg-sand">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-mono text-xs uppercase tracking-[0.4em] text-gold">Playa Ocotal</p>
        <h1 className="mt-4 text-display text-4xl md:text-5xl">
          The calm bay the mega-resorts overlooked.
        </h1>
        <p className="mt-4 max-w-2xl text-warmgray">
          Ocotal delivers swimmable waters, a protected coastline, and immediate access to the
          dining and marina life of Playas del Coco — without the crowds.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[36px] shadow-premium">
            <Image
              src="/images/Ocotal.jpg"
              alt="Playa Ocotal bay"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid gap-6">
            <div className="relative aspect-[3/2] overflow-hidden rounded-[32px] shadow-premium">
              <Image
                src="/images/Enscape_2025-03-05-08-52-05_POSTERIOR-1.png"
                alt="Arboreto exterior view"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-[32px] shadow-premium">
              <Image
                src="/images/Enscape_2025-03-27-11-50-04_TERRAZA.png"
                alt="Terrace sunset view"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-display text-3xl">Why Ocotal</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "The beach",
                text: "Protected bay, calm water, and snorkeling at your doorstep.",
              },
              {
                title: "Convenience",
                text: "25 minutes to Liberia International Airport and 8 minutes to dining.",
              },
              {
                title: "Lifestyle",
                text: "Marina access, golf, and day trips to volcanoes and national parks.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-black/5 bg-white p-6">
                <h3 className="text-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm text-warmgray">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-display text-3xl">Getting here</h2>
            <ul className="mt-4 space-y-3 text-sm text-warmgray">
              <li>Direct flights to LIR from major US and Canadian hubs.</li>
              <li>Private transfer or rental car to Ocotal in 25 minutes.</li>
              <li>Daily services, medical facilities, and marinas within 10 minutes.</li>
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-charcoal"
            >
              Plan a visit →
            </Link>
          </div>
          <div className="rounded-[32px] border border-black/5 bg-white p-8 shadow-premium">
            <p className="text-xs uppercase tracking-[0.35em] text-warmgray">Climate</p>
            <div className="mt-4 space-y-4 text-sm text-warmgray">
              <div className="flex items-center justify-between">
                <span>Dry season</span>
                <span>Dec – Apr</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Green season</span>
                <span>May – Nov</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Avg. temperature</span>
                <span>26–30°C</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
