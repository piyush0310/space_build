import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Local Vastu Consultant Amroha, Uttar Pradesh| Vasterior",
  description:
    "Local Vastu Consultant Amroha by Vasterior providing trusted Vastu services for residential and commercial properties in Amroha, UP.",
  keywords:
    "local vastu consultant amroha, vastu consultant near me amroha, vastu services near amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/local-vastu-consultant-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/local-vastu-consultant-amroha",
    title: "Local Vastu Consultant Amroha, Uttar Pradesh| Vasterior",
    description:
      "Local Vastu Consultant Amroha by Vasterior providing trusted Vastu services for residential and commercial properties in Amroha, UP.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Local Vastu Consultant Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Local Vastu Consultant Amroha, Uttar Pradesh| Vasterior",
    description:
      "Local Vastu Consultant Amroha by Vasterior providing trusted Vastu services for residential and commercial properties in Amroha, UP.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function LocalVastuConsultantAmroha() {
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
