import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "3BHK Interior Design Trends 2026 | Space Build Haldwani",

  description:
    "Explore the top 3BHK interior design trends 2026, from warm earthy palettes and smart storage to flexible work zones and layered lighting. Practical, budget-aware ideas from Space Build Haldwani. Book a free consultation.",

  keywords:
    "3BHK interior design trends 2026, 2026 home interior trends, 3BHK interior ideas 2026, latest interior trends, modern 3BHK interior, 3BHK colour trends, 3BHK lighting trends, smart home interior, biophilic interior, earthy colour palette, Japandi interior, luxury minimal interior, sustainable interiors, 3BHK false ceiling trends, 3BHK modular kitchen trends, budget trendy interiors, interior designer Haldwani, interior design Haldwani, Haldwani interiors, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/haldwani/3bhk-interior-design-trends-2026",
  },

  openGraph: {
    title:
      "3BHK Interior Design Trends 2026 | Space Build Haldwani",
    description:
      "Explore the top 3BHK interior design trends 2026, from warm earthy palettes and smart storage to flexible work zones and layered lighting. Practical, budget-aware ideas from Space Build Haldwani. Book a free consultation.",
    url: "https://www.spacebuild.co.in/haldwani/3bhk-interior-design-trends-2026",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "3BHK Interior Design Trends 2026 - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "3BHK Interior Design Trends 2026 | Space Build Haldwani",
    description:
      "Explore the top 3BHK interior design trends 2026, from warm earthy palettes and smart storage to flexible work zones and layered lighting. Practical, budget-aware ideas from Space Build Haldwani. Book a free consultation.",
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