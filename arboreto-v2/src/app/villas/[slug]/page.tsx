import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { villas } from "@/lib/villas";

export const generateStaticParams = async () => villas.map((villa) => ({ slug: villa.slug }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const villa = villas.find((item) => item.slug === params.slug);
  if (!villa) return {};
  return {
    title: `Villa ${villa.name} | Luxury Villa in Playa Ocotal | Arboreto`,
    description: `${villa.description} Walk to Playa Ocotal beach. ${villa.price}.`,
  };
};

export default function VillaDetailPage({ params }: { params: { slug: string } }) {
  const villa = villas.find((item) => item.slug === params.slug);
  if (!villa) return notFound();

  return (
    <div className="bg-sand">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[36px] shadow-premium">
            <Image
              src={villa.gallery[0]}
              alt={`Villa ${villa.name}`}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-mono text-xs uppercase tracking-[0.4em] text-gold">Villa {villa.name}</p>
            <h1 className="mt-4 text-display text-4xl md:text-5xl">{villa.highlight}</h1>
            <p className="mt-4 text-warmgray">{villa.description}</p>
            <div className="mt-6 grid gap-3 text-sm text-warmgray">
              <div className="flex items-center justify-between">
                <span>Price</span>
                <span className="text-mono text-gold">{villa.price}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Bedrooms</span>
                <span>{villa.bedrooms}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Bathrooms</span>
                <span>{villa.bathrooms}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Interior area</span>
                <span>{villa.area} sqm</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Status</span>
                <span>{villa.status}</span>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/quiz" className="btn-primary text-xs">
                Take the fit quiz
              </Link>
              <Link href="/contact" className="btn-secondary text-xs">
                Schedule a tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-display text-3xl">Gallery</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {villa.gallery.map((image) => (
              <div key={image} className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image src={image} alt="Villa interior" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-mono text-xs uppercase tracking-[0.4em] text-gold">Story</p>
            <h2 className="mt-4 text-display text-3xl">{villa.story}</h2>
            <p className="mt-4 text-warmgray">{villa.positioning}</p>
            <ul className="mt-6 grid gap-3 text-sm text-warmgray md:grid-cols-2">
              {villa.features.map((feature) => (
                <li key={feature} className="rounded-2xl border border-black/5 bg-white px-4 py-3">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[32px] border border-black/5 bg-white p-8 shadow-premium">
            <h3 className="text-display text-2xl">Specifications</h3>
            <div className="mt-6 space-y-3 text-sm text-warmgray">
              {villa.specs.map((spec) => (
                <div key={spec.label} className="flex items-center justify-between">
                  <span>{spec.label}</span>
                  <span className="text-charcoal">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-display text-3xl">Villa intelligence</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {villa.seoBlocks.map((block) => (
              <p key={block} className="rounded-3xl border border-black/5 bg-white p-6 text-sm text-warmgray">
                {block}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-display text-3xl">Micro-FAQ</h2>
            <div className="mt-6 space-y-4">
              {villa.microFaqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-black/5 bg-white p-6 text-sm"
                >
                  <p className="text-charcoal">{faq.question}</p>
                  <p className="mt-2 text-warmgray">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] border border-black/5 bg-white p-8 shadow-premium">
            <p className="text-mono text-xs uppercase tracking-[0.4em] text-gold">Next step</p>
            <h3 className="mt-4 text-display text-2xl">Request the full brochure</h3>
            <p className="mt-3 text-warmgray">
              Floor plans, finish packages, and investment projections tailored to Villa {villa.name}.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/quiz" className="btn-primary text-xs">
                Start the fit quiz
              </Link>
              <Link href="/contact" className="btn-secondary text-xs">
                Speak with the team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
