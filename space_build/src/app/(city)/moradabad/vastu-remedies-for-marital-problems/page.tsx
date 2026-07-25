import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu Remedies for Marital Problems | Space Build",
  description:
    "Explore traditional Vastu remedies for marital problems with Space Build. Learn bedroom direction, colors, placements & tips for a harmonious home.",
  keywords:
    "vastu remedies for marital problems, vastu for marriage harmony, bedroom vastu for couples, Space Build vastu consultation, vastu for relationship problems, vastu tips for happy marriage, vastu for master bedroom, vastu remedies for home, vastu dosh for relationships, vastu for couples bedroom",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-remedies-for-marital-problems",
  },
  openGraph: {
    title: "Vastu Remedies for Marital Problems | Space Build",
    description:
      "Explore traditional Vastu remedies for marital problems with Space Build. Learn bedroom direction, colors, placements & tips for a harmonious home.",
    url: "https://www.spacebuild.co.in/vastu-remedies-for-marital-problems",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Remedies for Marital Problems",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Remedies for Marital Problems | Space Build",
    description:
      "Explore traditional Vastu remedies for marital problems with Space Build. Learn bedroom direction, colors, placements & tips for a harmonious home.",
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