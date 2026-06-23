import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu home consultant Rampur , Uttar Pradesh | Vasterior",
  description:
    "Vastu home consultant Rampur - Personalized home-focused Vastu consultation in Rampur to enhance energy balance and harmony.",
  keywords:
    "Home Vastu expert Rampur, Vastu guidance for home Rampur, Residential Vastu consultant Rampur",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-home-consultant-rampur",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-home-consultant-rampur",
    title: "Vastu home consultant Rampur , Uttar Pradesh | Vasterior",
    description:
      "Vastu home consultant Rampur - Personalized home-focused Vastu consultation in Rampur to enhance energy balance and harmony.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu home consultant Rampur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu home consultant Rampur , Uttar Pradesh | Vasterior",
    description:
      "Vastu home consultant Rampur - Personalized home-focused Vastu consultation in Rampur to enhance energy balance and harmony.",
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
