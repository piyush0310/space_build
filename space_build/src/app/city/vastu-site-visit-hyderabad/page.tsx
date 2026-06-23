import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Site Visit Hyderabad | Vasterior",
  description: "Vastu Site Visit Hyderabad offering on-location Vastu analysis and practical remedies.",
  keywords:
    "vastu site visit hyderabad, on site property analysis hyderabad, home visit consultation",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-site-visit-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-site-visit-hyderabad",
    title: "Vastu Site Visit Hyderabad | Vasterior",
    description:
      "Vastu Site Visit Hyderabad offering on-location Vastu analysis and practical remedies.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu Site Visit Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Site Visit Hyderabad | Vasterior",
    description:
      "Vastu Site Visit Hyderabad offering on-location Vastu analysis and practical remedies.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function VastuConsultantKokapetHyderabad() {
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
