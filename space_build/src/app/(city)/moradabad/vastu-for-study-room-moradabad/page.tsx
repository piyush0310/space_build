import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu for Study Room in Moradabad | Space Build",
  description:
    "Learn Vastu tips for study room design in Moradabad with Space Build. Ideal direction, desk placement, colors, lighting & remedies for better focus.",
  keywords:
    "vastu for study room Moradabad, study room vastu tips, vastu for study table, Space Build vastu consultation, study room direction as per vastu, vastu for children study room, study room design ideas, vastu tips for home Moradabad, vastu remedies for study room, study table placement vastu",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-for-study-room-moradabad",
  },
  openGraph: {
    title: "Vastu for Study Room in Moradabad | Space Build",
    description:
      "Learn Vastu tips for study room design in Moradabad with Space Build. Ideal direction, desk placement, colors, lighting & remedies for better focus.",
    url: "https://www.spacebuild.co.in/vastu-for-study-room-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu for Study Room in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu for Study Room in Moradabad | Space Build",
    description:
      "Learn Vastu tips for study room design in Moradabad with Space Build. Ideal direction, desk placement, colors, lighting & remedies for better focus.",
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