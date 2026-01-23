import Image from "next/image";

const team = [
  {
    name: "Julien Marchand",
    role: "Founder, Neoterra Development",
    bio: "Led boutique coastal developments across Guanacaste with a focus on design-led investment performance.",
  },
  {
    name: "Camila Ortiz",
    role: "Project Director",
    bio: "Coordinates architecture, construction, and local stakeholder relationships on-site in Ocotal.",
  },
  {
    name: "Amelia Scott",
    role: "Investor Relations",
    bio: "Guides international buyers through acquisition, legal structure, and rental strategy.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-sand">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-mono text-xs uppercase tracking-[0.4em] text-gold">Who we are</p>
        <h1 className="mt-4 text-display text-4xl md:text-5xl">Meet Neoterra.</h1>
        <p className="mt-4 max-w-2xl text-warmgray">
          Neoterra develops boutique coastal residences for discerning global buyers. We focus on
          scarcity, deliverability, and a hospitality-driven experience from first inquiry to final
          handover.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[36px] shadow-premium">
            <Image
              src="/images/Enscape_2025-03-03-16-34-39_LIVING1.png"
              alt="Interior render"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            {team.map((member) => (
              <div key={member.name} className="rounded-3xl border border-black/5 bg-white p-6">
                <h2 className="text-display text-2xl">{member.name}</h2>
                <p className="text-sm text-gold">{member.role}</p>
                <p className="mt-3 text-sm text-warmgray">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-offwhite py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-display text-3xl">Our approach</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Quality over scale",
                text: "We only build boutique releases where every residence can stay exceptional.",
              },
              {
                title: "Owner-first design",
                text: "Layouts are tuned for living, hosting, and high-end rental performance.",
              },
              {
                title: "Local stewardship",
                text: "Construction, legal, and aftercare teams are on-site in Guanacaste.",
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
    </div>
  );
}
