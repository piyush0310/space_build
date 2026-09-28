import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Top House Map Designer in Kashipur | Space Build",
  description:
    "Looking for the top house map designer in Kashipur? Space Build offers Vastu-based house plans, 3D elevation and interiors. Book your consultation today.",
  keywords:
    "house map designer in Kashipur, top house map designer in Kashipur, house map design Kashipur, home map designer Kashipur, house plan designer Kashipur, Vastu house map Kashipur, Vastu based house plan, house floor plan design, 2D floor plan design, 3D elevation design Kashipur, home design services Kashipur, residential house planning, architect in Kashipur, interior designer in Kashipur, Vastu consultant in Kashipur, Vastu construction services, modern house design, custom home plan, duplex house map design, villa and bungalow design, house renovation planning, modular kitchen Kashipur, house naksha design, ghar ka naksha Kashipur, Space Build Kashipur",
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/house-map-designer-in-kashipur",
  },
  openGraph: {
    title: "Top House Map Designer in Kashipur | Space Build",
    description:
      "Looking for the top house map designer in Kashipur? Space Build offers Vastu-based house plans, 3D elevation and interiors. Book your consultation today.",
    url: "https://www.spacebuild.co.in/house-map-designer-in-kashipur",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Top House Map Designer in Kashipur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top House Map Designer in Kashipur | Space Build",
    description:
      "Looking for the top house map designer in Kashipur? Space Build offers Vastu-based house plans, 3D elevation and interiors. Book your consultation today.",
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