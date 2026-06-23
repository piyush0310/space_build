import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
    title: "Premium Villa Interior Design With Vastu In East Delhi | Vasterior",
    description: "Looking for Premium Villa Interior Design With Vastu In East Delhi? Vasterior merges aesthetics with positive energy. Choose Premium Villa Interior Design With Vastu In East Delhi — choose Vasterior.",
    keywords: "premium villa interior design with vastu in east delhi, vastu villa interiors east delhi, vasterior vastu interior design",
    alternates: {
        canonical: "https://www.vasterior.com/city/premium-villa-interior-design-with-vastu-in-east-delhi/",
    },
    openGraph: {
        type: "website",
        url: "https://www.vasterior.com/city/premium-villa-interior-design-with-vastu-in-east-delhi/",
        title: "Premium Villa Interior Design With Vastu In East Delhi | Vasterior",
        description: "Looking for Premium Villa Interior Design With Vastu In East Delhi? Vasterior merges aesthetics with positive energy. Choose Premium Villa Interior Design With Vastu In East Delhi — choose Vasterior.",
        images: [{
            url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
            width: 1200,
            height: 630,
            alt: "Premium Villa Interior Design With Vastu In East Delhi",
        }],
    },
    twitter: {
        card: "summary_large_image",
        site: "@vasterior",
        title: "Premium Villa Interior Design With Vastu In East Delhi | Vasterior",
        description: "Looking for Premium Villa Interior Design With Vastu In East Delhi? Vasterior merges aesthetics with positive energy. Choose Premium Villa Interior Design With Vastu In East Delhi — choose Vasterior.",
        images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
    },
    icons: { icon: "/favicon.ico" },
};

export default function PremiumVillaInteriorDesignWithVastuInEastDelhi() {
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
