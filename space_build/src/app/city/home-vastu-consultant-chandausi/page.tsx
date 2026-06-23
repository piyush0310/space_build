import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Home Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
  description:
    "Home Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Expert Vastu planning for peaceful, healthy, and positive living spaces.",
  keywords:
    "home vastu consultant chandausi, vastu for home chandausi, vastu guidance for house chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/home-vastu-consultant-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/home-vastu-consultant-chandausi",
    title: "Home Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description:
      "Home Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Expert Vastu planning for peaceful, healthy, and positive living spaces.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Home Vastu Consultant Chandausi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Home Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description:
      "Home Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Expert Vastu planning for peaceful, healthy, and positive living spaces.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function HomeVastuConsultantChandausi() {
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
