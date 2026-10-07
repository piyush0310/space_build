import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Kashipur Building Contractors | Types, Trades & Hiring Guide",

  description:
    "Searching for Kashipur building contractors? Learn the different contractor types, trades, rates, contracts and checks needed to hire the right professional.",

  keywords:
    "Kashipur building contractors, building contractors Kashipur, contractor in Kashipur, house construction contractor Kashipur, shop construction contractor Kashipur, renovation contractor Kashipur, finishing contractor Kashipur, structural work contractor Kashipur, general contractor Kashipur, labour contractor Kashipur, specialist contractor Kashipur, design and build contractor Kashipur, building contractor rates Kashipur, contractor agreement Kashipur, contractor verification Kashipur, reliable building contractors Kashipur, local contractors Kashipur, construction company Kashipur, builder contractor Kashipur, home construction Kashipur, contractor types Kashipur, construction trades Kashipur, hiring building contractor Kashipur",

  alternates: {
    canonical: "https://www.spacebuild.co.in/kashipur-building-contractors",
  },

  openGraph: {
    title: "Kashipur Building Contractors | Types, Trades & Hiring Guide",
    description:
      "Searching for Kashipur building contractors? Learn the different contractor types, trades, rates, contracts and checks needed to hire the right professional.",
    url: "https://www.spacebuild.co.in/kashipur-building-contractors",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kashipur Building Contractors - Types, Trades & Hiring Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kashipur Building Contractors | Types, Trades & Hiring Guide",
    description:
      "Searching for Kashipur building contractors? Learn the different contractor types, trades, rates, contracts and checks needed to hire the right professional.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
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