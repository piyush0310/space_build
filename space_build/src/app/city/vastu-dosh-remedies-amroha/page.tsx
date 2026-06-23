import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Dosh Remedies Amroha, Uttar Pradesh| Vasterior",
  description:
    "Vastu Dosh Remedies Amroha by Vasterior offering practical and proven Vastu dosh remedies in Amroha, UP.",
  keywords:
    "vastu dosh remedies amroha, vastu dosh nivaran amroha, vastu correction services amroha",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/vastu-dosh-remedies-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-dosh-remedies-amroha",
    title: "Vastu Dosh Remedies Amroha, Uttar Pradesh| Vasterior",
    description:
      "Vastu Dosh Remedies Amroha by Vasterior offering practical and proven Vastu dosh remedies in Amroha, UP.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu Dosh Remedies Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Dosh Remedies Amroha, Uttar Pradesh| Vasterior",
    description:
      "Vastu Dosh Remedies Amroha by Vasterior offering practical and proven Vastu dosh remedies in Amroha, UP.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function TurnkeyInteriorDesignerMoradabad() {
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
