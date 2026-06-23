import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu for Property Purchase Hyderabad | Vasterior",
  description:
    "Vastu for Property Purchase Hyderabad providing expert guidance before buying flats, villas or commercial properties.",
  keywords:
    "vastu for property purchase hyderabad, real estate vastu check hyderabad, property analysis",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-for-property-purchase-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-for-property-purchase-hyderabad",
    title: "Vastu for Property Purchase Hyderabad | Vasterior",
    description:
      "Vastu for Property Purchase Hyderabad providing expert guidance before buying flats, villas or commercial properties.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu for Property Purchase Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu for Property Purchase Hyderabad | Vasterior",
    description:
      "Vastu for Property Purchase Hyderabad providing expert guidance before buying flats, villas or commercial properties.",
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
