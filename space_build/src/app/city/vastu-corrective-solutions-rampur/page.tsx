import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu corrective solutions Rampur, Uttar Pradesh | Vasterior",
  description:
    "Vastu corrective solutions Rampur - Effective Vastu corrective solutions in Rampur to enhance positivity, balance, and growth at home.",
  keywords:
    "Vastu remedies Rampur, Home Vastu correction Rampur, Vastu fixes Rampur",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-corrective-solutions-rampur",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-corrective-solutions-rampur",
    title: "Vastu corrective solutions Rampur, Uttar Pradesh | Vasterior",
    description:
      "Vastu corrective solutions Rampur - Effective Vastu corrective solutions in Rampur to enhance positivity, balance, and growth at home.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu corrective solutions Rampur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu corrective solutions Rampur, Uttar Pradesh | Vasterior",
    description:
      "Vastu corrective solutions Rampur - Effective Vastu corrective solutions in Rampur to enhance positivity, balance, and growth at home.",
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
