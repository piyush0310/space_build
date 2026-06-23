import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";





import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";





export const metadata: Metadata = {
    title: "Interior Designing Services In East Delhi | Vasterior",
    description: "Looking for Interior Designing Services In East Delhi? Vasterior provides innovative solutions tailored to your needs. Choose Interior Designing Services In East Delhi — choose Vasterior.",
    keywords: "interior designing services in east delhi, best interior designer services east delhi, vasterior interiors",
    alternates: {
        canonical: "https://www.vasterior.com/city/interior-designing-services-in-east-delhi",
    },
    openGraph: {
        type: "website",
        url: "https://www.vasterior.com/city/interior-designing-services-in-east-delhi",
        title: "Interior Designing Services In East Delhi | Vasterior",
        description: "Looking for Interior Designing Services In East Delhi? Vasterior provides innovative solutions tailored to your needs. Choose Interior Designing Services In East Delhi — choose Vasterior.",
        images: [{
            url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
            width: 1200,
            height: 630,
            alt: "Interior Designing Services In East Delhi",
        }],
    },
    twitter: {
        card: "summary_large_image",
        site: "@vasterior",
        title: "Interior Designing Services In East Delhi | Vasterior",
        description: "Looking for Interior Designing Services In East Delhi? Vasterior provides innovative solutions tailored to your needs. Choose Interior Designing Services In East Delhi — choose Vasterior.",
        images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
    },
    icons: { icon: "/favicon.ico" },
};





export default function InteriorDesigningServicesInEastDelhi() {
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
