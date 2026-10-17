"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What products do you manufacture?",
      answer:
        "We manufacture six dedicated product categories: Draw Cords & Drawstrings (round, flat, with custom aglets/tipping), Plain Elastics (knitted & braided up to 15cm), Jacquard Elastics (custom woven up to 5.5cm), Needle Loom Twill Tapes (cotton, polyester & nylon), Printed & Woven Items (damask labels, satin care tags, ribbons, badges), and Corrugated Carton Boxes (3-ply, 5-ply & 7-ply export master cartons).",
    },
    {
      question: "What are your sample and bulk production lead times?",
      answer:
        "Sampling is extremely fast: Needle Loom/Twill Tape, Draw Cords, Jacquard Elastic, and Plain Elastic take 1 (One) Day for samples and 3 (Three) Days for bulk after approval. Carton box samples take 12 Hours. Printed & Woven Labels take 3 Days for samples and 7 Days for bulk.",
    },
    {
      question: "Do you offer custom tipping and aglets for draw cords?",
      answer:
        "Yes. We offer silicone-dipped tips, clear plastic heat-shrink aglets, custom embossed/engraved metal aglets, and folded tips in matte, gloss, or customized Pantone finishes.",
    },
    {
      question: "What materials and yarns do you use?",
      answer:
        "We weave with high-grade cotton, polyester, spun polyester, bright PP, and nylon yarns. For elastics, we utilize high-recovery natural rubber and spandex threads. For cartons, we utilize virgin and local kraft liner papers (125–170 GSM) with 3, 5, or 7-ply fluting.",
    },
    {
      question: "Can I request physical counter-samples before bulk order?",
      answer:
        "Yes. Send us your tech pack, physical swatch, or artwork. We produce physical counter-samples for lab dip and tensile approval within 24 hours.",
    },
    {
      question: "What widths and sizes can you manufacture for elastics and tapes?",
      answer:
        "Plain elastic bands can be manufactured up to 15 cm in width. Jacquard elastic waistband tapes can be woven up to 5.5 cm in width with custom jacquard typography and patterns. Twill tapes and draw cords are custom sized from 3mm to 50mm.",
    },
    {
      question: "How can I request a quote or submit artwork?",
      answer: (
        <>
          You can submit your tech pack via our{" "}
          <Link href="/contact" className="text-primary underline">
            Contact page
          </Link>{" "}
          or email us directly at{" "}
          <a href="mailto:info@sarkertrims.com" className="text-primary underline">
            info@sarkertrims.com
          </a>{" "}
          or WhatsApp us at +880 1302-250001. We review specifications and provide pricing within one working day.
        </>
      ),
    },
    {
      question: "Do you supply factories outside Dhaka?",
      answer:
        "Yes. We supply garment manufacturers, export factories, and buying houses across Dhaka, Gazipur, Narayanganj, Chattogram, and throughout Bangladesh.",
    },
    {
      question: "What quality checks are performed on finished goods?",
      answer:
        "Every batch is tested in-house for tensile strength, elongation recovery percentage, wash-fastness, Pantone color accuracy, and box bursting strength before packing and factory dispatch.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main>
      <section className="py-16 md:py-24 pt-16 md:pt-20 relative overflow-hidden bg-gradient-to-r from-amber-900/10 via-orange-800/10 to-yellow-700/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 md:space-y-6">
            <div className="eyebrow text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#b56b3d]">
              FAQ
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-primary">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
              Technical details regarding draw cords, plain and jacquard elastics, twill tapes, garment labels, and corrugated cartons manufactured by Sarker Trims.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded bg-white border border-gray-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between p-4 text-left transition-colors duration-200 hover:bg-gray-50 rounded-lg"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-neutral-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`size-5 text-gray-500 transition-transform duration-200 shrink-0 ml-2 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-4 pt-0 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
