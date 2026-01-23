import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    title: "Morning swims",
    text: "Protected bay water makes sunrise swims a daily ritual.",
  },
  {
    title: "Boutique dining",
    text: "Playas del Coco offers chef-led restaurants and marina bars minutes away.",
  },
  {
    title: "Outdoor adventures",
    text: "Catamaran trips, diving, and day trips to Rincon de la Vieja.",
  },
];

export default function LifestylePage() {
  return (
    <div className="bg-sand">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-mono text-xs uppercase tracking-[0.4em] text-gold">Lifestyle</p>
        <h1 className="mt-4 text-display text-4xl md:text-5xl">Daily life at Arboreto.</h1>
        <p className="mt-4 max-w-2xl text-warmgray">
          Ocotal is relaxed, refined, and walkable. Arboreto owners balance slow mornings, active
          afternoons, and sunset evenings on a calm bay.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[36px] shadow-premium">
            <Image
              src="/images/Enscape_2025-03-27-11-50-04_TERRAZA.png"
              alt="Villa terrace"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid gap-6">
            {highlights.map((highlight) => (
              <div key={highlight.title} className="rounded-3xl border border-black/5 bg-white p-6">
                <h2 className="text-display text-2xl">{highlight.title}</h2>
                <p className="mt-3 text-sm text-warmgray">{highlight.text}</p>
              </div>
            ))}
            <Link href="/ocotal-guide" className="btn-primary text-xs">
              Download the Ocotal guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
