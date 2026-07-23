import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu for Staircase in Moradabad | Space Build",
  description:
    "Learn Vastu tips for staircase design in Moradabad with Space Build. Ideal direction, number of steps, materials, colors & remedies for a balanced home.",
  keywords:
    "vastu for staircase Moradabad, staircase vastu tips, vastu for stairs, Space Build vastu consultation, staircase direction as per vastu, number of steps vastu, staircase design ideas, vastu tips for home Moradabad, vastu remedies for staircase, staircase under vastu guidelines",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-for-staircase-moradabad",
  },
  openGraph: {
    title: "Vastu for Staircase in Moradabad | Space Build",
    description:
      "Learn Vastu tips for staircase design in Moradabad with Space Build. Ideal direction, number of steps, materials, colors & remedies for a balanced home.",
    url: "https://www.spacebuild.co.in/vastu-for-staircase-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu for Staircase in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu for Staircase in Moradabad | Space Build",
    description:
      "Learn Vastu tips for staircase design in Moradabad with Space Build. Ideal direction, number of steps, materials, colors & remedies for a balanced home.",
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