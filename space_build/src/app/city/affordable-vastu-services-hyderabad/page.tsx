import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Affordable Vastu Services Hyderabad | Vasterior",
  description:
    "Affordable Vastu Services Hyderabad providing cost-effective solutions without compromising quality.",
  keywords:
    "affordable vastu services hyderabad, low cost vastu hyderabad, professional budget solutions",
  alternates: {
    canonical: "https://www.vasterior.com/city/affordable-vastu-services-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/affordable-vastu-services-hyderabad",
    title: "Affordable Vastu Services Hyderabad | Vasterior",
    description:
      "Affordable Vastu Services Hyderabad providing cost-effective solutions without compromising quality.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Affordable Vastu Services Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Affordable Vastu Services Hyderabad | Vasterior",
    description:
      "Affordable Vastu Services Hyderabad providing cost-effective solutions without compromising quality.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function AffordableVastuServicesHyderabad() {
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
