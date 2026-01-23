"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { villas } from "@/lib/villas";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  whileInView: { transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <div className="bg-sand text-charcoal">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/2024-03-27_DSCF4637.jpg"
            alt="Aerial view of Playa Ocotal and Arboreto Beach Houses"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-hero-gradient" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-6 py-24 text-offwhite">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: [0.7, 1, 0.7], y: 0 }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-ocean/60 px-4 py-2 text-xs uppercase tracking-[0.35em] text-gold"
          >
            Now selling · Only 2 villas remaining
          </motion.span>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06 } },
            }}
            className="mt-6 max-w-3xl text-display text-6xl font-semibold leading-tight text-offwhite md:text-7xl"
          >
            {"Six private beach houses for buyers who want the rarest Costa Rica address."
              .split(" ")
              .map((word) => (
                <motion.span
                  key={word}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
          </motion.h1>
          <p className="mt-6 max-w-2xl text-lg text-offwhite/80">
            Walk 200 meters to Playa Ocotal. Own a sanctuary, not a resort condo — and join a
            boutique collection designed for discretion, calm, and investment-grade scarcity.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/villas" className="btn-primary text-xs">
              Discover the villas
            </Link>
            <Link href="/quiz" className="btn-secondary text-xs">
              Take the fit quiz
            </Link>
          </div>
          <div className="mt-12 grid gap-6 border-t border-offwhite/15 pt-8 text-sm text-offwhite/75 md:grid-cols-4">
            <div>
              <p className="text-mono text-xl text-offwhite">6</p>
              <p>Boutique residences</p>
            </div>
            <div>
              <p className="text-mono text-xl text-offwhite">200m</p>
              <p>Walk to the bay</p>
            </div>
            <div>
              <p className="text-mono text-xl text-offwhite">Private</p>
              <p>Pool for every villa</p>
            </div>
            <div>
              <p className="text-mono text-xl text-offwhite">2024–25</p>
              <p>New construction delivery</p>
            </div>
          </div>
        </div>
      </section>

      <motion.section {...fadeInUp} className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-mono text-xs uppercase tracking-[0.4em] text-gold">
              Fit-first funnel
            </p>
            <h2 className="mt-4 text-display text-3xl md:text-4xl">
              Before the brochure, qualify the fit.
            </h2>
            <p className="mt-4 text-warmgray">
              The Arboreto fit quiz takes two minutes and matches you to the most aligned villa.
              We collect the right signals before you download the brochure, so your follow-up is
              tailored from the first touch.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/quiz" className="btn-primary text-xs">
                Start the quiz
              </Link>
            </div>
          </div>
          <div className="glass-panel rounded-3xl p-8 shadow-premium">
            <p className="text-xs uppercase tracking-[0.35em] text-warmgray">Quiz preview</p>
            <div className="mt-6 space-y-5 text-sm">
              <div>
                <p className="text-charcoal">Primary reason for Costa Rica?</p>
                <p className="text-warmgray">Lifestyle · Investment · Retirement · Remote work</p>
              </div>
              <div>
                <p className="text-charcoal">Timeline?</p>
                <p className="text-warmgray">Now · 6 months · 12 months · Exploring</p>
              </div>
              <div>
                <p className="text-charcoal">Priority?</p>
                <p className="text-warmgray">Beach access · Privacy · ROI · Community</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="bg-offwhite py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-mono text-xs uppercase tracking-[0.4em] text-gold">
                Six residences
              </p>
              <h2 className="mt-4 text-display text-3xl md:text-4xl">Six stories, one address.</h2>
            </div>
            <Link
              href="/villas"
              className="text-xs font-semibold uppercase tracking-[0.3em] text-charcoal"
            >
              Explore the collection →
            </Link>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-10 grid gap-8 md:grid-cols-3"
          >
            {villas.map((villa) => (
              <motion.div
                variants={staggerItem}
                key={villa.slug}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-black/5 bg-white p-5 shadow-premium"
              >
                <Link href={`/villas/${villa.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={villa.gallery[0]}
                      alt={`Render of Villa ${villa.name}`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
                    <span
                      className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] text-white ${
                        villa.status === "Available"
                          ? "bg-forest"
                          : villa.status === "Reserved"
                          ? "bg-gold text-ocean"
                          : "bg-warmgray"
                      }`}
                    >
                      {villa.status}
                    </span>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <h3 className="text-display text-2xl">{villa.name}</h3>
                    <span className="text-mono text-sm text-gold">{villa.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-warmgray">{villa.highlight}</p>
                  <div className="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-warmgray">
                    <span>{villa.bedrooms} beds</span>
                    <span className="h-1 w-1 rounded-full bg-warmgray/40" />
                    <span>{villa.area} sqm</span>
                    <span className="h-1 w-1 rounded-full bg-warmgray/40" />
                    <span>Private pool</span>
                  </div>
                  <span className="mt-4 inline-flex text-xs uppercase tracking-[0.3em] text-gold opacity-0 transition group-hover:opacity-100">
                    View villa →
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-mono text-xs uppercase tracking-[0.4em] text-gold">
              Playa Ocotal
            </p>
            <h2 className="mt-4 text-display text-3xl md:text-4xl">
              The calm bay the mega-resorts overlooked.
            </h2>
            <p className="mt-4 text-warmgray">
              A protected crescent bay, swimmable year-round, and minutes from Liberia airport.
              Arboreto is positioned for low-density, walk-to-beach living with the best dining and
              marina options nearby.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-warmgray">
              <li>25 minutes to Liberia International Airport (LIR)</li>
              <li>8 minutes to Playas del Coco dining & marina</li>
              <li>Snorkeling-ready protected waters</li>
              <li>Low-density setting with boutique privacy</li>
            </ul>
            <Link
              href="/location"
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-charcoal"
            >
              Explore the location →
            </Link>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-[36px] shadow-premium">
            <Image
              src="/images/Ocotal.jpg"
              alt="Playa Ocotal coastline"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="bg-ocean py-20 text-offwhite">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-mono text-xs uppercase tracking-[0.4em] text-gold">
                Investment case
              </p>
              <h2 className="mt-4 text-display text-3xl md:text-4xl">
                Boutique scarcity drives premium returns.
              </h2>
              <p className="mt-4 text-offwhite/70">
                Large developments dilute rates. Arboreto keeps supply tight, elevates amenities,
                and positions each villa for premium nightly revenue.
              </p>
              <div className="mt-8 grid gap-6 text-sm md:grid-cols-3">
                <div>
                  <p className="text-mono text-xl">$520+</p>
                  <p className="text-offwhite/70">Projected premium nightly rates</p>
                </div>
                <div>
                  <p className="text-mono text-xl">60–70%</p>
                  <p className="text-offwhite/70">Targeted occupancy for high season</p>
                </div>
                <div>
                  <p className="text-mono text-xl">6</p>
                  <p className="text-offwhite/70">Total villas, no internal competition</p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/investment" className="btn-primary text-xs">
                  See the investment case
                </Link>
                <Link href="/investment/calculator" className="btn-secondary text-xs">
                  ROI calculator
                </Link>
              </div>
            </div>
            <div className="rounded-[32px] border border-offwhite/10 bg-pacific/60 p-8">
              <p className="text-xs uppercase tracking-[0.35em] text-offwhite/60">Investor brief</p>
              <h3 className="mt-4 text-display text-2xl">Download the Investor Brief</h3>
              <p className="mt-3 text-sm text-offwhite/70">
                Market data, pricing logic, and the boutique development thesis — packaged for
                serious buyers.
              </p>
              <Link
                href="/investor-brief"
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold"
              >
                Request the brief →
              </Link>
              <div className="mt-8 border-t border-offwhite/10 pt-6">
                <p className="text-xs uppercase tracking-[0.35em] text-offwhite/60">Ocotal guide</p>
                <h4 className="mt-3 text-display text-xl">Get the Ocotal Insider Guide</h4>
                <p className="mt-2 text-sm text-offwhite/70">
                  Beaches, dining, marinas, and the insider map to Guanacaste living.
                </p>
                <Link
                  href="/ocotal-guide"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-gold"
                >
                  Download the guide →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[36px] shadow-premium">
            <Image
              src="/images/Enscape_2025-03-05-15-13-43_FRENTE.png"
              alt="Arboreto villa exterior"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-mono text-xs uppercase tracking-[0.4em] text-gold">Built by Neoterra</p>
            <h2 className="mt-4 text-display text-3xl md:text-4xl">The team behind the sanctuary.</h2>
            <p className="mt-4 text-warmgray">
              Neoterra combines local development expertise with a hospitality-first mindset. Our
              team is on-site in Guanacaste, coordinating architecture, permitting, and long-term
              stewardship.
            </p>
            <div className="mt-6 grid gap-6 text-sm text-warmgray md:grid-cols-2">
              <div>
                <p className="text-charcoal">Development & Vision</p>
                <p>12+ years delivering boutique coastal communities.</p>
              </div>
              <div>
                <p className="text-charcoal">Construction Oversight</p>
                <p>Licensed local partners with transparent timelines.</p>
              </div>
              <div>
                <p className="text-charcoal">Investor Care</p>
                <p>Dedicated concierge for inspections and rentals.</p>
              </div>
              <div>
                <p className="text-charcoal">Legal Protection</p>
                <p>Escrow structure and bilingual legal guidance.</p>
              </div>
            </div>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-charcoal"
            >
              Meet the team →
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section {...fadeInUp} className="bg-offwhite py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-[40px] bg-ocean px-10 py-16 text-center text-offwhite shadow-premium">
            <p className="text-mono text-xs uppercase tracking-[0.4em] text-gold">Next step</p>
            <h2 className="mt-4 text-display text-3xl md:text-4xl">Ready to explore further?</h2>
            <p className="mt-4 text-offwhite/70">
              Get the full brochure, floor plans, and investment projection. Or schedule a private
              tour with our team in Costa Rica.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/quiz" className="btn-primary text-xs">
                Take the fit quiz
              </Link>
              <Link href="/contact" className="btn-secondary text-xs">
                Schedule a private tour
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
