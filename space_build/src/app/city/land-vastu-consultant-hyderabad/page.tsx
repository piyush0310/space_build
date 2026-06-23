import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Land Vastu Consultant Hyderabad | Vasterior",
  description:
    "Land Vastu Consultant Hyderabad offering expert guidance for plot selection and Vastu compliant development.",
  keywords:
    "land vastu consultant hyderabad, plot analysis hyderabad, land energy vastu",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/land-vastu-consultant-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/land-vastu-consultant-hyderabad",
    title: "Land Vastu Consultant Hyderabad | Vasterior",
    description:
      "Land Vastu Consultant Hyderabad offering expert guidance for plot selection and Vastu compliant development.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Land Vastu Consultant Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Land Vastu Consultant Hyderabad | Vasterior",
    description:
      "Land Vastu Consultant Hyderabad offering expert guidance for plot selection and Vastu compliant development.",
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
