import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu help for house Rampur, Uttar Pradesh | Vasterior",
  description:
    "Vastu help for house Rampur - Reliable Vastu help in Rampur to correct energy imbalances and create harmony in your home.",
  keywords:
    "Vastu solutions Rampur, House Vastu consultant Rampur, Vastu assistance Rampur",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-help-for-house-rampur",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-help-for-house-rampur",
    title: "Vastu help for house Rampur, Uttar Pradesh | Vasterior",
    description:
      "Vastu help for house Rampur - Reliable Vastu help in Rampur to correct energy imbalances and create harmony in your home.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu help for house Rampur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu help for house Rampur, Uttar Pradesh | Vasterior",
    description:
      "Vastu help for house Rampur - Reliable Vastu help in Rampur to correct energy imbalances and create harmony in your home.",
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
