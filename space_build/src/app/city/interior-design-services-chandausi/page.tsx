import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Design Services Chandausi , UP | Vasterior",
  description:
    "Interior Design Services in Chandausi, UP | Vasterior offers complete residential and commercial interior solutions.",
  keywords:
    "interior design services chandausi, residential and commercial interiors chandausi, interior solutions chandausi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/interior-design-services-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-design-services-chandausi",
    title: "Interior Design Services Chandausi, UP | Vasterior",
    description:
      "Interior Design Services in Chandausi, UP | Vasterior offers complete residential and commercial interior solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Interior Design Services Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Design Services Chandausi, UP | Vasterior",
    description:
      "Interior Design Services in Chandausi, UP | Vasterior offers complete residential and commercial interior solutions.",
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
