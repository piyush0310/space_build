import type { Metadata } from "next";
import Testimonials from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Space Build – Client Testimonials | Trusted Interior Design Experts",
  description:
    "Discover what our clients say about Space Build. Read authentic testimonials and reviews from satisfied homeowners and businesses who trusted us to bring their interior dreams to life.",
  keywords:
    "Space Build testimonials, client reviews, interior design feedback, Space Build customer experiences, home interior reviews, commercial interior reviews, trusted interior designers, best interior design company, Space Build clients",

  // ✅ Canonical
  alternates: {
    canonical: "https://www.Space Build.com/testimonials",
  },

  openGraph: {
    type: "website",
    url: "https://www.Space Build.com/testimonials",
    title: "Space Build – Client Testimonials | Trusted Interior Design Experts",
    description:
      "Discover what our clients say about Space Build. Read authentic testimonials and reviews from satisfied homeowners and businesses who trusted us to bring their interior dreams to life.",
    images: [
      {
        url: "https://res.cloudinary.com/df1v3yied/image/upload/v1762974529/Space Build-testimonials-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build Client Testimonials – Interior Design Reviews",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@Space Build",
    title: "Space Build – Client Testimonials | Trusted Interior Design Experts",
    description:
      "See what clients say about working with Space Build – trusted for innovative interiors and quality craftsmanship.",
    images: ["https://res.cloudinary.com/df1v3yied/image/upload/v1762974529/Space Build-testimonials-banner.jpg"],
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
