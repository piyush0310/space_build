import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "3BHK Interior Design Cost | Space Build Haldwani",

  description:
    "Planning a 3BHK makeover? Understand 3BHK interior design cost with package ranges, room-wise budgets, hidden charges, and saving tips from Space Build Haldwani. Get a free, itemized estimate today.",

  keywords:
    "3BHK interior design cost, 3BHK interior cost, 3BHK interior price, 3BHK interior budget, 3BHK flat interior cost, 3BHK interior cost per sq ft, 3BHK full home interior cost, 3BHK modular kitchen cost, 3BHK wardrobe cost, 3BHK false ceiling cost, 3BHK interior package, budget 3BHK interior, low cost 3BHK interior, 3BHK renovation cost, interior designer Haldwani, interior design Haldwani, Haldwani interiors, turnkey interior cost, interior quote, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/haldwani/3bhk-interior-design-cost",
  },

  openGraph: {
    title:
      "3BHK Interior Design Cost | Space Build Haldwani",
    description:
      "Planning a 3BHK makeover? Understand 3BHK interior design cost with package ranges, room-wise budgets, hidden charges, and saving tips from Space Build Haldwani. Get a free, itemized estimate today.",
    url: "https://www.spacebuild.co.in/haldwani/3bhk-interior-design-cost",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "3BHK Interior Design Cost - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "3BHK Interior Design Cost | Space Build Haldwani",
    description:
      "Planning a 3BHK makeover? Understand 3BHK interior design cost with package ranges, room-wise budgets, hidden charges, and saving tips from Space Build Haldwani. Get a free, itemized estimate today.",
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