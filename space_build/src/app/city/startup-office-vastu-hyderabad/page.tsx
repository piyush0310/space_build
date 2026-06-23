import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Startup Office Vastu Hyderabad | Vasterior",
  description:
    "Startup Office Vastu Hyderabad providing growth-oriented Vastu consultation for new businesses.",
  keywords:
    "startup office vastu hyderabad, new business vastu hyderabad, office growth planning",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/startup-office-vastu-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/startup-office-vastu-hyderabad",
    title: "Startup Office Vastu Hyderabad | Vasterior",
    description:
      "Startup Office Vastu Hyderabad providing growth-oriented Vastu consultation for new businesses.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Startup Office Vastu Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Startup Office Vastu Hyderabad | Vasterior",
    description:
      "Startup Office Vastu Hyderabad providing growth-oriented Vastu consultation for new businesses.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function BestInteriorDesignerMoradabad() {
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
