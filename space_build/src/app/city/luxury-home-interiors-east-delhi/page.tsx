import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
    title: "Luxury Home Interiors East Delhi | Vasterior",
    description: "Looking for Luxury Home Interiors East Delhi? Vasterior curates refined designs that exude comfort and class. Choose Luxury Home Interiors East Delhi — choose Vasterior.",
    keywords: "luxury home interiors east delhi, home interior design east delhi, vasterior interiors",
    alternates: {
        canonical: "https://www.vasterior.com/city/luxury-home-interiors-east-delhi/",
    },
    openGraph: {
        type: "website",
        url: "https://www.vasterior.com/city/luxury-home-interiors-east-delhi/",
        title: "Luxury Home Interiors East Delhi | Vasterior",
        description: "Looking for Luxury Home Interiors East Delhi? Vasterior curates refined designs that exude comfort and class. Choose Luxury Home Interiors East Delhi — choose Vasterior.",
        images: [{
            url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
            width: 1200,
            height: 630,
            alt: "Luxury Home Interiors East Delhi",
        }],
    },
    twitter: {
        card: "summary_large_image",
        site: "@vasterior",
        title: "Luxury Home Interiors East Delhi | Vasterior",
        description: "Looking for Luxury Home Interiors East Delhi? Vasterior curates refined designs that exude comfort and class. Choose Luxury Home Interiors East Delhi — choose Vasterior.",
        images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
    },
    icons: { icon: "/favicon.ico" },
};

export default function LuxuryHomeInteriorsEastDelhi() {
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
