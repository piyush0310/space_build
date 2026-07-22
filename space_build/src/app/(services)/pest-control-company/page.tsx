import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";
export const metadata = {
  title:
    "Pest Control Company | Trusted Experts for Safe, Effective Pest Removal",
  description:
    "Looking for a reliable pest control company? Get expert inspection, treatment, and prevention services for homes and businesses. Safe, effective, and long-lasting results.",
  keywords:
    "pest control company, professional pest control services, termite control company, rodent control services, commercial pest control, residential pest control company, exterminator services, eco-friendly pest control, pest control near me, licensed pest control experts, bed bug treatment company, pest management services, best pest control company",
  alternates: {
    canonical: "https://www.spacebuild.co.in/pest-control-company",
  },
  openGraph: {
    title:
      "Pest Control Company | Trusted Experts for Safe, Effective Pest Removal",
    description:
      "Looking for a reliable pest control company? Get expert inspection, treatment, and prevention services for homes and businesses. Safe, effective, and long-lasting results.",
    url: "https://www.spacebuild.co.in/pest-control-company",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Pest Control Company",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pest Control Company | Trusted Experts for Safe, Effective Pest Removal",
    description:
      "Looking for a reliable pest control company? Get expert inspection, treatment, and prevention services for homes and businesses. Safe, effective, and long-lasting results.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },
  icons: {
    icon: "/favicon-v2.ico",
  },
};
export default function Page() {
  return (
    <>
      <Banner />
      <Content />
      <Portfolio />
    </>
  );
}