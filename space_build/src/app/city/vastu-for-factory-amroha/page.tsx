import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu For Factory Amroha, Uttar Pradesh| Vasterior",
  description:
    "Vastu for Factory Amroha by Vasterior offering specialized Vastu solutions for factories and industrial units in Amroha, UP.",
  keywords:
    "vastu for factory amroha, vastu for money problems amroha, vastu for health problems amroha",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-for-factory-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-for-factory-amroha",
    title: "Vastu For Factory Amroha, Uttar Pradesh| Vasterior",
    description:
      "Vastu for Factory Amroha by Vasterior offering specialized Vastu solutions for factories and industrial units in Amroha, UP.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu For Factory Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu For Factory Amroha, Uttar Pradesh| Vasterior",
    description:
      "Vastu for Factory Amroha by Vasterior offering specialized Vastu solutions for factories and industrial units in Amroha, UP.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuForFactoryAmroha() {
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
