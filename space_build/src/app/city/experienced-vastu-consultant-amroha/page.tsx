import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Experienced Vastu Consultant Amroha, Uttar Pradesh| Vasterior",
  description:
    "Experienced Vastu Consultant Amroha by Vasterior delivering practical Vastu solutions for home, shop and office in Amroha, UP with years of expertise.",
  keywords:
    "experienced vastu consultant amroha, senior vastu expert amroha, trusted vastu consultant amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/experienced-vastu-consultant-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/experienced-vastu-consultant-amroha",

    title: "Experienced Vastu Consultant Amroha, Uttar Pradesh| Vasterior",
    description:
      "Experienced Vastu Consultant Amroha by Vasterior delivering practical Vastu solutions for home, shop and office in Amroha, UP with years of expertise.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Experienced Vastu Consultant Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Experienced Vastu Consultant Amroha, Uttar Pradesh| Vasterior",
    description:
      "Experienced Vastu Consultant Amroha by Vasterior delivering practical Vastu solutions for home, shop and office in Amroha, UP with years of expertise.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function ExperiencedVastuConsultantAmroha() {
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
