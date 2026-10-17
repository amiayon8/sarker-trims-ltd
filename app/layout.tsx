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
  title: "Garment Trims Manufacturer in Bangladesh | Belts, Patches & Pullers | Sarker Trims",
  description:
    "Sarker Trims manufactures custom garment belts, patches, badges, zipper pullers, tags and buttons in Dhaka. Sample-to-bulk production for factories and brands. Request a sample.",
  keywords: [
    "garment trims manufacturer",
    "garment trims manufacturer Bangladesh",
    "garment accessories manufacturer",
    "custom garment trims",
    "garment belt manufacturer",
    "leather belt manufacturer",
    "PU belt manufacturer Bangladesh",
    "zipper puller manufacturer",
    "clothing patches manufacturer",
    "garment badges manufacturer",
    "custom buttons for garments",
    "Bangladesh garment trims",
  ],
  icons: {
    icon: "/icon.ico",
  },
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
