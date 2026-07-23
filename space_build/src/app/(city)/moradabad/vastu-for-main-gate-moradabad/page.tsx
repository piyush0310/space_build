import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu for Main Gate in Moradabad | Space Build",
  description:
    "Discover Vastu tips for main gate design in Moradabad with Space Build. Ideal direction, size, materials, colors & remedies for a prosperous home entrance.",
  keywords:
    "vastu for main gate Moradabad, main gate vastu tips, vastu for home entrance, Space Build vastu consultation, main gate direction as per vastu, vastu for main door, main gate design ideas, vastu tips for home Moradabad, vastu remedies for main gate, entrance vastu guidelines",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-for-main-gate-moradabad",
  },
  openGraph: {
    title: "Vastu for Main Gate in Moradabad | Space Build",
    description:
      "Discover Vastu tips for main gate design in Moradabad with Space Build. Ideal direction, size, materials, colors & remedies for a prosperous home entrance.",
    url: "https://www.spacebuild.co.in/vastu-for-main-gate-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu for Main Gate in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu for Main Gate in Moradabad | Space Build",
    description:
      "Discover Vastu tips for main gate design in Moradabad with Space Build. Ideal direction, size, materials, colors & remedies for a prosperous home entrance.",
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