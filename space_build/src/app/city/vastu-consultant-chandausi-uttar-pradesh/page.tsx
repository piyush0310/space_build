import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultant Chandausi Uttar Pradesh, Uttar Pradesh| Vasterior",
  description:
    "Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Trusted Vastu services for residential and commercial properties with expert guidance.",
  keywords:
    "vastu consultant chandausi uttar pradesh, vastu expert uttar pradesh, vastu services chandausi, vasterior",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-consultant-chandausi-uttar-pradesh",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-chandausi-uttar-pradesh",
    title: "Vastu Consultant Chandausi Uttar Pradesh, Uttar Pradesh| Vasterior",
    description:
      "Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Trusted Vastu services for residential and commercial properties with expert guidance.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu Consultant Chandausi Uttar Pradesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant Chandausi Uttar Pradesh, Uttar Pradesh| Vasterior",
    description:
      "Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Trusted Vastu services for residential and commercial properties with expert guidance.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function TrustedVastuConsultantChandausi() {
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
