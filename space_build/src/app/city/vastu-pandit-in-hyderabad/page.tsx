import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Pandit in Hyderabad | Vasterior",
  description:
    "Vastu Pandit in Hyderabad offering authentic Vastu consultation, property analysis and effective remedies for positive energy.",
  keywords:
    "vastu pandit hyderabad, vastu consultation hyderabad, vastu remedies hyderabad",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-pandit-in-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-pandit-in-hyderabad",
    title: "Vastu Pandit in Hyderabad | Vasterior",
    description:
      "Vastu Pandit in Hyderabad offering authentic Vastu consultation, property analysis and effective remedies for positive energy.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu Pandit in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Pandit in Hyderabad | Vasterior",
    description:
      "Vastu Pandit in Hyderabad offering authentic Vastu consultation, property analysis and effective remedies for positive energy.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuModularKitchenDesignerCRPark() {
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