import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultation At Home Amroha, Uttar Pradesh| Vasterior",
  description:
    "Vastu consultation at home in Amroha by Vasterior to restore balance, clarity, and harmony in your space with non-destructive, practical MahaVastu-based solutions.",
  keywords:
    "vastu consultation at home amroha, home vastu consultant amroha, vastu visit amroha",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-consultation-at-home-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultation-at-home-amroha",
    title: "Vastu Consultation At Home Amroha, Uttar Pradesh| Vasterior",
    description:
      "Vastu consultation at home in Amroha by Vasterior to restore balance, clarity, and harmony in your space with non-destructive, practical MahaVastu-based solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu Consultation At Home Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultation At Home Amroha, Uttar Pradesh| Vasterior",
    description:
      "Vastu consultation at home in Amroha by Vasterior to restore balance, clarity, and harmony in your space with non-destructive, practical MahaVastu-based solutions.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function TurnkeyInteriorDesignerMoradabad() {
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
