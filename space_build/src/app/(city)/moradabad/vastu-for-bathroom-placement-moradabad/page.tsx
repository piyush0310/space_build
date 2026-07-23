import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu for Bathroom Placement in Moradabad | Space Build",
  description:
    "Learn Vastu tips for bathroom placement in Moradabad with Space Build. Ideal direction, layout, colors, fixtures & remedies for a balanced home.",
  keywords:
    "vastu for bathroom placement Moradabad, bathroom vastu tips, vastu for toilet direction, Space Build vastu consultation, bathroom direction as per vastu, vastu for attached bathroom, bathroom design ideas, vastu tips for home Moradabad, vastu remedies for bathroom, toilet placement vastu guidelines",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-for-bathroom-placement-moradabad",
  },
  openGraph: {
    title: "Vastu for Bathroom Placement in Moradabad | Space Build",
    description:
      "Learn Vastu tips for bathroom placement in Moradabad with Space Build. Ideal direction, layout, colors, fixtures & remedies for a balanced home.",
    url: "https://www.spacebuild.co.in/vastu-for-bathroom-placement-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu for Bathroom Placement in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu for Bathroom Placement in Moradabad | Space Build",
    description:
      "Learn Vastu tips for bathroom placement in Moradabad with Space Build. Ideal direction, layout, colors, fixtures & remedies for a balanced home.",
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