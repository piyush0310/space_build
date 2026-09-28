import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best House Architect in Kashipur | Spacebuild – Residential Design Experts",
  description:
    "Looking for a trusted house architect in Kashipur? Spacebuild offers custom home design, Vastu-compliant planning & 3D elevation services. Get a free consultation today!",
  keywords:
    "house architect in Kashipur, best architect in Kashipur, home design Kashipur, residential architect Kashipur, house construction Kashipur, building design company Kashipur, Vastu architect Kashipur, house plan design Kashipur, 3D elevation design Kashipur, interior designer Kashipur, civil engineer Kashipur, duplex house design Kashipur, bungalow architect Kashipur, house map design Kashipur, front elevation design Kashipur, architect near me Kashipur, house construction company Uttarakhand, affordable house architect Kashipur, modern home design Kashipur, architect for house renovation Kashipur, structural design Kashipur, Spacebuild Kashipur architect, low budget house design Kashipur, architect consultation Kashipur",

  alternates: {
    canonical: "https://www.spacebuild.co.in/house-architect-kashipur",
  },

  openGraph: {
    title:
      "Best House Architect in Kashipur | Spacebuild – Residential Design Experts",
    description:
      "Looking for a trusted house architect in Kashipur? Spacebuild offers custom home design, Vastu-compliant planning & 3D elevation services. Get a free consultation today!",
    url: "https://www.spacebuild.co.in/house-architect-kashipur",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Spacebuild - Best House Architect in Kashipur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best House Architect in Kashipur | Spacebuild – Residential Design Experts",
    description:
      "Looking for a trusted house architect in Kashipur? Spacebuild offers custom home design, Vastu-compliant planning & 3D elevation services. Get a free consultation today!",
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