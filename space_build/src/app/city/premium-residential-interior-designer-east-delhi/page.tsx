import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";




import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";




export const metadata: Metadata = {
    title: "Premium Residential Interior Designer East Delhi | Vasterior",
    description: "Looking for a Premium Residential Interior Designer East Delhi? Vasterior crafts refined interiors that reflect your lifestyle. Choose the Premium Residential Interior Designer East Delhi — choose Vasterior.",
    keywords: "premium residential interior designer east delhi, luxury home designer east delhi, vasterior interiors east delhi",
    alternates: {
        canonical: "https://www.vasterior.com/city/premium-residential-interior-designer-east-delhi",
    },
    openGraph: {
        type: "website",
        url: "https://www.vasterior.com/city/premium-residential-interior-designer-east-delhi",
        title: "Premium Residential Interior Designer East Delhi | Vasterior",
        description: "Looking for a Premium Residential Interior Designer East Delhi? Vasterior crafts refined interiors that reflect your lifestyle. Choose the Premium Residential Interior Designer East Delhi — choose Vasterior.",
        images: [{
            url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
            width: 1200,
            height: 630,
            alt: "Premium Residential Interior Designer East Delhi",
        }],
    },
    twitter: {
        card: "summary_large_image",
        site: "@vasterior",
        title: "Premium Residential Interior Designer East Delhi | Vasterior",
        description: "Looking for a Premium Residential Interior Designer East Delhi? Vasterior crafts refined interiors that reflect your lifestyle. Choose the Premium Residential Interior Designer East Delhi — choose Vasterior.",
        images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
    },
    icons: { icon: "/favicon.ico" },
};




export default function PremiumResidentialInteriorDesignerEastDelhi() {
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
