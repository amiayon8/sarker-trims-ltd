import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Lead Times & Capabilities | Sarker Trims",
  description:
    "Find answers regarding 1-day sampling, 3-day bulk lead times, custom draw cord aglets, elastic widths, yarn specifications, and carton box manufacturing at Sarker Trims Dhaka.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | Sarker Trims Garment Trims & Packaging Bangladesh",
    description:
      "Frequently asked questions on sampling lead times, custom aglets, elastic specifications, and order placement for garment trims and packaging in Dhaka.",
    url: "https://www.sarkertrims.com/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What products do you manufacture?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We manufacture six dedicated product categories: Draw Cords & Drawstrings (round, flat, with custom aglets/tipping), Plain Elastics (knitted & braided up to 15cm), Jacquard Elastics (custom woven up to 5.5cm), Needle Loom Twill Tapes (cotton, polyester & nylon), Printed & Woven Items (damask labels, satin care tags, ribbons, badges), and Corrugated Carton Boxes (3-ply, 5-ply & 7-ply export master cartons).",
      },
    },
    {
      "@type": "Question",
      name: "What are your sample and bulk production lead times?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sampling is extremely fast: Needle Loom/Twill Tape, Draw Cords, Jacquard Elastic, and Plain Elastic take 1 (One) Day for samples and 3 (Three) Days for bulk after approval. Carton box samples take 12 Hours. Printed & Woven Labels take 3 Days for samples and 7 Days for bulk.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer custom tipping and aglets for draw cords?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer silicone-dipped tips, clear plastic heat-shrink aglets, custom embossed/engraved metal aglets, and folded tips in matte, gloss, or customized Pantone finishes.",
      },
    },
    {
      "@type": "Question",
      name: "What materials and yarns do you use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We weave with high-grade cotton, polyester, spun polyester, bright PP, and nylon yarns. For elastics, we utilize high-recovery natural rubber and spandex threads. For cartons, we utilize virgin and local kraft liner papers (125–170 GSM) with 3, 5, or 7-ply fluting.",
      },
    },
    {
      "@type": "Question",
      name: "Can I request physical counter-samples before bulk order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Send us your tech pack, physical swatch, or artwork. We produce physical counter-samples for lab dip and tensile approval within 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "What widths and sizes can you manufacture for elastics and tapes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plain elastic bands can be manufactured up to 15 cm in width. Jacquard elastic waistband tapes can be woven up to 5.5 cm in width with custom jacquard typography and patterns. Twill tapes and draw cords are custom sized from 3mm to 50mm.",
      },
    },
    {
      "@type": "Question",
      name: "How can I request a quote or submit artwork?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can submit your tech pack via our Contact page or email us directly at info@sarkertrims.com or WhatsApp us at +880 1302-250001. We review specifications and provide pricing within one working day.",
      },
    },
    {
      "@type": "Question",
      name: "Do you supply factories outside Dhaka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We supply garment manufacturers, export factories, and buying houses across Dhaka, Gazipur, Narayanganj, Chattogram, and throughout Bangladesh.",
      },
    },
  ],
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
