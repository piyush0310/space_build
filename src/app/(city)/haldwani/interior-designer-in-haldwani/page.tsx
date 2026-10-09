
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Interior Designers in Haldwani | Market Guide to Styles, Services and Costs 2026",
  description:
    "Understand the interior designers in Haldwani market: who offers what, project types by area, popular trends, seasonal timing, costs and checks before you choose a studio.",
  keywords: [
    "interior designers in Haldwani",
    "interior design services Haldwani",
    "home interiors Haldwani",
    "flat interior Haldwani",
    "villa interior Haldwani",
    "modular kitchen Haldwani",
    "wardrobe design Haldwani",
    "office interiors Haldwani",
    "shop interiors Haldwani",
    "Vastu interiors Haldwani",
    "renovation interiors Haldwani",
    "turnkey interiors Haldwani",
    "budget interiors Haldwani",
    "luxury interiors Haldwani",
  ],
  alternates: {
    canonical: "https://www.spacebuild.co.in/haldwani/interior-designers-haldwani",
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
      "Interior Designers in Haldwani | Market Guide to Styles, Services and Costs 2026",
    description:
      "Understand the interior designers in Haldwani market: who offers what, project types by area, popular trends, seasonal timing, costs and checks before you choose a studio.",
    url: "https://www.spacebuild.co.in/haldwani/interior-designers-haldwani",
    siteName: "Space Build",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Designers in Haldwani: Styles, Services and Costs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Interior Designers in Haldwani | Market Guide to Styles, Services and Costs 2026",
    description:
      "Understand the interior designers in Haldwani market: who offers what, project types by area, popular trends, seasonal timing, costs and checks before you choose a studio.",
    images: ["/og-image.jpg"],
  },
  geo: {
    placename: "Haldwani, Uttarakhand, India",
    region: "IN-UT",
    country: "IN",
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