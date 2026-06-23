import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Office Interior Design as per Vastu Nehru Place",
  description:
    "Office Interior Design as per Vastu Nehru Place, with Price | Vasteior. Looking for office interior design as per Vastu in Nehru Place with price details? Vasterior delivers professional, harmonious & Vastu-compliant office spaces.",
  keywords:
    "office interior design as per vastu nehru place, vastu interior designer nehru place, high-end office interiors nehru place",
  alternates: {
    canonical:
      "https://www.vasterior.com/city/office-interior-design-as-per-vastu-nehru-place",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/office-interior-design-as-per-vastu-nehru-place",
    title: "Office Interior Design as per Vastu Nehru Place",
    description:
      "Office Interior Design as per Vastu Nehru Place, with Price | Vasteior. Looking for office interior design as per Vastu in Nehru Place with price details? Vasterior delivers professional, harmonious & Vastu-compliant office spaces.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
        width: 1200,
        height: 630,
        alt: "Office Interior Design as per Vastu Nehru Place",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Office Interior Design as per Vastu Nehru Place",
    description:
      "Office Interior Design as per Vastu Nehru Place, with Price | Vasteior. Looking for office interior design as per Vastu in Nehru Place with price details? Vasterior delivers professional, harmonious & Vastu-compliant office spaces.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p20_bxpldi_fx0zhz.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function OfficeInteriorDesignAsPerVastuNehruPlace() {
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
