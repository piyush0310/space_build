import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Industrial Vastu Consultant Hyderabad | Vasterior",
  description:
    "Industrial Vastu Consultant Hyderabad offering factory and industrial unit Vastu consultation for stability and profit.",
  keywords:
    "industrial vastu consultant hyderabad, factory vastu services hyderabad, industrial site planning",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/industrial-vastu-consultant-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/industrial-vastu-consultant-hyderabad",
    title: "Industrial Vastu Consultant Hyderabad | Vasterior",
    description:
      "Industrial Vastu Consultant Hyderabad offering factory and industrial unit Vastu consultation for stability and profit.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Industrial Vastu Consultant Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Industrial Vastu Consultant Hyderabad | Vasterior",
    description:
      "Industrial Vastu Consultant Hyderabad offering factory and industrial unit Vastu consultation for stability and profit.",
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
