const faqs = [
  {
    question: "Is Arboreto walkable to Playa Ocotal?",
    answer:
      "Yes. The villas sit about 200 meters from the bay, making beach access fully walkable.",
  },
  {
    question: "Can foreigners own property in Costa Rica?",
    answer:
      "Yes. Foreign buyers have the same ownership rights as locals, with optional corporate structures.",
  },
  {
    question: "What is included in the purchase price?",
    answer:
      "The price includes the villa, private pool, landscaping, and core finish packages. Custom upgrades are available.",
  },
  {
    question: "What is the construction timeline?",
    answer:
      "Deliveries are scheduled for 2024–2025, with stage-based updates shared during construction.",
  },
  {
    question: "Can I rent the villa when I am away?",
    answer:
      "Yes. Arboreto is designed for premium short-term rental performance with concierge-ready layouts.",
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <p className="text-mono text-xs uppercase tracking-[0.4em] text-gold">FAQ</p>
      <h1 className="mt-4 text-display text-4xl md:text-5xl">Questions serious buyers ask.</h1>
      <div className="mt-10 space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="rounded-3xl border border-black/5 bg-white p-6 text-sm text-warmgray"
          >
            <summary className="cursor-pointer text-charcoal">{faq.question}</summary>
            <p className="mt-3 text-warmgray">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
