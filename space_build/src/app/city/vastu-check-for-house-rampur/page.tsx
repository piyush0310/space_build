import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu check for house Rampur, Uttar Pradesh | Vasterior",
  description:
    "Vastu check for house Rampur - Professional Vastu house check in Rampur with detailed remedies and personalized guidance for balanced living.",
  keywords:
    "Home Vastu evaluation Rampur, Vastu inspection Rampur, Vastu analysis Rampur",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-check-for-house-rampur",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-check-for-house-rampur",
    title: "Vastu check for house Rampur, Uttar Pradesh | Vasterior",
    description:
      "Vastu check for house Rampur - Professional Vastu house check in Rampur with detailed remedies and personalized guidance for balanced living.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu check for house Rampur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu check for house Rampur, Uttar Pradesh | Vasterior",
    description:
      "Vastu check for house Rampur - Professional Vastu house check in Rampur with detailed remedies and personalized guidance for balanced living.",
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
