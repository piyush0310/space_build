import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Office Vastu Consultant Hyderabad | Vasterior",
  description:
    "Office Vastu Consultant Hyderabad providing expert office layout planning and energy optimization solutions.",
  keywords:
    "office vastu consultant hyderabad, office layout vastu hyderabad, workspace energy planning",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/office-vastu-consultant-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/office-vastu-consultant-hyderabad",
    title: "Office Vastu Consultant Hyderabad | Vasterior",
    description:
      "Office Vastu Consultant Hyderabad providing expert office layout planning and energy optimization solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Office Vastu Consultant Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Office Vastu Consultant Hyderabad | Vasterior",
    description:
      "Office Vastu Consultant Hyderabad providing expert office layout planning and energy optimization solutions.",
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
