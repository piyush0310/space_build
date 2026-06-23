import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Home Interior Design as per Vastu Kalkaji",
  description:
    "Home Interior Design as per Vastu Kalkaji, with Price | Vasteior. Looking for home interior design as per Vastu in Kalkaji with price details? Vasterior delivers harmonious, stylish & Vastu-based home interiors.",
  keywords:
    "home interior design as per vastu kalkaji, vastu interior designer kalkaji, interior renovation kalkaji",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/home-interior-design-as-per-vastu-kalkaji",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/home-interior-design-as-per-vastu-kalkaji",
    title: "Home Interior Design as per Vastu Kalkaji",
    description:
      "Home Interior Design as per Vastu Kalkaji, with Price | Vasteior. Looking for home interior design as per Vastu in Kalkaji with price details? Vasterior delivers harmonious, stylish & Vastu-based home interiors.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Home Interior Design as per Vastu Kalkaji",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Home Interior Design as per Vastu Kalkaji",
    description:
      "Home Interior Design as per Vastu Kalkaji, with Price | Vasteior. Looking for home interior design as per Vastu in Kalkaji with price details? Vasterior delivers harmonious, stylish & Vastu-based home interiors.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function HomeInteriorDesignAsPerVastuKalkaji() {
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
