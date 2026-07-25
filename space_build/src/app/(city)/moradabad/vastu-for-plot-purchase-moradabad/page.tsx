import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu for Plot Purchase in Moradabad | Space Build",
  description:
    "Buying land? Learn Vastu tips for plot purchase in Moradabad with Space Build. Ideal shape, direction, road facing, soil & checklist before buying.",
  keywords:
    "vastu for plot purchase Moradabad, vastu for buying land, plot vastu tips, Space Build vastu consultation, plot direction as per vastu, vastu for plot shape, road facing plot vastu, vastu tips for home Moradabad, vastu checklist for land purchase, plot slope vastu guidelines",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-for-plot-purchase-moradabad",
  },
  openGraph: {
    title: "Vastu for Plot Purchase in Moradabad | Space Build",
    description:
      "Buying land? Learn Vastu tips for plot purchase in Moradabad with Space Build. Ideal shape, direction, road facing, soil & checklist before buying.",
    url: "https://www.spacebuild.co.in/vastu-for-plot-purchase-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu for Plot Purchase in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu for Plot Purchase in Moradabad | Space Build",
    description:
      "Buying land? Learn Vastu tips for plot purchase in Moradabad with Space Build. Ideal shape, direction, road facing, soil & checklist before buying.",
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