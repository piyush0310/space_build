import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
    title: "Modern Farmhouse Interiors East Delhi | Vasterior",
    description: "Looking for Modern Farmhouse Interiors East Delhi? Vasterior blends rustic charm with contemporary elegance. Choose Modern Farmhouse Interiors East Delhi — choose Vasterior.",
    keywords: "modern farmhouse interiors east delhi, farmhouse interior design east delhi, vasterior farmhouse interiors",
    alternates: {
        canonical: "https://www.vasterior.com/city/modern-farmhouse-interiors-east-delhi/",
    },
    openGraph: {
        type: "website",
        url: "https://www.vasterior.com/city/modern-farmhouse-interiors-east-delhi/",
        title: "Modern Farmhouse Interiors East Delhi | Vasterior",
        description: "Looking for Modern Farmhouse Interiors East Delhi? Vasterior blends rustic charm with contemporary elegance. Choose Modern Farmhouse Interiors East Delhi — choose Vasterior.",
        images: [{
            url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
            width: 1200,
            height: 630,
            alt: "Modern Farmhouse Interiors East Delhi",
        }],
    },
    twitter: {
        card: "summary_large_image",
        site: "@vasterior",
        title: "Modern Farmhouse Interiors East Delhi | Vasterior",
        description: "Looking for Modern Farmhouse Interiors East Delhi? Vasterior blends rustic charm with contemporary elegance. Choose Modern Farmhouse Interiors East Delhi — choose Vasterior.",
        images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
    },
    icons: { icon: "/favicon.ico" },
};

export default function ModernFarmhouseInteriorsEastDelhi() {
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
