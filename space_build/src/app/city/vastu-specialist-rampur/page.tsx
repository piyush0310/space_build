import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu specialist Rampur, Uttar Pradesh | Vasterior",
  description:
    "Vastu specialist Rampur - Experienced Vastu specialist offering home guidance and remedies to enhance positivity and balance.",
  keywords:
    "Vastu expert Rampur, Vastu advisor Rampur, Vastu guidance Rampur",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-specialist-rampur",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-specialist-rampur",
    title: "Vastu specialist Rampur, Uttar Pradesh | Vasterior",
    description:
      "Vastu specialist Rampur - Experienced Vastu specialist offering home guidance and remedies to enhance positivity and balance.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu specialist Rampur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu specialist Rampur, Uttar Pradesh | Vasterior",
    description:
      "Vastu specialist Rampur - Experienced Vastu specialist offering home guidance and remedies to enhance positivity and balance.",
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
