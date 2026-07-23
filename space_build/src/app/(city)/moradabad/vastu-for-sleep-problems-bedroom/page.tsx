import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu for Sleep Problems in Bedroom | Space Build",
  description:
    "Struggling with sleep issues? Explore Vastu tips for bedroom design with Space Build to support better rest, relaxation & peaceful sleep.",
  keywords:
    "vastu for sleep problems, vastu for insomnia, bedroom vastu for better sleep, Space Build vastu consultation, vastu for restful sleep, bed direction for sleep, vastu tips for bedroom, vastu remedies for insomnia, sleep vastu tips, vastu for peaceful bedroom",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-for-sleep-problems-in-bedroom",
  },
  openGraph: {
    title: "Vastu for Sleep Problems in Bedroom | Space Build",
    description:
      "Struggling with sleep issues? Explore Vastu tips for bedroom design with Space Build to support better rest, relaxation & peaceful sleep.",
    url: "https://www.spacebuild.co.in/vastu-for-sleep-problems-in-bedroom",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu for Sleep Problems in Bedroom",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu for Sleep Problems in Bedroom | Space Build",
    description:
      "Struggling with sleep issues? Explore Vastu tips for bedroom design with Space Build to support better rest, relaxation & peaceful sleep.",
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