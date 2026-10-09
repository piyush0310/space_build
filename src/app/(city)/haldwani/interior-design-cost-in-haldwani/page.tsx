
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Interior Design Cost in Haldwani | Budget Planner with Worked Examples 2026",
  description:
    "Plan your interior design cost in Haldwani with worked examples, budget splits, phase plans, what-if scenarios and checks that keep your final bill close to the quote.",
  keywords: [
    "interior design cost in Haldwani",
    "interior budget planner Haldwani",
    "interior design cost per sq ft Haldwani",
    "2BHK interior budget Haldwani",
    "3BHK interior budget Haldwani",
    "modular kitchen cost Haldwani",
    "wardrobe cost Haldwani",
    "phased interior design Haldwani",
    "interior budget split Haldwani",
    "interior cost control Haldwani",
    "interior payment plan Haldwani",
    "home interior cost estimate Haldwani",
  ],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/interior-design-cost-haldwani",
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
      "Interior Design Cost in Haldwani | Budget Planner with Worked Examples 2026",
    description:
      "Plan your interior design cost in Haldwani with worked examples, budget splits, phase plans, what-if scenarios and checks that keep your final bill close to the quote.",
    url: "https://www.spacebuild.co.in/haldwani/interior-design-cost-haldwani",
    siteName: "Space Build",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Interior design cost and budget planning in Haldwani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Interior Design Cost in Haldwani | Budget Planner with Worked Examples 2026",
    description:
      "Plan your Haldwani interior budget with worked examples, budget splits, phased plans and practical cost-control checks.",
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