import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Civil Contractor Kashipur Price List | Rate Card Guide",
  description:
    "Looking for a civil contractor Kashipur price list? Learn the rate-card format, units, inclusions, validity rules and checks that make prices comparable.",
  keywords: [
    "civil contractor Kashipur price list",
    "civil contractor price list Kashipur",
    "civil contractor rate card",
    "construction rate card format",
    "civil construction rates Kashipur",
    "construction pricing units",
    "construction rate per square foot",
    "item-wise construction rates",
    "construction labour rates",
    "material and labour charges",
    "construction quotation inclusions",
    "construction quotation exclusions",
    "construction price validity",
    "construction rate revision rules",
    "construction price comparison",
    "civil contractor quotation format",
    "building construction price list",
    "construction cost transparency",
    "Kashipur construction rates",
    "construction pricing guide",
  ],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/kashipur/civil-contractor-kashipur-price-list",
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
    title: "Civil Contractor Kashipur Price List | Rate Card Guide",
    description:
      "Looking for a civil contractor Kashipur price list? Learn the rate-card format, units, inclusions, validity rules and checks that make prices comparable.",
    url: "https://www.spacebuild.co.in/kashipur/civil-contractor-kashipur-price-list",
    siteName: "Space Build",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Civil Contractor Kashipur Price List - Space Build",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Civil Contractor Kashipur Price List | Rate Card Guide",
    description:
      "Looking for a civil contractor Kashipur price list? Learn the rate-card format, units, inclusions, validity rules and checks that make prices comparable.",
    images: ["/og-image.jpg"],
  },
  geo: {
    placename: "Kashipur, Uttarakhand, India",
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