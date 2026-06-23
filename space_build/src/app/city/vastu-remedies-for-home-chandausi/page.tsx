import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Remedies for Home Chandausi, Uttar Pradesh| Vasterior",
  description: "Vastu Remedies for Home in Chandausi, Uttar Pradesh by Vasterior. Simple and practical remedies to remove Vastu imbalances.",
  keywords: "vastu remedies for home chandausi, home vastu correction chandausi, vastu dosh remedies chandausi, vasterior",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-remedies-for-home-chandausi",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-remedies-for-home-chandausi",
    title: "Vastu Remedies for Home Chandausi, Uttar Pradesh| Vasterior",
    description: "Vastu Remedies for Home in Chandausi, Uttar Pradesh by Vasterior. Simple and practical remedies to remove Vastu imbalances.",
    images: [{
      url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
      width: 1200,
      height: 630,
      alt: "Vastu Remedies for Home Chandausi",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Remedies for Home Chandausi, Uttar Pradesh| Vasterior",
    description: "Vastu Remedies for Home in Chandausi, Uttar Pradesh by Vasterior. Simple and practical remedies to remove Vastu imbalances.",
    images: ["https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuRemediesForHomeChandausi() {
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
