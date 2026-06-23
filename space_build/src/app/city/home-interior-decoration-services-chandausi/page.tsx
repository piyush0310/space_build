import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Home Interior Decoration Services Chandausi , UP | Vasterior",
  description:
    "Home Interior Decoration Services in Chandausi, UP | Vasterior enhance your space with elegant décor, modern styling, and custom designs.",
  keywords:
    "home interior decoration services chandausi, interior decor chandausi, modern home styling chandausi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/home-interior-decoration-services-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/home-interior-decoration-services-chandausi",
    title: "Home Interior Decoration Services Chandausi, UP | Vasterior",
    description:
      "Home Interior Decoration Services in Chandausi, UP | Vasterior enhance your space with elegant décor, modern styling, and custom designs.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Home Interior Decoration Services Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Home Interior Decoration Services Chandausi, UP | Vasterior",
    description:
      "Home Interior Decoration Services in Chandausi, UP | Vasterior enhance your space with elegant décor, modern styling, and custom designs.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function HomeInteriorDecorationServicesChandausi() {
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
