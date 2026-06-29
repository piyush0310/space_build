import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "3D Interior Designer South Delhi",
  description:
    "3D Interior Designer South Delhi, with Price | Vasteior. Looking for a 3D interior designer in South Delhi with price details? Space Build offers detailed, realistic & Vastu-compliant interior visualizations.",
  keywords:
    "3d interior designer south delhi, 3d home interiors south delhi, modern interior designer south delhi",
  alternates: {
    canonical:
      "https://www.Space Build.com/city/3d-interior-designer-south-delhi",
  },
  openGraph: {
    type: "website",
    url: "https://www.Space Build.com/city/3d-interior-designer-south-delhi",
    title: "3D Interior Designer South Delhi",
    description:
      "3D Interior Designer South Delhi, with Price | Vasteior. Looking for a 3D interior designer in South Delhi with price details? Space Build offers detailed, realistic & Vastu-compliant interior visualizations.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "3D Interior Designer South Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Space Build",
    title: "3D Interior Designer South Delhi",
    description:
      "3D Interior Designer South Delhi, with Price | Vasteior. Looking for a 3D interior designer in South Delhi with price details? Space Build offers detailed, realistic & Vastu-compliant interior visualizations.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function InteriorDesignerNearMeMoradabadDistrict() {
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
