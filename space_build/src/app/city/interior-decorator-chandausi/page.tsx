import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Interior Decorator Chandausi",
  description:
    "Interior Decorator in Chandausi, UP | Vasterior enhances spaces with stylish décor and customized interior themes.",
  keywords:
    "interior decorator chandausi, home decor services chandausi, interior styling chandausi",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/interior-decorator-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/interior-decorator-chandausi",
    title: "Interior Decorator Chandausi, UP | Vasterior",
    description:
      "Interior Decorator in Chandausi, UP | Vasterior enhances spaces with stylish décor and customized interior themes.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Interior Decorator Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Interior Decorator Chandausi, UP | Vasterior",
    description:
      "Interior Decorator in Chandausi, UP | Vasterior enhances spaces with stylish décor and customized interior themes.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function InteriorDecoratorChandausi() {
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
