import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Plot Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
  description: "Plot Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Accurate Vastu guidance for plot selection, layout, and construction planning.",
  keywords: "plot vastu consultant chandausi, vastu for plot chandausi, vastu plot planning chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/plot-vastu-consultant-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/plot-vastu-consultant-chandausi",
    title: "Plot Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Plot Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Accurate Vastu guidance for plot selection, layout, and construction planning.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
      width: 1200,
      height: 630,
      alt: "Plot Vastu Consultant Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Plot Vastu Consultant Chandausi, Uttar Pradesh| Vasterior",
    description: "Plot Vastu Consultant in Chandausi, Uttar Pradesh by Vasterior. Accurate Vastu guidance for plot selection, layout, and construction planning.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function PlotVastuConsultantChandausi() {
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
