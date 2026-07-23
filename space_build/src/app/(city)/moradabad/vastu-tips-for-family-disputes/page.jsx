import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu Tips for Family Disputes | Space Build",
  description:
    "Explore Vastu tips for reducing family disputes with Space Build. Learn home layout, colors, placements & remedies for a peaceful household.",
  keywords:
    "vastu tips for family disputes, vastu for family harmony, vastu remedies for arguments, Space Build vastu consultation, vastu for peaceful home, vastu dosh for family conflict, vastu tips for home Moradabad, vastu for household harmony, vastu remedies for home, vastu for joint family",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-tips-for-family-disputes",
  },
  openGraph: {
    title: "Vastu Tips for Family Disputes | Space Build",
    description:
      "Explore Vastu tips for reducing family disputes with Space Build. Learn home layout, colors, placements & remedies for a peaceful household.",
    url: "https://www.spacebuild.co.in/vastu-tips-for-family-disputes",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Tips for Family Disputes",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Tips for Family Disputes | Space Build",
    description:
      "Explore Vastu tips for reducing family disputes with Space Build. Learn home layout, colors, placements & remedies for a peaceful household.",
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