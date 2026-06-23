import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu advice for home Rampur, Uttar Pradesh | Vasterior",
  description:
    "Vastu advice for home Rampur - Get personalized Vastu advice for your home in Rampur with expert solutions from Vasterior.",
  keywords:
    "Home Vastu guidance Rampur, Vastu tips Rampur, Residential Vastu expert Rampur",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-advice-for-home-rampur",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-advice-for-home-rampur",
    title: "Vastu advice for home Rampur, Uttar Pradesh | Vasterior",
    description:
      "Vastu advice for home Rampur - Get personalized Vastu advice for your home in Rampur with expert solutions from Vasterior.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu advice for home Rampur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu advice for home Rampur, Uttar Pradesh | Vasterior",
    description:
      "Vastu advice for home Rampur - Get personalized Vastu advice for your home in Rampur with expert solutions from Vasterior.",
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
