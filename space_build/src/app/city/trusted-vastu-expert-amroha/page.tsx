import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";

import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Trusted Vastu Expert Amroha, Uttar Pradesh| Vasterior",
  description:
    "Trusted Vastu Expert Amroha by Vasterior offering reliable Vastu guidance and practical remedies in Amroha, UP.",
  keywords:
    "trusted vastu expert amroha, experienced vastu expert amroha, reliable vastu consultant amroha",
  alternates: {
    canonical: "https://www.vasterior.com/city/trusted-vastu-expert-amroha",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/trusted-vastu-expert-amroha",
    title: "Trusted Vastu Expert Amroha, Uttar Pradesh| Vasterior",
    description:
      "Trusted Vastu Expert Amroha by Vasterior offering reliable Vastu guidance and practical remedies in Amroha, UP.",
    images: [
      {
        url: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
        width: 1200,
        height: 630,
        alt: "Trusted Vastu Expert Amroha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Trusted Vastu Expert Amroha, Uttar Pradesh| Vasterior",
    description:
      "Trusted Vastu Expert Amroha by Vasterior offering reliable Vastu guidance and practical remedies in Amroha, UP.",
    images: [
      "https://res.cloudinary.com/dkpejqlby/image/upload/v1763234632/Vastu_ps0zqy_yz7tk9.png",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function TrustedVastuExpertAmroha() {
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
