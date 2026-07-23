import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu for Pooja Room in Moradabad | Space Build",
  description:
    "Learn the best Vastu tips for pooja room design in Moradabad with Space Build. Ideal direction, idol placement, colors & remedies for a positive home.",
  keywords:
    "vastu for pooja room Moradabad, pooja room vastu tips, vastu for temple room, Space Build vastu consultation, pooja room direction as per vastu, idol placement vastu, vastu colors for pooja room, vastu tips for home Moradabad, pooja room design ideas, vastu remedies for pooja room",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-for-pooja-room-moradabad",
  },
  openGraph: {
    title: "Vastu for Pooja Room in Moradabad | Space Build",
    description:
      "Learn the best Vastu tips for pooja room design in Moradabad with Space Build. Ideal direction, idol placement, colors & remedies for a positive home.",
    url: "https://www.spacebuild.co.in/vastu-for-pooja-room-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu for Pooja Room in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu for Pooja Room in Moradabad | Space Build",
    description:
      "Learn the best Vastu tips for pooja room design in Moradabad with Space Build. Ideal direction, idol placement, colors & remedies for a positive home.",
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