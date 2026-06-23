import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultant in Nallagandla, Hyderabad | Vasterior",
  description:
    "Vastu Consultant in Nallagandla, Hyderabad providing modern apartment and villa Vastu consultation with effective correction services.",
  keywords:
    "vastu consultant nallagandla hyderabad, nallagandla villa planning, apartment consultation",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-consultant-in-nallagandla-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-in-nallagandla-hyderabad",
    title: "Vastu Consultant in Nallagandla, Hyderabad | Vasterior",
    description:
      "Vastu Consultant in Nallagandla, Hyderabad providing modern apartment and villa Vastu consultation with effective correction services.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu Consultant in Nallagandla, Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant in Nallagandla, Hyderabad | Vasterior",
    description:
      "Vastu Consultant in Nallagandla, Hyderabad providing modern apartment and villa Vastu consultation with effective correction services.",
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
