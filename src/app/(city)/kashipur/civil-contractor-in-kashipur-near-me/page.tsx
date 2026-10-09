import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Civil Contractor in Kashipur Near Me | Local Search and Hiring Guide 2026",

  description:
    "Search for a civil contractor in Kashipur near me the smart way. Learn how distance affects cost, response time, site visits, repairs and long-term support.",

  keywords:
    "civil contractor in Kashipur near me, nearby civil contractor, local civil contractor, civil work near my location, contractor within city limits, site visit contractor, quick response builder, house construction contractor, shop construction contractor, renovation and repair contractor, boundary wall contractor, RCC work near me, SIDCUL area contractor, civil work estimate, contractor travel cost, local material supplier access, construction supervision nearby, reliable local builder, after handover repair support, Kashipur construction services",

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
      "https://www.spacebuild.co.in/kashipur/civil-contractor-in-kashipur-near-me",
  },

  openGraph: {
    title:
      "Civil Contractor in Kashipur Near Me | Local Search and Hiring Guide 2026",
    description:
      "Search for a civil contractor in Kashipur near me the smart way. Learn how distance affects cost, response time, site visits, repairs and long-term support.",
    url: "https://www.spacebuild.co.in/kashipur/civil-contractor-in-kashipur-near-me",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Civil Contractor in Kashipur Near Me - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Civil Contractor in Kashipur Near Me | Local Search and Hiring Guide 2026",
    description:
      "Search for a civil contractor in Kashipur near me the smart way. Learn how distance affects cost, response time, site visits, repairs and long-term support.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title:
      "Civil Contractor in Kashipur Near Me | Local Search and Hiring Guide 2026",
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