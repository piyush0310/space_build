import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Top Vastu Consultant Amroha, Uttar Pradesh| Vasterior",
  description:
    "Top Vastu Consultant Amroha by Vasterior delivering trusted and result-oriented Vastu solutions for homes and businesses in Amroha, UP.",
  keywords:
    "top vastu consultant amroha, best vastu consultant amroha, trusted vastu expert amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/top-vastu-consultant-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/top-vastu-consultant-amroha",
    title: "Top Vastu Consultant Amroha, Uttar Pradesh| Vasterior",
    description:
      "Top Vastu Consultant Amroha by Vasterior delivering trusted and result-oriented Vastu solutions for homes and businesses in Amroha, UP.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Top Vastu Consultant Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Top Vastu Consultant Amroha, Uttar Pradesh| Vasterior",
    description:
      "Top Vastu Consultant Amroha by Vasterior delivering trusted and result-oriented Vastu solutions for homes and businesses in Amroha, UP.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function TopVastuConsultantAmroha() {
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
