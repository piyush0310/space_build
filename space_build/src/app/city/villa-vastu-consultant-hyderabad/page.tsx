import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Villa Vastu Consultant Hyderabad | Vasterior",
  description:
    "Villa Vastu Consultant Hyderabad providing luxury home Vastu consultation, site visits and personalized remedies.",
  keywords:
    "villa vastu consultant hyderabad, luxury home vastu hyderabad, independent villa vastu",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/villa-vastu-consultant-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/villa-vastu-consultant-hyderabad",
    title: "Villa Vastu Consultant Hyderabad | Vasterior",
    description:
      "Villa Vastu Consultant Hyderabad providing luxury home Vastu consultation, site visits and personalized remedies.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Villa Vastu Consultant Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Villa Vastu Consultant Hyderabad | Vasterior",
    description:
      "Villa Vastu Consultant Hyderabad providing luxury home Vastu consultation, site visits and personalized remedies.",
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
