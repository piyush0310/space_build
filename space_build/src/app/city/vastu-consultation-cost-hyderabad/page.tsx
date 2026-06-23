import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultation Cost Hyderabad | Vasterior",
  description:
    "Vastu Consultation Cost Hyderabad providing clear pricing for home, office and online services.",
  keywords:
    "vastu consultation cost hyderabad, vastu pricing details hyderabad, property consultation charges",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultation-cost-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultation-cost-hyderabad",
    title: "Vastu Consultation Cost Hyderabad | Vasterior",
    description:
      "Vastu Consultation Cost Hyderabad providing clear pricing for home, office and online services.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu Consultation Cost Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultation Cost Hyderabad | Vasterior",
    description:
      "Vastu Consultation Cost Hyderabad providing clear pricing for home, office and online services.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuConsultantNarsingiHyderabad() {
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
