import type { Metadata } from "next";
import Content from "./Content";

export const metadata: Metadata = {
  title: "Why Choose Space Build | Expert Interior Design & Comprehensive Design Services",
  description:
    "Discover why clients trust Space Build for their design needs. Personalized approach, expert guidance, quality precision, and comprehensive services from concept to completion.",
  keywords:
    "why choose Space Build, best interior designer, luxury interior design company, comprehensive design services, Aparna interior designer, personalized design approach, quality interior design",
  alternates: {
    canonical: "https://www.Space Build.com/why-choose-Space Build",
  },
  openGraph: {
    type: "website",
    url: "https://www.Space Build.com/why-choose-Space Build",
    title: "Why Choose Space Build | Expert Interior Design & Comprehensive Design Services",
    description:
      "Discover why clients trust Space Build for their design needs. Personalized approach, expert guidance, quality precision, and comprehensive services from concept to completion.",
    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space Buildlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt: "Why Choose Space Build - Excellence in Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Space Build",
    title: "Why Choose Space Build | Expert Interior Design & Comprehensive Design Services",
    description:
      "Discover why clients trust Space Build for their design needs. Personalized approach, expert guidance, quality precision, and comprehensive services from concept to completion.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space Buildlogo_bmzk0r.png"],
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
