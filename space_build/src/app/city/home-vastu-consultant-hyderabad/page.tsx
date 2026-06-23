import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Home Vastu Consultant Hyderabad | Vasterior",
  description:
    "Home Vastu Consultant Hyderabad offering expert analysis and remedies to create balance, prosperity and peace at home.",
  keywords:
    "home vastu consultant hyderabad, house vastu services hyderabad, residential vastu expert",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/home-vastu-consultant-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/home-vastu-consultant-hyderabad",
    title: "Home Vastu Consultant Hyderabad | Vasterior",
    description:
      "Home Vastu Consultant Hyderabad offering expert analysis and remedies to create balance, prosperity and peace at home.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Home Vastu Consultant Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Home Vastu Consultant Hyderabad | Vasterior",
    description:
      "Home Vastu Consultant Hyderabad offering expert analysis and remedies to create balance, prosperity and peace at home.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function BestInteriorDesignerMoradabad() {
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
