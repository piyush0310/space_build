import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Interior Design Packages Affordable | Space Build Haldwani",

  description:
    "Explore affordable interior design packages from Space Build Haldwani. Choose from essential, standard, and premium plans with clear inclusions, honest pricing, and quality finishes. Book a free consultation today.",

  keywords:
    "interior design packages affordable, budget interior packages, home interior packages, low cost interior design, turnkey interior package, 1BHK interior package, 2BHK interior package, 3BHK interior package, modular kitchen package, wardrobe package, false ceiling package, living room interior, bedroom interior, office interior package, interior design Haldwani, interior designer Haldwani, Haldwani interiors, affordable home makeover, interior quote, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/haldwani/interior-design-packages-affordable",
  },

  openGraph: {
    title:
      "Interior Design Packages Affordable | Space Build Haldwani",
    description:
      "Explore affordable interior design packages from Space Build Haldwani. Choose from essential, standard, and premium plans with clear inclusions, honest pricing, and quality finishes. Book a free consultation today.",
    url: "https://www.spacebuild.co.in/haldwani/interior-design-packages-affordable",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Affordable Interior Design Packages - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Interior Design Packages Affordable | Space Build Haldwani",
    description:
      "Explore affordable interior design packages from Space Build Haldwani. Choose from essential, standard, and premium plans with clear inclusions, honest pricing, and quality finishes. Book a free consultation today.",
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