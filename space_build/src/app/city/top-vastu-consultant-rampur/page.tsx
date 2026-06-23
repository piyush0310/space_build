import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Top Vastu consultant Rampur, Uttar Pradesh | Vasterior",
  description:
    "Top Vastu consultant Rampur - Leading Vastu consultant in Rampur offering expert guidance, remedies, and home energy solutions.",
  keywords:
    "Best Vastu expert Rampur, Leading Vastu consultant Rampur, Vastu services Rampur",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/top-vastu-consultant-rampur",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/top-vastu-consultant-rampur",
    title: "Top Vastu consultant Rampur, Uttar Pradesh | Vasterior",
    description:
      "Top Vastu consultant Rampur - Leading Vastu consultant in Rampur offering expert guidance, remedies, and home energy solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Top Vastu consultant Rampur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Top Vastu consultant Rampur, Uttar Pradesh | Vasterior",
    description:
      "Top Vastu consultant Rampur - Leading Vastu consultant in Rampur offering expert guidance, remedies, and home energy solutions.",
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
