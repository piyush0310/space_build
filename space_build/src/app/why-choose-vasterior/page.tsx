import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Why Choose Vasterior | Expert Interior Design & Comprehensive Design Services",
  description:
    "Discover why clients trust Vasterior for their design needs. Personalized approach, expert guidance, quality precision, and comprehensive services from concept to completion.",
  keywords:
    "why choose Vasterior, best interior designer, luxury interior design company, comprehensive design services, Aparna interior designer, personalized design approach, quality interior design",
  alternates: {
    canonical: "https://www.vasterior.com/why-choose-vasterior",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/why-choose-vasterior",
    title: "Why Choose Vasterior | Expert Interior Design & Comprehensive Design Services",
    description:
      "Discover why clients trust Vasterior for their design needs. Personalized approach, expert guidance, quality precision, and comprehensive services from concept to completion.",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Why Choose Vasterior - Excellence in Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Why Choose Vasterior | Expert Interior Design & Comprehensive Design Services",
    description:
      "Discover why clients trust Vasterior for their design needs. Personalized approach, expert guidance, quality precision, and comprehensive services from concept to completion.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function whychoose() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      <Content />
    </div>
  );
}
