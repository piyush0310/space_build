import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Civil Construction Contractor Price List Kashipur | Budget",
  description:
    "Need a civil construction contractor price list in Kashipur? Learn to turn rates into a full project budget using quantities, allowances and reserves.",
  keywords: [
    "civil construction contractor price list Kashipur",
    "civil construction contractor rates Kashipur",
    "civil construction budget Kashipur",
    "construction rates and quantities",
    "construction cost estimation",
    "construction allowances and reserves",
    "construction price escalation rules",
    "civil contractor quotation comparison",
    "item-wise construction cost",
    "construction quantity sheet",
    "construction budget planning",
    "civil contractor price comparison Kashipur",
    "construction cost breakdown",
    "written construction quotation",
    "construction contingency planning",
  ],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/kashipur/civil-construction-contractor-price-list-kashipur",
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
    title: "Civil Construction Contractor Price List Kashipur | Budget",
    description:
      "Need a civil construction contractor price list in Kashipur? Learn to turn rates into a full project budget using quantities, allowances and reserves.",
    url: "https://www.spacebuild.co.in/kashipur/civil-construction-contractor-price-list-kashipur",
    siteName: "Space Build",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Civil Construction Contractor Price List Kashipur - Budget Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Civil Construction Contractor Price List Kashipur | Budget",
    description:
      "Need a civil construction contractor price list in Kashipur? Learn to turn rates into a full project budget using quantities, allowances and reserves.",
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