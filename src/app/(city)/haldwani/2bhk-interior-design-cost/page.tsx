
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "2BHK Interior Design Cost | Space Build Haldwani",

  description:
    "Planning a 2BHK makeover? Understand 2BHK interior design cost with package ranges, room-wise budgets, hidden charges, and saving tips from Space Build Haldwani. Get a free, itemized estimate today.",

  keywords:
    "2BHK interior design cost, 2BHK interior cost, 2BHK interior price, 2BHK interior budget, 2BHK flat interior cost, 2BHK interior cost per sq ft, 2BHK full home interior cost, 2BHK modular kitchen cost, 2BHK wardrobe cost, 2BHK false ceiling cost, 2BHK interior package, budget 2BHK interior, low cost 2BHK interior, 2BHK renovation cost, interior designer Haldwani, interior design Haldwani, Haldwani interiors, turnkey interior cost, interior quote, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/2bhk-interior-design-cost-haldwani",
  },

  openGraph: {
    title: "2BHK Interior Design Cost | Space Build Haldwani",
    description:
      "Planning a 2BHK makeover? Understand 2BHK interior design cost with package ranges, room-wise budgets, hidden charges, and saving tips from Space Build Haldwani. Get a free, itemized estimate today.",
    url: "https://www.spacebuild.co.in/2bhk-interior-design-cost-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "2BHK Interior Design Cost - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "2BHK Interior Design Cost | Space Build Haldwani",
    description:
      "Planning a 2BHK makeover? Understand 2BHK interior design cost with package ranges, room-wise budgets, hidden charges, and saving tips from Space Build Haldwani. Get a free, itemized estimate today.",
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
