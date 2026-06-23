import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Designers in Chandausi, UP | Vasterior",
  description:
    "Interior Designers in Chandausi, UP | Vasterior offers modern, luxury & budget home interiors, turnkey interior solutions, and Vastu-based designs for homes and offices.",
  keywords:
    "interior designers in chandausi, interior designer chandausi up, home interior chandausi, interior design services chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/interior-designers-in-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-designers-in-chandausi",
    title: "Interior Designers in Chandausi, UP | Vasterior",
    description:
      "Interior Designers in Chandausi, UP | Vasterior offers modern, luxury & budget home interiors, turnkey interior solutions, and Vastu-based designs for homes and offices.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Interior Designers in Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Designers in Chandausi, UP | Vasterior",
    description:
      "Interior Designers in Chandausi, UP | Vasterior offers modern, luxury & budget home interiors, turnkey interior solutions, and Vastu-based designs for homes and offices.",
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
