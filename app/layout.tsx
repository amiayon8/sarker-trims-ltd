import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://www.sarkertrims.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Sarker Trims | Draw Cords, Elastics, Twill Tapes & Carton Boxes Bangladesh",
    template: "%s | Sarker Trims Bangladesh",
  },
  description:
    "Sarker Trims is a premier B2B manufacturer in Dhaka, Bangladesh producing custom draw cords, plain and jacquard elastics, needle loom twill tapes, woven labels, and corrugated export carton boxes with 1-day sampling and 3-day bulk production.",
  keywords: [
    "garment trims manufacturer",
    "draw cord manufacturer Bangladesh",
    "custom drawstring supplier",
    "elastic tape manufacturer",
    "jacquard elastic Bangladesh",
    "twill tape manufacturer",
    "herringbone tape Dhaka",
    "needle loom tape supplier",
    "woven labels Bangladesh",
    "printed care labels",
    "corrugated carton manufacturer",
    "garment export packaging",
    "apparel accessories Dhaka",
    "Sarker Trims Ltd",
    "Tareq Chowdhury Sarker Trims",
  ],
  authors: [
    { name: "Tareq Chowdhury", url: `${siteUrl}/about` },
    { name: "Sarker Trims Ltd.", url: siteUrl },
  ],
  creator: "Sarker Trims Ltd.",
  publisher: "Sarker Trims Ltd.",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Sarker Trims | Garment Trims, Narrow Fabrics & Export Packaging Manufacturer",
    description:
      "High-spec draw cords, plain & jacquard elastics, twill tapes, garment brand labels, and corrugated export carton boxes in Dhaka, Bangladesh. Fast 1-day sampling.",
    url: siteUrl,
    siteName: "Sarker Trims",
    images: [
      {
        url: "/images/sarkertrims_factory_floor.jpg",
        width: 1200,
        height: 630,
        alt: "Sarker Trims Production Facility Floor in Dhaka, Bangladesh",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarker Trims | Garment Trims & Packaging Manufacturer",
    description:
      "Apparel draw cords, plain & jacquard elastics, twill tapes, woven labels, and export master cartons. Fast 1-day sampling in Dhaka, Bangladesh.",
    images: ["/images/sarkertrims_factory_floor.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Manufacturing",
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "Manufacturer"],
      "@id": `${siteUrl}/#organization`,
      name: "Sarker Trims Ltd.",
      alternateName: ["Sarker Trims", "Sarker Trims Bangladesh"],
      legalName: "Sarker Trims Ltd.",
      url: siteUrl,
      logo: `${siteUrl}/media/logo.png`,
      image: `${siteUrl}/images/sarkertrims_factory_floor.jpg`,
      description:
        "Industrial manufacturer of apparel draw cords, plain & jacquard elastics, needle loom twill tapes, printed and woven items, and corrugated export carton boxes based in Dhaka, Bangladesh.",
      telephone: "+8801302250001",
      email: "info@sarkertrims.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "30/31 Purana Mugoltuli",
        addressLocality: "Dhaka",
        addressRegion: "Dhaka Division",
        postalCode: "1100",
        addressCountry: "BD",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 23.7145,
        longitude: 90.4042,
      },
      foundingDate: "2015",
      founder: {
        "@type": "Person",
        name: "Golam Kibria Chowdhury",
      },
      employee: {
        "@type": "Person",
        name: "Tareq Chowdhury",
        jobTitle: "Managing Director",
      },
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        minValue: 25,
      },
      areaServed: [
        {
          "@type": "Country",
          name: "Bangladesh",
        },
        {
          "@type": "AdministrativeArea",
          name: "Worldwide",
        },
      ],
      priceRange: "$$",
      currenciesAccepted: "BDT, USD, EUR",
      paymentAccepted: "Bank Transfer, L/C, Cash",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Saturday",
            "Sunday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      knowsAbout: [
        "Garment Trims Manufacturing",
        "Narrow Fabrics Weaving",
        "Draw Cords and Custom Aglets",
        "Knitted and Braided Plain Elastics",
        "Jacquard Woven Waistband Elastics",
        "Needle Loom Twill Tapes",
        "Woven Damask Brand Labels",
        "Satin Care Labels",
        "Corrugated Export Shipping Master Cartons",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Sarker Trims Manufacturing Categories",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Draw Cords & Drawstrings",
              description:
                "Round and flat braided cords with custom silicone, metal, or clear heat-shrink aglets for hoodies, activewear, and outerwear.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Plain Elastic Bands",
              description:
                "Knitted, woven, and braided elastic tapes up to 150mm wide with controlled elongation and high wash-durability.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Jacquard Elastic",
              description:
                "Computerized jacquard woven elastic bands up to 55mm wide with custom high-definition brand lettering and relief patterns.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Needle Loom Twill Tape",
              description:
                "Cotton, polyester, and nylon twill tapes in plain and herringbone chevron weaves for neck binding and seam reinforcement.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Printed & Woven Items",
              description:
                "High-density damask woven labels, satin heat-seal tags, taffeta care labels, and custom apparel badges.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Product",
              name: "Corrugated Export Carton Boxes",
              description:
                "3-ply, 5-ply, and 7-ply corrugated shipping master cartons meeting international ECT and burst strength standards.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Sarker Trims",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className={`${inter.variable} overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
