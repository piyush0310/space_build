
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Home Interior Designer in Haldwani | Plan by Family Type and Life Stage 2026",

  description:
    "Find a home interior designer in Haldwani and plan by life stage: newlyweds, young families, joint families, elders and work-from-home setups, with costs, room priorities and hiring checks.",

  keywords: [
    "Home interior designer Haldwani",
    "home interior design",
    "family home interiors",
    "flat interior",
    "house interior",
    "kids room design",
    "elderly friendly interiors",
    "work from home study",
    "modular kitchen",
    "wardrobe design",
    "Vastu home interiors",
    "budget home interiors",
    "living room design",
  ],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/home-interior-designer-haldwani",
  },

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title:
      "Home Interior Designer in Haldwani | Plan by Family Type and Life Stage 2026",
    description:
      "Find a home interior designer in Haldwani and plan by life stage: newlyweds, young families, joint families, elders and work-from-home setups, with costs, room priorities and hiring checks.",
    url: "https://www.spacebuild.co.in/haldwani/home-interior-designer-haldwani",
    siteName: "Space Build",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Home Interior Designer in Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Home Interior Designer in Haldwani | Plan by Family Type and Life Stage 2026",
    description:
      "Find a home interior designer in Haldwani and plan by life stage: newlyweds, young families, joint families, elders and work-from-home setups, with costs, room priorities and hiring checks.",
    images: ["/og-image.jpg"],
  },

  other: {
    "geo.placename": "Haldwani, Uttarakhand, India",
    "geo.region": "IN-UT",
    "geo.country": "IN",
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
