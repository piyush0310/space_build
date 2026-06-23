import type { Metadata } from "next";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Vasterior – Client Testimonials | Trusted Interior Design Experts",
  description:
    "Discover what our clients say about Vasterior. Read authentic testimonials and reviews from satisfied homeowners and businesses who trusted us to bring their interior dreams to life.",
  keywords:
    "Vasterior testimonials, client reviews, interior design feedback, Vasterior customer experiences, home interior reviews, commercial interior reviews, trusted interior designers, best interior design company, Vasterior clients",

  // ✅ Canonical
  alternates: {
    canonical: "https://www.vasterior.com/testimonials",
  },

  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/testimonials",
    title: "Vasterior – Client Testimonials | Trusted Interior Design Experts",
    description:
      "Discover what our clients say about Vasterior. Read authentic testimonials and reviews from satisfied homeowners and businesses who trusted us to bring their interior dreams to life.",
    images: [
      {
        url: "https://res.cloudinary.com/df1v3yied/image/upload/v1762974529/vasterior-testimonials-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Vasterior Client Testimonials – Interior Design Reviews",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vasterior – Client Testimonials | Trusted Interior Design Experts",
    description:
      "See what clients say about working with Vasterior – trusted for innovative interiors and quality craftsmanship.",
    images: ["https://res.cloudinary.com/df1v3yied/image/upload/v1762974529/vasterior-testimonials-banner.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      <Testimonials />
    </div>
  );
}
