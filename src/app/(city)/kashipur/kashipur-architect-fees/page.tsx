import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Kashipur Architect Fees 2026 – Complete Cost Guide | Space Build",
  description:
    "Explore transparent Kashipur architect fees for 2026 — residential, commercial and industrial pricing, fee models, and factors affecting cost. Get an accurate quote from Space Build.",
  keywords:
    "kashipur architect fees, architect fees in kashipur, architect cost kashipur, house design cost kashipur, architect charges per sq ft kashipur, residential architect fees kashipur, commercial architect fees kashipur, industrial architect fees kashipur, best architect in kashipur, vastu architect kashipur, architect consultation fees kashipur, home construction architect cost, building design cost kashipur, architect fee structure india, turnkey architect kashipur, architect for villa design kashipur, space build kashipur, architect near me kashipur, architect fees uttarakhand, house plan cost kashipur, architect drawing charges, structural drawing cost kashipur, vastu consultant kashipur",
  alternates: {
    canonical: "https://www.spacebuild.co.in/kashipur/kashipur-architect-fees",
  },
  openGraph: {
    title: "Kashipur Architect Fees 2026 – Complete Cost Guide | Space Build",
    description:
      "Explore transparent Kashipur architect fees for 2026 — residential, commercial and industrial pricing, fee models, and factors affecting cost. Get an accurate quote from Space Build.",
    url: "https://www.spacebuild.co.in/kashipur/kashipur-architect-fees",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Kashipur Architect Fees 2026 Complete Cost Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashipur Architect Fees 2026 – Complete Cost Guide | Space Build",
    description:
      "Explore transparent Kashipur architect fees for 2026 — residential, commercial and industrial pricing, fee models, and factors affecting cost. Get an accurate quote from Space Build.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
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