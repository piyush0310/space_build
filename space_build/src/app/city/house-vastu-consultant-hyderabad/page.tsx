import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "House Vastu Consultant Hyderabad | Vasterior",
  description:
    "House Vastu Consultant Hyderabad providing detailed house analysis, correction services and practical Vastu solutions.",
  keywords:
    "house vastu consultant hyderabad, vastu for home hyderabad, home energy vastu",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/house-vastu-consultant-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/house-vastu-consultant-hyderabad",
    title: "House Vastu Consultant Hyderabad | Vasterior",
    description:
      "House Vastu Consultant Hyderabad providing detailed house analysis, correction services and practical Vastu solutions.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "House Vastu Consultant Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "House Vastu Consultant Hyderabad | Vasterior",
    description:
      "House Vastu Consultant Hyderabad providing detailed house analysis, correction services and practical Vastu solutions.",
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
