import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu For Business Growth Amroha, Uttar Pradesh| Vasterior",
  description:
    "Vastu for Business Growth Amroha by Vasterior offering strategic Vastu solutions to support business growth in Amroha, UP.",
  keywords:
    "vastu for business growth amroha, vastu for commercial property amroha, vastu for shop amroha",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-for-business-growth-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-for-business-growth-amroha",
    title: "Vastu For Business Growth Amroha, Uttar Pradesh| Vasterior",
    description:
      "Vastu for Business Growth Amroha by Vasterior offering strategic Vastu solutions to support business growth in Amroha, UP.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu For Business Growth Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu For Business Growth Amroha, Uttar Pradesh| Vasterior",
    description:
      "Vastu for Business Growth Amroha by Vasterior offering strategic Vastu solutions to support business growth in Amroha, UP.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuForBusinessGrowthAmroha() {
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
