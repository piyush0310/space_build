import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu for Peace at Home Hyderabad | Vasterior",
  description:
    "Vastu for Peace at Home Hyderabad providing remedies to create harmony and positive energy.",
  keywords:
    "vastu for peace at home hyderabad, home harmony solutions hyderabad, positive energy planning",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-for-peace-at-home-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-for-peace-at-home-hyderabad",
    title: "Vastu for Peace at Home Hyderabad | Vasterior",
    description:
      "Vastu for Peace at Home Hyderabad providing remedies to create harmony and positive energy.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu for Peace at Home Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu for Peace at Home Hyderabad | Vasterior",
    description:
      "Vastu for Peace at Home Hyderabad providing remedies to create harmony and positive energy.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuConsultantManikondaHyderabad() {
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
