import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu for Bedroom in Moradabad | Space Build",
  description:
    "Discover the best Vastu tips for bedroom design in Moradabad with Space Build. Learn ideal directions, colors, furniture placement & Vastu remedies.",
  keywords:
    "vastu for bedroom Moradabad, bedroom vastu tips, vastu for master bedroom, Space Build vastu consultation, bedroom direction as per vastu, vastu bed placement, vastu colors for bedroom, vastu tips for home Moradabad, vastu for kids bedroom, vastu remedies for bedroom",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-for-bedroom-moradabad",
  },
  openGraph: {
    title: "Vastu for Bedroom in Moradabad | Space Build",
    description:
      "Discover the best Vastu tips for bedroom design in Moradabad with Space Build. Learn ideal directions, colors, furniture placement & Vastu remedies.",
    url: "https://www.spacebuild.co.in/vastu-for-bedroom-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu for Bedroom in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu for Bedroom in Moradabad | Space Build",
    description:
      "Discover the best Vastu tips for bedroom design in Moradabad with Space Build. Learn ideal directions, colors, furniture placement & Vastu remedies.",
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