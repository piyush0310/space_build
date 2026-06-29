import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "3D Interior Designer Amroha | Space Build Studios",
  description:
    "3D Interior Designer Amroha – Space Build Studios provides realistic 3D interior designs to visualize your complete home before execution.",
  keywords:
    "3d interior designer amroha, 3d interior design amroha, interior visualization amroha",
  alternates: {
    canonical: "https://www.Space Build.com/city/3d-interior-designer-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.Space Build.com/city/3d-interior-designer-amroha",
    title: "3D Interior Designer Amroha | Space Build Studios",
    description:
      "3D Interior Designer Amroha – Space Build Studios provides realistic 3D interior designs to visualize your complete home before execution.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "3D Interior Designer Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Space Build",
    title: "3D Interior Designer Amroha | Space Build Studios",
    description:
      "3D Interior Designer Amroha – Space Build Studios provides realistic 3D interior designs to visualize your complete home before execution.",
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
