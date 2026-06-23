import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Online Vastu Services Hyderabad | Vasterior",
  description:
    "Online Vastu Services Hyderabad offering digital Vastu analysis and personalized recommendations.",
  keywords:
    "online vastu services hyderabad, digital vastu solutions hyderabad, virtual property review",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/online-vastu-services-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/online-vastu-services-hyderabad",
    title: "Online Vastu Services Hyderabad | Vasterior",
    description:
      "Online Vastu Services Hyderabad offering digital Vastu analysis and personalized recommendations.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Online Vastu Services Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Online Vastu Services Hyderabad | Vasterior",
    description:
      "Online Vastu Services Hyderabad offering digital Vastu analysis and personalized recommendations.",
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
