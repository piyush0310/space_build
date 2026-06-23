import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultant in Miyapur, Hyderabad | Vasterior",
  description:
    "Vastu Consultant in Miyapur, Hyderabad offering detailed apartment and villa Vastu inspection with effective remedies.",
  keywords:
    "vastu consultant miyapur hyderabad, miyapur apartment consultation, residential planning",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-consultant-in-miyapur-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-in-miyapur-hyderabad",
    title: "Vastu Consultant in Miyapur, Hyderabad | Vasterior",
    description:
      "Vastu Consultant in Miyapur, Hyderabad offering detailed apartment and villa Vastu inspection with effective remedies.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu Consultant in Miyapur, Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant in Miyapur, Hyderabad | Vasterior",
    description:
      "Vastu Consultant in Miyapur, Hyderabad offering detailed apartment and villa Vastu inspection with effective remedies.",
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
