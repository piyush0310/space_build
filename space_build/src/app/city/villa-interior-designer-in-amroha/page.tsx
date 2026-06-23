import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Villa Interior Designer In Amroha | Vasterior Studios",
  description:
    "Villa Interior Designer In Amroha – Vasterior Studios offers luxury villa interiors, premium themes, custom furniture & turnkey execution.",
  keywords:
    "villa interior designer amroha, villa interiors amroha, luxury villa design amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/villa-interior-designer-in-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/villa-interior-designer-in-amroha",
    title: "Villa Interior Designer In Amroha | Vasterior Studios",
    description:
      "Villa Interior Designer In Amroha – Vasterior Studios offers luxury villa interiors, premium themes, custom furniture & turnkey execution.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Villa Interior Designer In Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Villa Interior Designer In Amroha | Vasterior Studios",
    description:
      "Villa Interior Designer In Amroha – Vasterior Studios offers luxury villa interiors, premium themes, custom furniture & turnkey execution.",
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
