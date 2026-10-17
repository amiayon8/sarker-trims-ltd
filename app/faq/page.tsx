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
        "We manufacture garment trims and accessories including leather and PU belts, woven and fabric belts, patches, badges, zipper pullers, buttons, fasteners, suspenders, cross belts and custom branding hardware. All products can be customized to your specification.",
    },
    {
      question: "Do you offer custom manufacturing?",
      answer:
        "Yes. Custom manufacturing is our specialty. Send artwork, a reference sample or a tech pack and we develop material, dimensions, colour, branding, hardware and finishing around your requirements.",
    },
    {
      question: "Can I order in small or large quantities?",
      answer:
        "We cater to both sample orders and large bulk production. Minimum order quantities may vary depending on the product type and level of customization.",
    },
    {
      question: "What materials do you use?",
      answer:
        "We use genuine leather, PU leather, cotton webbing, polyester, metal hardware, wood and eco-friendly alternatives — chosen to meet international standards for durability and appearance.",
    },
    {
      question: "How long does production take?",
      answer:
        "Standard orders are usually completed within 2–4 weeks. Lead time depends on order size and customization complexity. Urgent requests can be discussed for faster turnaround.",
    },
    {
      question: "Do you ship outside Bangladesh?",
      answer:
        "Yes. We work with garment factories and buyers in Bangladesh, and can arrange global shipping through trusted logistics partners.",
    },
    {
      question: "How can I place an order or request a quote?",
      answer: (
        <>
          Visit our{" "}
          <Link href="/contact" className="text-primary underline">
            Contact page
          </Link>{" "}
          or email{" "}
          <a href="mailto:info@sarkertrims.com" className="text-primary underline">
            info@sarkertrims.com
          </a>{" "}
          with your product details, quantity and any custom specifications. Our
          team will reply with construction options and pricing within one
          working day.
        </>
      ),
    },
    {
      question: "Can I see samples before placing a bulk order?",
      answer:
        "Yes, we develop physical samples for approval before bulk production begins. Sample costs and shipping charges may apply depending on the product.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept bank transfers and other secure payment methods commonly used in international trade. Payment terms are discussed during the order process.",
    },
    {
      question: "Do you guarantee product quality?",
      answer:
        "Every lot is checked against the approved sample specification and measurements before packing and dispatch. Quality control is built into every stage of our production workflow.",
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
              Answers about custom garment trims manufacturing, materials, lead
              times, export shipping and how to request a sample or quote from
              Sarker Trims.
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
