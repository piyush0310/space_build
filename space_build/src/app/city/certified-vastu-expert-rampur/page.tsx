import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Certified Vastu expert Rampur, Uttar Pradesh | Vasterior",
  description:
    "Certified Vastu expert Rampur - Certified Vasterior Vastu expert providing proven remedies and home guidance for balanced living.",
  keywords:
    "Certified Vastu consultant Rampur, Accredited Vastu expert Rampur, Professional Vastu services Rampur",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/certified-vastu-expert-rampur",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/certified-vastu-expert-rampur",
    title: "Certified Vastu expert Rampur, Uttar Pradesh | Vasterior",
    description:
      "Certified Vastu expert Rampur - Certified Vasterior Vastu expert providing proven remedies and home guidance for balanced living.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Certified Vastu expert Rampur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Certified Vastu expert Rampur, Uttar Pradesh | Vasterior",
    description:
      "Certified Vastu expert Rampur - Certified Vasterior Vastu expert providing proven remedies and home guidance for balanced living.",
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
