import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Online Vastu Consultant Amroha, Uttar Pradesh| Vasterior",
  description:
    "Online Vastu Consultant Amroha by Vasterior providing expert Vastu consultation online for home and business in Amroha, UP.",
  keywords:
    "online vastu consultant amroha, vastu consultation online amroha, vastu expert online amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/online-vastu-consultant-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/online-vastu-consultant-amroha",
    title: "Online Vastu Consultant Amroha, Uttar Pradesh| Vasterior",
    description:
      "Online Vastu Consultant Amroha by Vasterior providing expert Vastu consultation online for home and business in Amroha, UP.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Online Vastu Consultant Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Online Vastu Consultant Amroha, Uttar Pradesh| Vasterior",
    description:
      "Online Vastu Consultant Amroha by Vasterior providing expert Vastu consultation online for home and business in Amroha, UP.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function OnlineVastuConsultantAmroha() {
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
