import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Home Interior Decoration Services Amroha | Vasterior Studios",
  description:
    "Home Interior Decoration Services Amroha – Vasterior Studios provides décor styling, customization, space planning & modern home transformation.",
  keywords:
    "home decoration services amroha, interior decoration amroha, home décor amroha",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/home-interior-decoration-services-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/home-interior-decoration-services-amroha",
    title: "Home Interior Decoration Services Amroha | Vasterior Studios",
    description:
      "Home Interior Decoration Services Amroha – Vasterior Studios provides décor styling, customization, space planning & modern home transformation.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Home Interior Decoration Services Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Home Interior Decoration Services Amroha | Vasterior Studios",
    description:
      "Home Interior Decoration Services Amroha – Vasterior Studios provides décor styling, customization, space planning & modern home transformation.",
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
