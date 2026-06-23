import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Civil + Interior Work Chandausi, UP",
  description: "Civil + Interior Work in Chandausi, UP | Vasterior delivers integrated construction and interior solutions under one roof.",
  keywords: "civil + interior work chandausi, civil construction and interior chandausi, complete civil interior solutions chandausi",
  alternates: {
    canonical: "https://www.vasterior.com/city/civil-interior-work-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/civil-interior-work-chandausi",
    title: "Civil + Interior Work Chandausi, UP | Vasterior",
    description: "Civil + Interior Work in Chandausi, UP | Vasterior delivers integrated construction and interior solutions under one roof.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
      width: 1200,
      height: 630,
      alt: "Civil + Interior Work Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Civil + Interior Work Chandausi, UP",
    description: "Civil + Interior Work in Chandausi, UP | Vasterior delivers integrated construction and interior solutions under one roof.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function CivilInteriorWorkChandausi() {
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
