import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Services Near Amroha, Uttar Pradesh| Vasterior",
  description:
    "Vastu Services Near Amroha by Vasterior providing nearby trusted Vastu consultation services in Amroha, UP.",
  keywords:
    "vastu services near amroha, local vastu services amroha, vastu consultation near amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-services-near-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-services-near-amroha",
    title: "Vastu Services Near Amroha, Uttar Pradesh| Vasterior",
    description:
      "Vastu Services Near Amroha by Vasterior providing nearby trusted Vastu consultation services in Amroha, UP.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu Services Near Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Services Near Amroha, Uttar Pradesh| Vasterior",
    description:
      "Vastu Services Near Amroha by Vasterior providing nearby trusted Vastu consultation services in Amroha, UP.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuServicesNearAmroha() {
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
