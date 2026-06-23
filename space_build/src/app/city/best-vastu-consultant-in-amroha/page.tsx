import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Affordable Vastu Consultant Amroha, Uttar Pradesh| Vasterior",
  description:
    "Affordable Vastu Consultant Amroha by Vasterior offers expert Vastu solutions for home, house, shop and office in Amroha, UP. Trusted guidance at affordable charges.",
  keywords:
    "affordable vastu consultant amroha, vastu consultant charges amroha, trusted vastu expert amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/affordable-vastu-consultant-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/affordable-vastu-consultant-amroha",
    title: "Affordable Vastu Consultant Amroha, Uttar Pradesh| Vasterior",
    description:
      "Affordable Vastu Consultant Amroha by Vasterior offers expert Vastu solutions for home, house, shop and office in Amroha, UP. Trusted guidance at affordable charges.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",

        width: 1200,
        height: 630,
        alt: "Affordable Vastu Consultant Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Affordable Vastu Consultant Amroha, Uttar Pradesh| Vasterior",
    description:
      "Affordable Vastu Consultant Amroha by Vasterior offers expert Vastu solutions for home, house, shop and office in Amroha, UP. Trusted guidance at affordable charges.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function AffordableVastuConsultantAmroha() {
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
