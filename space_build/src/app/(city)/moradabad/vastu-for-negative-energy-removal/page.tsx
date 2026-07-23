import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu for Negative Energy Removal | Space Build",
  description:
    "Learn Vastu tips for negative energy removal with Space Build. Discover signs, causes, remedies & practices for a positive, balanced home.",
  keywords:
    "vastu for negative energy removal, remove negative energy from home, vastu dosh remedies, Space Build vastu consultation, vastu tips for positive energy, home cleansing vastu, vastu remedies for home, negative energy signs at home, vastu for peaceful home, vastu tips for home Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-for-negative-energy-removal",
  },
  openGraph: {
    title: "Vastu for Negative Energy Removal | Space Build",
    description:
      "Learn Vastu tips for negative energy removal with Space Build. Discover signs, causes, remedies & practices for a positive, balanced home.",
    url: "https://www.spacebuild.co.in/vastu-for-negative-energy-removal",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu for Negative Energy Removal",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu for Negative Energy Removal | Space Build",
    description:
      "Learn Vastu tips for negative energy removal with Space Build. Discover signs, causes, remedies & practices for a positive, balanced home.",
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