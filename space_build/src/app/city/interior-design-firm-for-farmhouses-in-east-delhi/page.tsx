import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
    title: "Interior Design Firm For Farmhouses In East Delhi | Vasterior",
    description: "Looking for an Interior Design Firm For Farmhouses In East Delhi? Vasterior brings creativity and balance to every design. Choose the Interior Design Firm For Farmhouses In East Delhi — choose Vasterior.",
    keywords: "interior design firm for farmhouses in east delhi, farmhouse design firm east delhi, vasterior farmhouse interiors",
    alternates: {
        canonical: "https://www.vasterior.com/city/interior-design-firm-for-farmhouses-in-east-delhi/",
    },
    openGraph: {
        type: "website",
        url: "https://www.vasterior.com/city/interior-design-firm-for-farmhouses-in-east-delhi/",
        title: "Interior Design Firm For Farmhouses In East Delhi | Vasterior",
        description: "Looking for an Interior Design Firm For Farmhouses In East Delhi? Vasterior brings creativity and balance to every design. Choose the Interior Design Firm For Farmhouses In East Delhi — choose Vasterior.",
        images: [{
            url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
            width: 1200,
            height: 630,
            alt: "Interior Design Firm For Farmhouses In East Delhi",
        }],
    },
    twitter: {
        card: "summary_large_image",
        site: "@vasterior",
        title: "Interior Design Firm For Farmhouses In East Delhi | Vasterior",
        description: "Looking for an Interior Design Firm For Farmhouses In East Delhi? Vasterior brings creativity and balance to every design. Choose the Interior Design Firm For Farmhouses In East Delhi — choose Vasterior.",
        images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
    },
    icons: { icon: "/favicon.ico" },
};

export default function InteriorDesignFirmForFarmhousesInEastDelhi() {
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
