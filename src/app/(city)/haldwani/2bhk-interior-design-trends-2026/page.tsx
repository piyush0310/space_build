
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "2BHK Interior Design Trends 2026 | Space Build Haldwani",

  description:
    "Explore the top 2BHK interior design trends 2026, from warm earthy colors and smart storage to biophilic touches and sculptural lighting. Practical, budget-aware ideas from Space Build Haldwani. Book a free consultation.",

  keywords:
    "2BHK interior design trends 2026, 2026 home interior trends, 2BHK interior ideas 2026, latest interior trends, modern 2BHK interior, 2BHK color trends, 2BHK lighting trends, smart home interior, biophilic interior, earthy color palette, Japandi interior, minimalist 2BHK, sustainable interiors, 2BHK false ceiling trends, 2BHK modular kitchen trends, budget trendy interiors, interior designer Haldwani, interior design Haldwani, Haldwani interiors, Space Build Haldwani",

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/2bhk-interior-design-trends-2026-haldwani",
  },

  openGraph: {
    title: "2BHK Interior Design Trends 2026 | Space Build Haldwani",
    description:
      "Explore the top 2BHK interior design trends 2026, from warm earthy colors and smart storage to biophilic touches and sculptural lighting. Practical, budget-aware ideas from Space Build Haldwani. Book a free consultation.",
    url: "https://www.spacebuild.co.in/2bhk-interior-design-trends-2026-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "2BHK Interior Design Trends 2026 - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "2BHK Interior Design Trends 2026 | Space Build Haldwani",
    description:
      "Explore the top 2BHK interior design trends 2026, from warm earthy colors and smart storage to biophilic touches and sculptural lighting. Practical, budget-aware ideas from Space Build Haldwani. Book a free consultation.",
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
