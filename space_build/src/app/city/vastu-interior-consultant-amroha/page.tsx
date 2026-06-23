import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Interior Consultant Amroha | Vasterior Studios",
  description:
    "Vastu Interior Consultant Amroha – Vasterior Studios provides professional Vastu consultations with practical, design-friendly solutions.",
  keywords:
    "vastu interior consultant amroha, vastu design amroha, vastu expert amroha",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-interior-consultant-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-interior-consultant-amroha",
    title: "Vastu Interior Consultant Amroha | Vasterior Studios",
    description:
      "Vastu Interior Consultant Amroha – Vasterior Studios provides professional Vastu consultations with practical, design-friendly solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Vastu Interior Consultant Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Interior Consultant Amroha | Vasterior Studios",
    description:
      "Vastu Interior Consultant Amroha – Vasterior Studios provides professional Vastu consultations with practical, design-friendly solutions.",
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
