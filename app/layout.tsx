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

export const metadata: Metadata = {
  title:
    "Sarker Trims Bangladesh | Draw Cords, Elastics, Twill Tapes & Carton Boxes",
  description:
    "Sarker Trims manufactures apparel draw cords, plain and jacquard elastics, needle loom twill tapes, printed & woven labels, and corrugated export carton boxes in Dhaka, Bangladesh. Fast 1-day sampling.",
  keywords: [
    "garment trims manufacturer",
    "draw cord manufacturer Bangladesh",
    "drawstring manufacturer",
    "elastic tape manufacturer",
    "jacquard elastic Bangladesh",
    "twill tape manufacturer",
    "needle loom tape",
    "woven labels Bangladesh",
    "printed care labels",
    "corrugated carton manufacturer",
    "garment export packaging",
    "Sarker Trims",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} overflow-x-hidden`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
