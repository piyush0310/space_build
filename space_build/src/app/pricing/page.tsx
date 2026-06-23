import type { Metadata } from "next";
import Content from "./Content";

// ✅ Metadata for Quote Form Page
export const metadata: Metadata = {
  title: "MahaVastu Pricing Plans | Vasterior Consultation Packages",
  description:
    "Explore MahaVastu consultation pricing plans by Vasterior. Choose from Starter to Platinum packages for home, office & factory transformation.",
  keywords:
    "mahavastu pricing, vastu consultation cost, vastu packages india, mahavastu plans, vastu consultant fees, vastu pricing plans, vastu for home cost",

  alternates: {
    canonical: "https://www.vasterior.com/pricing",
  },

  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/pricing",
    title: "MahaVastu Pricing Plans | Vasterior Consultation Packages",
    description:
      "Explore MahaVastu consultation pricing plans by Vasterior. Choose from Starter to Platinum packages for home, office & factory transformation.",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "MahaVastu – Pricing Plans | Bespoke Interior Design Consultation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "MahaVastu – Pricing Plans | Bespoke Interior Design Consultation",
    description:
      "Explore MahaVastu consultation pricing plans by Vasterior. Choose from Starter to Platinum packages for home, office & factory transformation.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      <Content />
    </div>
  );
}
