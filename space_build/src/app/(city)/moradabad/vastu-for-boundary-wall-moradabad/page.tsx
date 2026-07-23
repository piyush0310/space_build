import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu for Boundary Wall in Moradabad | Space Build",
  description:
    "Learn Vastu tips for boundary wall design in Moradabad with Space Build. Ideal height, direction, materials, colors & remedies for a protected home.",
  keywords:
    "vastu for boundary wall Moradabad, boundary wall vastu tips, vastu for compound wall, Space Build vastu consultation, boundary wall height as per vastu, vastu for plot boundary, boundary wall design ideas, vastu tips for home Moradabad, vastu remedies for boundary wall, compound wall vastu guidelines",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-for-boundary-wall-moradabad",
  },
  openGraph: {
    title: "Vastu for Boundary Wall in Moradabad | Space Build",
    description:
      "Learn Vastu tips for boundary wall design in Moradabad with Space Build. Ideal height, direction, materials, colors & remedies for a protected home.",
    url: "https://www.spacebuild.co.in/vastu-for-boundary-wall-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu for Boundary Wall in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu for Boundary Wall in Moradabad | Space Build",
    description:
      "Learn Vastu tips for boundary wall design in Moradabad with Space Build. Ideal height, direction, materials, colors & remedies for a protected home.",
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