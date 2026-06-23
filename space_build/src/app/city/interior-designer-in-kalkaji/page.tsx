import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Designer in Kalkaji",
  description:
    "Interior Designer in Kalkaji, with Price | Vasteior. Looking for an interior designer in Kalkaji with price details? Vasterior provides residential, stylish & Vastu-compliant interior solutions.",
  keywords:
    "interior designer kalkaji, residential interior designer kalkaji, home renovation interior designer kalkaji",
  alternates: {
    canonical: "https://www.vasterior.com/city/interior-designer-in-kalkaji",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-designer-in-kalkaji",
    title: "Interior Designer in Kalkaji",
    description:
      "Interior Designer in Kalkaji, with Price | Vasteior. Looking for an interior designer in Kalkaji with price details? Vasterior provides residential, stylish & Vastu-compliant interior solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Interior Designer in Kalkaji",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Designer in Kalkaji",
    description:
      "Interior Designer in Kalkaji, with Price | Vasteior. Looking for an interior designer in Kalkaji with price details? Vasterior provides residential, stylish & Vastu-compliant interior solutions.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function InteriorDesignServicesChandausi() {
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
