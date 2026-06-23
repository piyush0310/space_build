import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
    title: "Custom Luxury Interiors For Villas East Delhi | Vasterior",
    description: "Looking for Custom Luxury Interiors For Villas East Delhi? Vasterior personalizes every detail to suit your taste. Choose Custom Luxury Interiors For Villas East Delhi — choose Vasterior.",
    keywords: "custom luxury interiors for villas east delhi, villa interiors east delhi, vasterior custom interiors",
    alternates: {
        canonical: "https://www.vasterior.com/city/custom-luxury-interiors-for-villas-east-delhi/",
    },
    openGraph: {
        type: "website",
        url: "https://www.vasterior.com/city/custom-luxury-interiors-for-villas-east-delhi/",
        title: "Custom Luxury Interiors For Villas East Delhi | Vasterior",
        description: "Looking for Custom Luxury Interiors For Villas East Delhi? Vasterior personalizes every detail to suit your taste. Choose Custom Luxury Interiors For Villas East Delhi — choose Vasterior.",
        images: [{
            url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
            width: 1200,
            height: 630,
            alt: "Custom Luxury Interiors For Villas East Delhi",
        }],
    },
    twitter: {
        card: "summary_large_image",
        site: "@vasterior",
        title: "Custom Luxury Interiors For Villas East Delhi | Vasterior",
        description: "Looking for Custom Luxury Interiors For Villas East Delhi? Vasterior personalizes every detail to suit your taste. Choose Custom Luxury Interiors For Villas East Delhi — choose Vasterior.",
        images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
    },
    icons: { icon: "/favicon.ico" },
};

export default function CustomLuxuryInteriorsForVillasEastDelhi() {
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
