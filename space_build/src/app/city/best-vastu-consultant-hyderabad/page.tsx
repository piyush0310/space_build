import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Best Vastu Consultant Hyderabad | Vasterior",
  description:
    "Best Vastu Consultant Hyderabad offering expert guidance for homes, offices, villas, flats and commercial spaces. Vasterior provides accurate Vastu analysis, effective remedies, site visits and online consultations.",
  keywords:
    "best vastu consultant hyderabad, top vastu expert hyderabad, trusted vastu hyderabad",
  alternates: {
    canonical: "https://www.vasterior.com/city/best-vastu-consultant-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/best-vastu-consultant-hyderabad",
    title: "Best Vastu Consultant Hyderabad | Vasterior",
    description:
      "Best Vastu Consultant Hyderabad offering expert guidance for homes, offices, villas, flats and commercial spaces. Vasterior provides accurate Vastu analysis, effective remedies, site visits and online consultations.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Best Vastu Consultant Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Best Vastu Consultant Hyderabad | Vasterior",
    description:
      "Best Vastu Consultant Hyderabad offering expert guidance for homes, offices, villas, flats and commercial spaces. Vasterior provides accurate Vastu analysis, effective remedies, site visits and online consultations.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function BestInteriorDesignerMoradabad() {
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
