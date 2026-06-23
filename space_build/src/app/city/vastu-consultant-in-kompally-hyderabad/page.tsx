import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultant in Kompally, Hyderabad | Vasterior",
  description:
    "Vastu Consultant in Kompally, Hyderabad offering expert plot and independent house Vastu consultation with planning support.",
  keywords:
    "vastu consultant kompally hyderabad, kompally villa planning, plot consultation",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-consultant-in-kompally-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-in-kompally-hyderabad",
    title: "Vastu Consultant in Kompally, Hyderabad | Vasterior",
    description:
      "Vastu Consultant in Kompally, Hyderabad offering expert plot and independent house Vastu consultation with planning support.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu Consultant in Kompally, Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant in Kompally, Hyderabad | Vasterior",
    description:
      "Vastu Consultant in Kompally, Hyderabad offering expert plot and independent house Vastu consultation with planning support.",
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
