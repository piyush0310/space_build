import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Independent House Vastu Consultant Hyderabad | Vasterior",
  description:
    "Independent House Vastu Consultant Hyderabad offering complete property analysis and practical Vastu correction solutions.",
  keywords:
    "independent house vastu consultant hyderabad, house planning vastu hyderabad, home vastu correction",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/independent-house-vastu-consultant-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/independent-house-vastu-consultant-hyderabad",
    title: "Independent House Vastu Consultant Hyderabad | Vasterior",
    description:
      "Independent House Vastu Consultant Hyderabad offering complete property analysis and practical Vastu correction solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Independent House Vastu Consultant Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Independent House Vastu Consultant Hyderabad | Vasterior",
    description:
      "Independent House Vastu Consultant Hyderabad offering complete property analysis and practical Vastu correction solutions.",
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
