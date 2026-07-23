import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu for Factory/Industry in Moradabad | Space Build",
  description:
    "Learn Vastu tips for factories and industrial units in Moradabad with Space Build. Ideal direction, machinery placement & remedies for smooth operations.",
  keywords:
    "vastu for factory Moradabad, vastu for industry Moradabad, industrial vastu tips, Space Build vastu consultation, factory direction as per vastu, machinery placement vastu, vastu for manufacturing unit, vastu tips for factory Moradabad, vastu remedies for industry, warehouse vastu guidelines",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-for-factory-industry-moradabad",
  },
  openGraph: {
    title: "Vastu for Factory/Industry in Moradabad | Space Build",
    description:
      "Learn Vastu tips for factories and industrial units in Moradabad with Space Build. Ideal direction, machinery placement & remedies for smooth operations.",
    url: "https://www.spacebuild.co.in/vastu-for-factory-industry-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu for Factory/Industry in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu for Factory/Industry in Moradabad | Space Build",
    description:
      "Learn Vastu tips for factories and industrial units in Moradabad with Space Build. Ideal direction, machinery placement & remedies for smooth operations.",
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