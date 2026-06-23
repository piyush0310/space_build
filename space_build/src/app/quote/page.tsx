import type { Metadata } from "next";
import Content from "./Content";

// ✅ Metadata for Quote Form Page
export const metadata: Metadata = {
  title: "Vasterior – Request a Quote | Bespoke Interior Design Consultation",
  description:
    "Get a personalized quote for your dream residential or commercial interior design project with Vasterior. Discover tailored solutions that blend luxury, elegance, and functionality.",
  keywords:
    "Vasterior quote form, interior design estimate, request quote interior design, luxury interior consultation, bespoke design cost, residential interiors quote, commercial interiors pricing, interior design services request",

  alternates: {
    canonical: "https://www.vasterior.com/quote",
  },

  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/quote",
    title: "Vasterior – Request a Quote | Bespoke Interior Design Consultation",
    description:
      "Get a personalized quote for your dream residential or commercial interior design project with Vasterior. Discover tailored solutions that blend luxury, elegance, and functionality.",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Vasterior – Request a Quote | Bespoke Interior Design Consultation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vasterior – Request a Quote | Bespoke Interior Design Consultation",
    description:
      "Get a personalized quote for your dream residential or commercial interior design project with Vasterior. Discover tailored solutions that blend luxury, elegance, and functionality.",
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
