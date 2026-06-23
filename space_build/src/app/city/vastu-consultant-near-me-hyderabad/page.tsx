import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultant Near Me Hyderabad | Vasterior",
  description:
    "Vastu Consultant Near Me Hyderabad offering expert Vastu guidance for homes, offices and business spaces with site visit and online options.",
  keywords:
    "vastu consultant near me hyderabad, local vastu services hyderabad, nearby vastu specialist",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-consultant-near-me-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-near-me-hyderabad",
    title: "Vastu Consultant Near Me Hyderabad | Vasterior",
    description:
      "Vastu Consultant Near Me Hyderabad offering expert Vastu guidance for homes, offices and business spaces with site visit and online options.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu Consultant Near Me Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant Near Me Hyderabad | Vasterior",
    description:
      "Vastu Consultant Near Me Hyderabad offering expert Vastu guidance for homes, offices and business spaces with site visit and online options.",
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
