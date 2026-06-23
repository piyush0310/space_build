import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu expert near me Rampur , Uttar Pradesh | Vasterior",
  description:
    "Vastu expert near me Rampur - Local Vasterior Vastu expert delivering precise remedies and professional home consultation in Rampur.",
  keywords:
    "Local Vastu expert Rampur, Vastu advisor nearby Rampur, Vastu consultancy near me Rampur",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-expert-near-me-rampur",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-expert-near-me-rampur",
    title: "Vastu expert near me Rampur , Uttar Pradesh | Vasterior",
    description:
      "Vastu expert near me Rampur - Local Vasterior Vastu expert delivering precise remedies and professional home consultation in Rampur.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu expert near me Rampur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu expert near me Rampur , Uttar Pradesh | Vasterior",
    description:
      "Vastu expert near me Rampur - Local Vasterior Vastu expert delivering precise remedies and professional home consultation in Rampur.",
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
