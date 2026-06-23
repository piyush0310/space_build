import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu for house design Rampur, Uttar Pradesh | Vasterior",
  description:
    "Vastu for house design Rampur - Vasterior provides Vastu guidance for house design in Rampur to ensure harmony and proper energy flow.",
  keywords:
    "House design Vastu Rampur, Vastu for homes Rampur, Vastu planning Rampur",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-for-house-design-rampur",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-for-house-design-rampur",
    title: "Vastu for house design Rampur, Uttar Pradesh | Vasterior",
    description:
      "Vastu for house design Rampur - Vasterior provides Vastu guidance for house design in Rampur to ensure harmony and proper energy flow.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu for house design Rampur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu for house design Rampur, Uttar Pradesh | Vasterior",
    description:
      "Vastu for house design Rampur - Vasterior provides Vastu guidance for house design in Rampur to ensure harmony and proper energy flow.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function BestVastuConsultantRampur() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      <Banner />
      <Content />
      <Services />
      <Portfolio />
      <Blog />
      <Testimonials />
    </div>
  );
}
