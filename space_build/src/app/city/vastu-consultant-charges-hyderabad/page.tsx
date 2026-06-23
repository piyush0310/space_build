import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Vastu Consultant Charges Hyderabad | Vasterior",
  description:
    "Vastu Consultant Charges Hyderabad providing transparent pricing and affordable consultation packages.",
  keywords:
    "vastu consultant charges hyderabad, vastu fees structure hyderabad, consultation pricing",
  alternates: {
    canonical: "https://www.vasterior.com/city/vastu-consultant-charges-hyderabad",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/vastu-consultant-charges-hyderabad",
    title: "Vastu Consultant Charges Hyderabad | Vasterior",
    description:
      "Vastu Consultant Charges Hyderabad providing transparent pricing and affordable consultation packages.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Vastu Consultant Charges Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Vastu Consultant Charges Hyderabad | Vasterior",
    description:
      "Vastu Consultant Charges Hyderabad providing transparent pricing and affordable consultation packages.",
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
