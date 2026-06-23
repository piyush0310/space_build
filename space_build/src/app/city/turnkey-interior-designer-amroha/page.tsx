import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Turnkey Interior Designer Amroha | Vasterior Studios",
  description:
    "Turnkey Interior Designer Amroha – Vasterior Studios handles design-to-execution interiors with timely delivery, premium materials & expert planning.",
  keywords:
    "turnkey interior designer amroha, full home interior amroha, end to end interiors amroha",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/turnkey-interior-designer-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/turnkey-interior-designer-amroha",
    title: "Turnkey Interior Designer Amroha | Vasterior Studios",
    description:
      "Turnkey Interior Designer Amroha – Vasterior Studios handles design-to-execution interiors with timely delivery, premium materials & expert planning.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Turnkey Interior Designer Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Turnkey Interior Designer Amroha | Vasterior Studios",
    description:
      "Turnkey Interior Designer Amroha – Vasterior Studios handles design-to-execution interiors with timely delivery, premium materials & expert planning.",
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
