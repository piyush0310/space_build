import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Services in Hyderabad | Vasterior",
  description:
    "Vastu Services in Hyderabad providing complete Vastu consultation, analysis, remedies and correction solutions for residential and commercial properties.",
  keywords:
    "vastu services in hyderabad, complete vastu solutions hyderabad, vastu consultation services",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-services-in-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-services-in-hyderabad",
    title: "Vastu Services in Hyderabad | Vasterior",
    description:
      "Vastu Services in Hyderabad providing complete Vastu consultation, analysis, remedies and correction solutions for residential and commercial properties.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu Services in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Services in Hyderabad | Vasterior",
    description:
      "Vastu Services in Hyderabad providing complete Vastu consultation, analysis, remedies and correction solutions for residential and commercial properties.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuConsultantKokapetHyderabad() {
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
