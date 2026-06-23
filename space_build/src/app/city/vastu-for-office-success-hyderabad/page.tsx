import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu for Office Success Hyderabad | Vasterior",
  description:
    "Vastu for Office Success Hyderabad providing energy balancing solutions for productivity and growth.",
  keywords:
    "vastu for office success hyderabad, productivity vastu hyderabad, office energy balance",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-for-office-success-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-for-office-success-hyderabad",
    title: "Vastu for Office Success Hyderabad | Vasterior",
    description:
      "Vastu for Office Success Hyderabad providing energy balancing solutions for productivity and growth.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu for Office Success Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu for Office Success Hyderabad | Vasterior",
    description:
      "Vastu for Office Success Hyderabad providing energy balancing solutions for productivity and growth.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

const Page = () => {
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
};

export default Page;
