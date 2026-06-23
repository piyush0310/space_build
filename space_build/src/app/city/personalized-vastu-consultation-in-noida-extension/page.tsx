
import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";

import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Personalized Vastu Consultation in Noida Extension, Uttar Pradesh | Vasterior",
  description: "Looking for Personalized Vastu Consultation in Noida Extension, Uttar Pradesh? Vasterior offers customized remedies. Choose Personalized Vastu Consultation in Noida Extension for every type of space.",
  keywords: "personalized vastu consultation, custom vastu services, tailored vastu remedies",
  alternates: {
    canonical: "https://www.vasterior.com/city/personalized-vastu-consultation-in-noida-extension",
  },
  openGraph: {
    type: "website",
    url: "https://www.vasterior.com/city/personalized-vastu-consultation-in-noida-extension",
    title: "Personalized Vastu Consultation in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for Personalized Vastu Consultation in Noida Extension, Uttar Pradesh? Vasterior offers customized remedies. Choose Personalized Vastu Consultation in Noida Extension for every type of space.",
    images: [{
      url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png",
      width: 1200,
      height: 630,
      alt: "Personalized Vastu Consultation in Noida Extension",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vasterior",
    title: "Personalized Vastu Consultation in Noida Extension, Uttar Pradesh | Vasterior",
    description: "Looking for Personalized Vastu Consultation in Noida Extension, Uttar Pradesh? Vasterior offers customized remedies. Choose Personalized Vastu Consultation in Noida Extension for every type of space.",
    images: ["https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/vasteriorlogo_bmzk0r.png"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function PersonalizedVastuConsultationNoidaExtension() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      <Banner />
      <Content />
      
      <Portfolio />
      <Blog />
      <Testimonials />
    </div>
  );
}