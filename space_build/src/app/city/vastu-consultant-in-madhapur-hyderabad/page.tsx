import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultant in Madhapur, Hyderabad | Vasterior",
  description:
    "Vastu Consultant in Madhapur, Hyderabad providing complete home and office Vastu analysis with practical remedies and correction services.",
  keywords:
    "vastu consultant madhapur hyderabad, madhapur apartment vastu, commercial consultation",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultant-in-madhapur-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    title: "Vastu Consultant in Madhapur, Hyderabad | Vasterior",
    description:
      "Vastu Consultant in Madhapur, Hyderabad providing complete home and office Vastu analysis with practical remedies and correction services.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu Consultant in Madhapur, Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant in Madhapur, Hyderabad | Vasterior",
    description:
      "Vastu Consultant in Madhapur, Hyderabad providing complete home and office Vastu analysis with practical remedies and correction services.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuConsultantInMadhapurHyderabad() {
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
