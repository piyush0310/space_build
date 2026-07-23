import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu for Duplex House in Moradabad | Space Build",
  description:
    "Learn Vastu tips for duplex house design in Moradabad with Space Build. Ideal floor layout, staircase, room placement & remedies for balanced living.",
  keywords:
    "vastu for duplex house Moradabad, duplex house vastu tips, vastu for two floor house, Space Build vastu consultation, duplex staircase vastu, vastu for ground and first floor, vastu tips for home Moradabad, vastu remedies for duplex, duplex house design ideas, vastu for multi floor home",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-for-duplex-house-moradabad",
  },
  openGraph: {
    title: "Vastu for Duplex House in Moradabad | Space Build",
    description:
      "Learn Vastu tips for duplex house design in Moradabad with Space Build. Ideal floor layout, staircase, room placement & remedies for balanced living.",
    url: "https://www.spacebuild.co.in/vastu-for-duplex-house-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu for Duplex House in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu for Duplex House in Moradabad | Space Build",
    description:
      "Learn Vastu tips for duplex house design in Moradabad with Space Build. Ideal floor layout, staircase, room placement & remedies for balanced living.",
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