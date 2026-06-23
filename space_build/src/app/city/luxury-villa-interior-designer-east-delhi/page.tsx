import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
    title: "Luxury Villa Interior Designer East Delhi | Vasterior",
    description: "Looking for a Luxury Villa Interior Designer East Delhi? Vasterior creates bespoke interiors that define opulence. Choose the Luxury Villa Interior Designer East Delhi — choose Vasterior.",
    keywords: "luxury villa interior designer east delhi, villa interior design east delhi, vasterior villa interiors",
    alternates: {
        canonical: "https://www.vasterior.com/city/luxury-villa-interior-designer-east-delhi/",
    },
    openGraph: {
        type: "website",
        url: "https://www.vasterior.com/city/luxury-villa-interior-designer-east-delhi/",
        title: "Luxury Villa Interior Designer East Delhi | Vasterior",
        description: "Looking for a Luxury Villa Interior Designer East Delhi? Vasterior creates bespoke interiors that define opulence. Choose the Luxury Villa Interior Designer East Delhi — choose Vasterior.",
        images: [{
            url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
            width: 1200,
            height: 630,
            alt: "Luxury Villa Interior Designer East Delhi",
        }],
    },
    twitter: {
        card: "summary_large_image",
        site: "@vasterior",
        title: "Luxury Villa Interior Designer East Delhi | Vasterior",
        description: "Looking for a Luxury Villa Interior Designer East Delhi? Vasterior creates bespoke interiors that define opulence. Choose the Luxury Villa Interior Designer East Delhi — choose Vasterior.",
        images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
    },
    icons: { icon: "/favicon.ico" },
};

export default function LuxuryVillaInteriorDesignerEastDelhi() {
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
