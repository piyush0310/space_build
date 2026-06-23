import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu remedies consultant Rampur, Uttar Pradesh | Vasterior",
  description:
    "Vastu remedies consultant Rampur - Expert Vastu remedies consultation in Rampur to correct energy flow and improve home harmony.",
  keywords:
    "Vastu correction expert Rampur, Vastu solutions Rampur, Home Vastu remedies Rampur",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-remedies-consultant-rampur",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-remedies-consultant-rampur",
    title: "Vastu remedies consultant Rampur, Uttar Pradesh | Vasterior",
    description:
      "Vastu remedies consultant Rampur - Expert Vastu remedies consultation in Rampur to correct energy flow and improve home harmony.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu remedies consultant Rampur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu remedies consultant Rampur, Uttar Pradesh | Vasterior",
    description:
      "Vastu remedies consultant Rampur - Expert Vastu remedies consultation in Rampur to correct energy flow and improve home harmony.",
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
