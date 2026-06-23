import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultant In Amroha, Uttar Pradesh| Vasterior",
  description:
    "Vastu Consultant in Amroha by Vasterior providing complete Vastu services for home, shop and office in Amroha, UP.",
  keywords:
    "vastu consultant in amroha, vastu expert amroha, best vastu consultant amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultant-in-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-in-amroha",
    title: "Vastu Consultant In Amroha, Uttar Pradesh| Vasterior",
    description:
      "Vastu Consultant in Amroha by Vasterior providing complete Vastu services for home, shop and office in Amroha, UP.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu Consultant In Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant In Amroha, Uttar Pradesh| Vasterior",
    description:
      "Vastu Consultant in Amroha by Vasterior providing complete Vastu services for home, shop and office in Amroha, UP.",
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
