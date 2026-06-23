import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "False Ceiling Designer Amroha | Vasterior Studios",
  description:
    "False Ceiling Designer Amroha – Vasterior Studios offers stylish false ceilings with lighting design, premium materials & expert installation.",
  keywords:
    "false ceiling designer amroha, false ceiling amroha, ceiling design amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/false-ceiling-designer-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/false-ceiling-designer-amroha",
    title: "False Ceiling Designer Amroha | Vasterior Studios",
    description:
      "False Ceiling Designer Amroha – Vasterior Studios offers stylish false ceilings with lighting design, premium materials & expert installation.",
    images: [
      {
        url: "https://res.cloudinary.com/df1v3yied/image/upload/v1756528800/vasteriorlogo_fpcrfw.png",
        width: 1200,
        height: 630,
        alt: "False Ceiling Designer Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "False Ceiling Designer Amroha | Vasterior Studios",
    description:
      "False Ceiling Designer Amroha – Vasterior Studios offers stylish false ceilings with lighting design, premium materials & expert installation.",
    images: [
      "https://res.cloudinary.com/df1v3yied/image/upload/v1756528800/vasteriorlogo_fpcrfw.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function HighEndInteriorDesignerMoradabad() {
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
