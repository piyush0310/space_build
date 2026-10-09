import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "2D House Plan Designer in Kashipur | Space Build",

  description:
    "Looking for a professional 2D house plan designer in Kashipur? Space Build offers Vastu-friendly, functional, and affordable 2D floor plans for homes, villas, duplexes, and commercial spaces.",

  keywords:
    "2D house plan designer in Kashipur, house plan designer Kashipur, 2D floor plan design Kashipur, home plan design Kashipur, Vastu house plan Kashipur, residential plan designer Kashipur, best house plan designer near me, 2D layout design Kashipur, house map design Kashipur, floor plan consultant Kashipur, architect for house plan Kashipur, house design company Kashipur, affordable house plan Kashipur, custom home plan Kashipur, duplex house plan Kashipur, 2 BHK house plan Kashipur, 3 BHK house plan Kashipur, Vastu compliant floor plan, house plan designer Uttarakhand, Space Build Kashipur, home map designer Kashipur, front elevation and floor plan Kashipur",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Space Build",
    },
  ],

  alternates: {
    canonical: "https://www.spacebuild.co.in/kashipur/2d-house-plan-designer-in-kashipur",
  },

  openGraph: {
    title: "2D House Plan Designer in Kashipur | Space Build",
    description:
      "Looking for a professional 2D house plan designer in Kashipur? Space Build offers Vastu-friendly, functional, and affordable 2D floor plans for homes, villas, duplexes, and commercial spaces.",
    url: "https://www.spacebuild.co.in/kashipur/2d-house-plan-designer-in-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "2D House Plan Designer in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "2D House Plan Designer in Kashipur | Space Build",
    description:
      "Space Build offers Vastu-friendly, functional, and affordable 2D house plans for homes, villas, duplexes, and commercial spaces in Kashipur.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "2D House Plan Designer in Kashipur | Space Build",
    "geo.placename": "Kashipur, Uttarakhand",
    "geo.region": "IN-UK",
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