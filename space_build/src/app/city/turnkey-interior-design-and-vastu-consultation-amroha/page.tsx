import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Turnkey Interior Design And Vastu Consultation Amroha | Vasterior Studios",
  description:
    "Turnkey Interior Design And Vastu Consultation Amroha – Vasterior Studios offers complete interiors with execution, Vastu guidance & premium finishing.",
  keywords:
    "turnkey interior design amroha, turnkey interiors amroha, interior execution amroha",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/turnkey-interior-design-and-vastu-consultation-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/turnkey-interior-design-and-vastu-consultation-amroha",
    title:
      "Turnkey Interior Design And Vastu Consultation Amroha | Vasterior Studios",
    description:
      "Turnkey Interior Design And Vastu Consultation Amroha – Vasterior Studios offers complete interiors with execution, Vastu guidance & premium finishing.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Turnkey Interior Design And Vastu Consultation Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title:
      "Turnkey Interior Design And Vastu Consultation Amroha | Vasterior Studios",
    description:
      "Turnkey Interior Design And Vastu Consultation Amroha – Vasterior Studios offers complete interiors with execution, Vastu guidance & premium finishing.",
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
