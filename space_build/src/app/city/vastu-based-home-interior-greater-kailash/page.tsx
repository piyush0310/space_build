import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Based Home Interior Greater Kailash",
  description:
    "Vastu Based Home Interior Greater Kailash, with Price | Vasteior. Looking for Vastu-based home interiors in Greater Kailash with price details? Vasterior delivers stylish, functional & Vastu-compliant designs.",
  keywords:
    "vastu based home interior greater kailash, vastu interior consultant greater kailash, home interior designer greater kailash",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-based-home-interior-greater-kailash",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-based-home-interior-greater-kailash",
    title: "Vastu Based Home Interior Greater Kailash",
    description:
      "Vastu Based Home Interior Greater Kailash, with Price | Vasteior. Looking for Vastu-based home interiors in Greater Kailash with price details? Vasterior delivers stylish, functional & Vastu-compliant designs.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Vastu Based Home Interior Greater Kailash",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Based Home Interior Greater Kailash",
    description:
      "Vastu Based Home Interior Greater Kailash, with Price | Vasteior. Looking for Vastu-based home interiors in Greater Kailash with price details? Vasterior delivers stylish, functional & Vastu-compliant designs.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuBasedHomeInteriorGreaterKailash() {
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
