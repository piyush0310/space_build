import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Expert Amroha, Uttar Pradesh| Vasterior",
  description:
    "Vastu Expert Amroha by Vasterior delivering trusted Vastu consultation and guidance in Amroha, UP.",
  keywords:
    "vastu expert amroha, professional vastu expert amroha, vastu shastra expert amroha",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-expert-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-expert-amroha",
    title: "Vastu Expert Amroha, Uttar Pradesh| Vasterior",
    description:
      "Vastu Expert Amroha by Vasterior delivering trusted Vastu consultation and guidance in Amroha, UP.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu Expert Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Expert Amroha, Uttar Pradesh| Vasterior",
    description:
      "Vastu Expert Amroha by Vasterior delivering trusted Vastu consultation and guidance in Amroha, UP.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuExpertAmroha() {
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
