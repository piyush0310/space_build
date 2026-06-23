import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "3D Interior Designer Chandausi , UP | Vasterior",
  description:
    "3D Interior Designer in Chandausi, UP | Vasterior provides realistic 3D designs to visualize your interiors before execution.",
  keywords:
    "3d interior designer chandausi, 3d interior design services chandausi, interior visualization chandausi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/3d-interior-designer-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/3d-interior-designer-chandausi",
    title: "3D Interior Designer Chandausi, UP | Vasterior",
    description:
      "3D Interior Designer in Chandausi, UP | Vasterior provides realistic 3D designs to visualize your interiors before execution.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "3D Interior Designer Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "3D Interior Designer Chandausi, UP | Vasterior",
    description:
      "3D Interior Designer in Chandausi, UP | Vasterior provides realistic 3D designs to visualize your interiors before execution.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function ThreeDInteriorDesignerChandausi() {
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
