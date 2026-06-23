import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Designer And Vastu Expert Amroha | Vasterior Studios",
  description:
    "Interior Designer And Vastu Expert Amroha – Vasterior Studios offers Vastu-aligned interior designs that balance aesthetics, energy & comfort.",
  keywords:
    "interior designer and vastu expert amroha, vastu interior amroha, vastu consultant amroha",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/interior-designer-and-vastu-expert-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-designer-and-vastu-expert-amroha",
    title: "Interior Designer And Vastu Expert Amroha | Vasterior Studios",
    description:
      "Interior Designer And Vastu Expert Amroha – Vasterior Studios offers Vastu-aligned interior designs that balance aesthetics, energy & comfort.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Interior Designer And Vastu Expert Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Designer And Vastu Expert Amroha | Vasterior Studios",
    description:
      "Interior Designer And Vastu Expert Amroha – Vasterior Studios offers Vastu-aligned interior designs that balance aesthetics, energy & comfort.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function AffordableInteriorDesignerFor3BhkInMoradabad() {
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
