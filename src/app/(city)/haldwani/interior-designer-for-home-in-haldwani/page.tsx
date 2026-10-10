import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Interior Designer for Home in Haldwani | Move-In Planning Calendar 2026",

  description:
    "Plan your home interiors in Haldwani backward from move-in day: decision deadlines, material lead times, owner tasks, festival and monsoon buffers, costs and designer hiring checks.",

  keywords:
    "Interior designer for home in Haldwani, home interior planning, move-in deadline, interior timeline, material lead time, festival deadline interiors, home interior checklist, modular kitchen timeline, interior budget, interior project schedule",

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
    canonical:
      "https://www.spacebuild.co.in/haldwani/interior-designer-for-home-in-haldwani",
  },

  openGraph: {
    title:
      "Interior Designer for Home in Haldwani | Move-In Planning Calendar 2026",
    description:
      "Plan your home interiors in Haldwani backward from move-in day: decision deadlines, material lead times, owner tasks, festival and monsoon buffers, costs and designer hiring checks.",
    url: "https://www.spacebuild.co.in/haldwani/interior-designer-for-home-in-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Designer for Home in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Interior Designer for Home in Haldwani | Move-In Planning Calendar 2026",
    description:
      "Plan your home interiors in Haldwani backward from move-in day: decision deadlines, material lead times, owner tasks, festival and monsoon buffers, costs and designer hiring checks.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    "geo.placename": "Haldwani, Uttarakhand",
    "geo.region": "IN-UT",
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