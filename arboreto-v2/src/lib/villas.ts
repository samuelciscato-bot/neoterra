export type Villa = {
  slug: string;
  name: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  status: "Available" | "Reserved" | "Sold";
  highlight: string;
  description: string;
  story: string;
  positioning: string;
  features: string[];
  specs: { label: string; value: string }[];
  seoBlocks: string[];
  microFaqs: { question: string; answer: string }[];
  gallery: string[];
};

export const villas: Villa[] = [
  {
    slug: "almendro",
    name: "Almendro",
    price: "$690,000",
    bedrooms: 3,
    bathrooms: 3,
    area: 280,
    status: "Available",
    highlight: "Shaded terrace and private pool",
    description:
      "A relaxed 3-bedroom residence with a shaded terrace and seamless indoor-outdoor flow.",
    story:
      "Almendro is named after the tropical almond tree, prized for its shade and coastal resilience. The villa mirrors that calm protection with layered terraces and deep overhangs.",
    positioning:
      "Ideal for buyers seeking a refined entry point into Arboreto with strong rental appeal and easy indoor-outdoor hosting.",
    features: [
      "Private pool",
      "Shaded terrace",
      "Open kitchen",
      "Bioclimatic orientation",
    ],
    specs: [
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "3" },
      { label: "Interior area", value: "280 sqm" },
      { label: "Lot size", value: "430 sqm" },
      { label: "Pool", value: "Private · 22 sqm" },
      { label: "Terrace", value: "48 sqm" },
      { label: "Parking", value: "2 vehicles" },
      { label: "Delivery", value: "2024-2025" },
    ],
    seoBlocks: [
      "Villa Almendro is a rare three-bedroom luxury villa for sale in Playa Ocotal, designed for effortless beach living. With a private pool, shaded terrace, and calm bioclimatic flow, it is a premium coastal residence within walking distance of the bay.",
      "As the most accessible villa in the Arboreto collection, Almendro delivers a balanced investment profile: boutique scarcity, private amenities, and strong short-term rental potential in Guanacaste.",
    ],
    microFaqs: [
      {
        question: "Is Villa Almendro fully walkable to Playa Ocotal?",
        answer:
          "Yes. The villa sits about 200 meters from the shoreline, allowing a true walk-to-beach lifestyle.",
      },
      {
        question: "Can Almendro be customized?",
        answer:
          "Select finish packages and lighting options are available within the construction timeline.",
      },
      {
        question: "Is this villa suited for rental income?",
        answer:
          "Yes. The 3-bedroom format with private pool is one of the most in-demand rental configurations in Guanacaste.",
      },
    ],
    gallery: [
      "/images/ALMENDRO1-ae8390d.png",
      "/images/Enscape_2025-03-05-15-13-43_FRENTE.png",
      "/images/Enscape_2025-03-03-16-34-39_LIVING1.png",
    ],
  },
  {
    slug: "jacaranda",
    name: "Jacaranda",
    price: "$740,000",
    bedrooms: 4,
    bathrooms: 4,
    area: 300,
    status: "Available",
    highlight: "Flexible guest suite and dual living zones",
    description:
      "A 4-bedroom villa built for hosting with dual living zones and guest flexibility.",
    story:
      "Jacaranda blooms in vivid lavender during Guanacaste's dry season. The villa borrows that sense of openness with dual living zones and a generous entertaining core.",
    positioning:
      "Best suited for multigenerational families or investors prioritizing occupancy with a flexible guest wing.",
    features: [
      "Private pool",
      "Dual living zones",
      "Guest suite",
      "Cross-ventilation",
    ],
    specs: [
      { label: "Bedrooms", value: "4" },
      { label: "Bathrooms", value: "4" },
      { label: "Interior area", value: "300 sqm" },
      { label: "Lot size", value: "460 sqm" },
      { label: "Pool", value: "Private · 25 sqm" },
      { label: "Terrace", value: "56 sqm" },
      { label: "Parking", value: "2 vehicles" },
      { label: "Delivery", value: "2024-2025" },
    ],
    seoBlocks: [
      "Villa Jacaranda is a four-bedroom luxury villa in Playa Ocotal, crafted for generous hosting. Dual living zones, private pool, and cross-ventilation deliver a premium yet relaxed coastal rhythm.",
      "With a guest-suite layout and premium finishes, Jacaranda appeals to buyers seeking strong rental revenue and high-end family use in Costa Rica's most established beach corridor.",
    ],
    microFaqs: [
      {
        question: "What makes Jacaranda ideal for hosting?",
        answer:
          "The villa features dual living zones and a flexible guest suite, allowing privacy without sacrificing connection.",
      },
      {
        question: "Is the guest wing separate?",
        answer:
          "Yes, the guest wing is subtly separated to allow independent stays or short-term rentals.",
      },
      {
        question: "Does Jacaranda include premium upgrades?",
        answer:
          "Yes, this villa includes upgraded fixtures and expanded outdoor lounge areas.",
      },
    ],
    gallery: [
      "/images/Jacaranda-45.jpg",
      "/images/Enscape_2025-03-04-12-37-27_SALA.png",
      "/images/Enscape_2025-03-27-11-50-04_TERRAZA.png",
    ],
  },
  {
    slug: "caoba",
    name: "Caoba",
    price: "$740,000",
    bedrooms: 3,
    bathrooms: 3,
    area: 285,
    status: "Available",
    highlight: "Open-plan kitchen and social terrace",
    description:
      "A social layout with an open-plan kitchen and outdoor dining terrace.",
    story:
      "Caoba is Costa Rica's revered mahogany. The villa channels that craftsmanship through a refined open-plan kitchen and a terrace tailored for long dinners.",
    positioning:
      "Designed for buyers who love entertaining and want a culinary-forward home base minutes from Ocotal.",
    features: [
      "Private pool",
      "Outdoor dining",
      "Open kitchen",
      "Sunset terrace",
    ],
    specs: [
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "3" },
      { label: "Interior area", value: "285 sqm" },
      { label: "Lot size", value: "440 sqm" },
      { label: "Pool", value: "Private · 23 sqm" },
      { label: "Terrace", value: "52 sqm" },
      { label: "Parking", value: "2 vehicles" },
      { label: "Delivery", value: "2024-2025" },
    ],
    seoBlocks: [
      "Villa Caoba is a luxury villa for sale in Playa Ocotal with an open-plan kitchen and expansive social terrace. It blends refined indoor living with effortless outdoor hosting, minutes from the bay.",
      "For investors, Caoba's social layout and private pool increase booking appeal and elevate nightly rates within Guanacaste's premium segment.",
    ],
    microFaqs: [
      {
        question: "Does Caoba emphasize indoor-outdoor living?",
        answer:
          "Yes. The kitchen, dining, and terrace connect seamlessly for an open coastal feel.",
      },
      {
        question: "Is the terrace shaded?",
        answer:
          "Yes, the terrace integrates deep overhangs for comfort in dry season heat.",
      },
      {
        question: "Who is Caoba best suited for?",
        answer:
          "Buyers who prioritize hosting, culinary experiences, and relaxed entertaining.",
      },
    ],
    gallery: [
      "/images/CAOBA-1524cf1.png",
      "/images/Enscape_2025-03-05-08-52-05_POSTERIOR-1.png",
      "/images/Enscape_2025-03-04-12-37-27_SALA.png",
    ],
  },
  {
    slug: "cenizaro",
    name: "Cenizaro",
    price: "$740,000",
    bedrooms: 4,
    bathrooms: 4,
    area: 295,
    status: "Reserved",
    highlight: "Private office and sunset terrace",
    description:
      "A 4-bedroom villa featuring a private office and golden-hour terrace views.",
    story:
      "Cenizaro, the beloved rain tree, stands for shelter and long afternoons. The villa introduces a dedicated office and a terrace tuned to golden-hour light.",
    positioning:
      "Tailored for remote-first owners who want a sophisticated work sanctuary with beach access.",
    features: [
      "Private pool",
      "Dedicated office",
      "Sunset terrace",
      "Guest suite",
    ],
    specs: [
      { label: "Bedrooms", value: "4" },
      { label: "Bathrooms", value: "4" },
      { label: "Interior area", value: "295 sqm" },
      { label: "Lot size", value: "455 sqm" },
      { label: "Pool", value: "Private · 24 sqm" },
      { label: "Terrace", value: "54 sqm" },
      { label: "Parking", value: "2 vehicles" },
      { label: "Delivery", value: "2024-2025" },
    ],
    seoBlocks: [
      "Villa Cenizaro is a four-bedroom luxury villa in Playa Ocotal with a dedicated office and a sunset-facing terrace. It is designed for owners blending work and coastal living.",
      "Cenizaro delivers boutique scarcity and remote-ready amenities, making it a standout for investors targeting high-end long-stay renters in Guanacaste.",
    ],
    microFaqs: [
      {
        question: "Does Cenizaro include a true home office?",
        answer:
          "Yes. A private office is integrated to support remote work and longer stays.",
      },
      {
        question: "Is Cenizaro suitable for long-stay rentals?",
        answer:
          "Absolutely. The layout and office space attract premium long-stay guests.",
      },
      {
        question: "Is Cenizaro still available?",
        answer:
          "The villa is currently reserved; please contact us for availability updates.",
      },
    ],
    gallery: [
      "/images/CENIZARO-a3e259b.png",
      "/images/Enscape_2025-03-03-16-34-39_LIVING1.png",
      "/images/Enscape_2025-03-27-11-50-04_TERRAZA.png",
    ],
  },
  {
    slug: "cocobolo",
    name: "Cocobolo",
    price: "$740,000",
    bedrooms: 3,
    bathrooms: 3.5,
    area: 290,
    status: "Available",
    highlight: "Spa-inspired primary suite",
    description:
      "A wellness-led villa with a spa-inspired primary suite and calm pool lounge.",
    story:
      "Cocobolo is famed for its rich grain and durability. The villa brings that depth through a spa-inspired primary suite and restorative outdoor lounge.",
    positioning:
      "Designed for wellness-minded owners and boutique investors who want elevated relaxation.",
    features: [
      "Private pool",
      "Spa suite",
      "Quiet wing",
      "Indoor-outdoor flow",
    ],
    specs: [
      { label: "Bedrooms", value: "3" },
      { label: "Bathrooms", value: "3.5" },
      { label: "Interior area", value: "290 sqm" },
      { label: "Lot size", value: "445 sqm" },
      { label: "Pool", value: "Private · 23 sqm" },
      { label: "Terrace", value: "50 sqm" },
      { label: "Parking", value: "2 vehicles" },
      { label: "Delivery", value: "2024-2025" },
    ],
    seoBlocks: [
      "Villa Cocobolo is a luxury villa in Playa Ocotal designed around wellness and privacy. A spa-inspired suite, quiet wing, and private pool create a sanctuary within the Arboreto collection.",
      "For buyers focused on premium guest experience, Cocobolo offers a distinctive wellness narrative that supports stronger nightly rates and longer stays.",
    ],
    microFaqs: [
      {
        question: "What makes Cocobolo wellness-focused?",
        answer:
          "The primary suite features spa-inspired finishes and direct pool access for restorative living.",
      },
      {
        question: "Is the layout private?",
        answer:
          "Yes. A quiet wing and secluded terrace keep the villa calm even during hosting.",
      },
      {
        question: "Does Cocobolo include a half bath?",
        answer:
          "Yes, it includes 3.5 bathrooms for added guest convenience.",
      },
    ],
    gallery: [
      "/images/COCOBOLO-027a78e.png",
      "/images/Enscape_2025-03-05-08-52-05_POSTERIOR-1.png",
      "/images/Enscape_2025-03-03-16-34-39_LIVING1.png",
    ],
  },
  {
    slug: "plumeria",
    name: "Plumeria",
    price: "$780,000",
    bedrooms: 4,
    bathrooms: 4,
    area: 300,
    status: "Available",
    highlight: "Signature upgrades and best view line",
    description:
      "The signature residence with premium upgrades and the best view line.",
    story:
      "Plumeria is known for its fragrance and layered petals. The villa is Arboreto's most elevated expression, pairing signature finishes with a privileged view corridor.",
    positioning:
      "The flagship choice for buyers seeking the most refined finish package and a standout view line.",
    features: [
      "Premium finishes",
      "Private pool",
      "Expanded terrace",
      "Signature upgrades",
    ],
    specs: [
      { label: "Bedrooms", value: "4" },
      { label: "Bathrooms", value: "4" },
      { label: "Interior area", value: "300 sqm" },
      { label: "Lot size", value: "470 sqm" },
      { label: "Pool", value: "Private · 25 sqm" },
      { label: "Terrace", value: "60 sqm" },
      { label: "Parking", value: "2 vehicles" },
      { label: "Delivery", value: "2024-2025" },
    ],
    seoBlocks: [
      "Villa Plumeria is the most exclusive luxury villa for sale in Playa Ocotal. It combines signature finishes, an expanded terrace, and a prime view line for an elevated coastal experience.",
      "As Arboreto's flagship, Plumeria is positioned for buyers who want the highest-spec villa in a six-home boutique collection.",
    ],
    microFaqs: [
      {
        question: "Is Plumeria the most upgraded villa?",
        answer:
          "Yes. It includes signature finishes and premium detailing throughout.",
      },
      {
        question: "Does Plumeria have the best view line?",
        answer:
          "Yes. Its positioning captures the most open view corridor in the collection.",
      },
      {
        question: "Is Plumeria ideal for investors?",
        answer:
          "Yes. Its flagship status supports premium nightly rates and resale positioning.",
      },
    ],
    gallery: [
      "/images/PLUMERIA.png",
      "/images/Enscape_2025-03-05-15-13-43_FRENTE.png",
      "/images/Enscape_2025-03-27-11-50-04_TERRAZA.png",
    ],
  },
];
