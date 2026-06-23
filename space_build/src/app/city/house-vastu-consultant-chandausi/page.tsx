import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "House Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
  description:
    "House Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Accurate Vastu solutions for houses, villas, and independent homes.",
  keywords:
    "house vastu consultant chandausi, vastu for house chandausi, vastu home solutions chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/house-vastu-consultant-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/house-vastu-consultant-chandausi",
    title: "House Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description:
      "House Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Accurate Vastu solutions for houses, villas, and independent homes.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "House Vastu Consultant Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "House Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description:
      "House Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Accurate Vastu solutions for houses, villas, and independent homes.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function HouseVastuConsultantChandausi() {
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
