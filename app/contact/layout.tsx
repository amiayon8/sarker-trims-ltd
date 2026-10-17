import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us & Sample Requests | Sarker Trims Dhaka",
  description:
    "Contact Sarker Trims for 1-day trims sampling, tech pack reviews, pricing quotations, and factory visits. Located at 30/31 Purana Mugoltuli, Dhaka 1100, Bangladesh.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Sarker Trims | Garment Trims & Packaging Supplier Dhaka",
    description:
      "Get in touch with Sarker Trims for rapid counter-samples, bulk production orders, and trims inquiries. Fast response within one working day.",
    url: "https://www.sarkertrims.com/contact",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Sarker Trims Ltd.",
  url: "https://www.sarkertrims.com/contact",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Sarker Trims Ltd.",
    telephone: "+8801302250001",
    email: "info@sarkertrims.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "30/31 Purana Mugoltuli",
      addressLocality: "Dhaka",
      postalCode: "1100",
      addressCountry: "BD",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+8801302250001",
      contactType: "customer service",
      areaServed: "BD",
      availableLanguage: ["English", "Bengali"],
    },
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  );
}
