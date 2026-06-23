import type { Metadata } from "next";
import Faqcontent from "./Faqcontent";

export const metadata: Metadata = {
  title: "Vasterior – FAQ | Interior Design & Consultancy Questions Answered",
  description:
    "Find answers to frequently asked questions about Vasterior’s services – interior design, vastu consultation, smart homes, wedding designing, PMC, and more. Learn about pricing, consultations, and project timelines.",
  keywords:
    "Vasterior FAQ, interior design FAQ, vastu consultation questions, smart home solutions FAQ, wedding designing FAQ, project management consultancy FAQ, interior styling FAQ, spatial planning FAQ, furniture sourcing FAQ, online interior consultation",

  // ✅ Canonical
  alternates: {
    canonical: "https://www.vasterior.com/faq",
  },

  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/faq",
    title: "Vasterior – FAQ | Interior Design & Consultancy Questions Answered",
    description:
      "Get clear answers about Vasterior’s services – from interior design, vastu consultation, styling, smart homes to PMC services. Explore pricing, timelines, and online consultation options.",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Vasterior FAQ – Interior Design & Consultancy Questions Answered",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vasterior – FAQ | Interior Design & Consultancy Questions Answered",
    description:
      "Frequently asked questions about Vasterior’s interior design, vastu, styling, PMC, wedding design, and smart home solutions – all answered in one place.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function faqPage() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      <Faqcontent />
    </div>
  );
}
