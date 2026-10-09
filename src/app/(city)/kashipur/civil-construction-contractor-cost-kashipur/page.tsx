import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Civil Construction Contractor Cost in Kashipur | 2026 Rates",


  description:
    "Know civil construction contractor cost in Kashipur: per sq ft rates, labour, material, key factors and smart tips to hire a reliable builder within budget.",


  keywords:
    "civil construction contractor Kashipur, building contractor Kashipur, house construction cost Kashipur, construction rate per sq ft, labour contract rate, turnkey construction, RCC contractor, home builders Uttarakhand, residential construction, commercial building contractor, construction estimate, material rates, Kashipur builders, grey structure cost, finishing cost, renovation contractor, boundary wall cost, industrial shed construction, contractor charges, budget home construction",


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
      "https://www.spacebuild.co.in/kashipur/civil-construction-contractor-cost-kashipur",
  },


  openGraph: {
    title: "Civil Construction Contractor Cost in Kashipur | 2026 Rates",
    description:
      "Know civil construction contractor cost in Kashipur: per sq ft rates, labour, material, key factors and smart tips to hire a reliable builder within budget.",
    url: "https://www.spacebuild.co.in/kashipur/civil-construction-contractor-cost-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Civil Construction Contractor Cost in Kashipur - Space Build",
      },
    ],
  },


  twitter: {
    card: "summary_large_image",
    title: "Civil Construction Contractor Cost in Kashipur | 2026 Rates",
    description:
      "Know civil construction contractor cost in Kashipur: per sq ft rates, labour, material, key factors and smart tips to hire a reliable builder within budget.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },


  icons: {
    icon: "/favicon.ico",
  },


  other: {
    title: "Civil Construction Contractor Cost in Kashipur | 2026 Rates",
    "geo.placename": "Kashipur, Uttarakhand",
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