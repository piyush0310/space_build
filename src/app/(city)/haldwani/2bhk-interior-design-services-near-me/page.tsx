
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "2BHK Interior Design Services Near Me | Space Build Haldwani",

  description:
    "Searching for 2BHK interior design services near me? Space Build Haldwani offers complete design, modular kitchens, wardrobes, ceilings, and turnkey execution with clear pricing. Book a free site visit today.",

  keywords:
    "2BHK interior design services near me, 2BHK interior designer near me, interior designer near me, home interior services near me, 2BHK turnkey interior, 2BHK modular kitchen service, 2BHK wardrobe service, 2BHK false ceiling service, local interior designer, interior design company Haldwani, interior designer Haldwani, interior design Haldwani, Haldwani interiors, 2BHK interior cost, 2BHK interior package, home makeover services, budget interior services, free site visit interior, interior quote, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/2bhk-interior-design-services-near-me",
  },

  openGraph: {
    title: "2BHK Interior Design Services Near Me | Space Build Haldwani",
    description:
      "Searching for 2BHK interior design services near me? Space Build Haldwani offers complete design, modular kitchens, wardrobes, ceilings, and turnkey execution with clear pricing. Book a free site visit today.",
    url: "https://www.spacebuild.co.in/2bhk-interior-design-services-near-me",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "2BHK Interior Design Services Near Me - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "2BHK Interior Design Services Near Me | Space Build Haldwani",
    description:
      "Searching for 2BHK interior design services near me? Space Build Haldwani offers complete design, modular kitchens, wardrobes, ceilings, and turnkey execution with clear pricing. Book a free site visit today.",
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
