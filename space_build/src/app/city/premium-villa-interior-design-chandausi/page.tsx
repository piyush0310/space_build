import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Premium Villa Interior Design Chandausi , UP | Vasterior",
  description:
    "Premium Villa Interior Design in Chandausi, UP | Vasterior delivers elegant, spacious, and luxurious villa interior solutions.",
  keywords:
    "premium villa interior design chandausi, villa interior design services chandausi, luxury home villa chandausi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/premium-villa-interior-design-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/premium-villa-interior-design-chandausi",
    title: "Premium Villa Interior Design Chandausi, UP | Vasterior",
    description:
      "Premium Villa Interior Design in Chandausi, UP | Vasterior delivers elegant, spacious, and luxurious villa interior solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Premium Villa Interior Design Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Premium Villa Interior Design Chandausi, UP | Vasterior",
    description:
      "Premium Villa Interior Design in Chandausi, UP | Vasterior delivers elegant, spacious, and luxurious villa interior solutions.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function PremiumVillaInteriorDesignChandausi() {
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
