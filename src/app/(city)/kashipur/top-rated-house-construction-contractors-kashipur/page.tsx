import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Top Rated House Construction Contractors in Kashipur | 2026 Buyer's Guide",

  description:
    "Discover how to find top rated house construction contractors in Kashipur, understand ratings, verify quality, compare costs and pick a builder who delivers on promises.",

  keywords:
    "top rated house construction contractors Kashipur, highly rated home builders, best rated contractor Kashipur, house builder ratings, trusted residential contractor, customer reviewed builders, house construction cost Kashipur, quality home construction, turnkey house contractor, builder reputation check, construction contract tips, site visit checklist, genuine contractor feedback, award winning builders, reliable construction firm, Uttarakhand home builders, contractor comparison guide, construction timeline, material quality standards, home construction budget",

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
      "https://www.spacebuild.co.in/kashipur/top-rated-house-construction-contractors-kashipur",
  },

  openGraph: {
    title:
      "Top Rated House Construction Contractors in Kashipur | 2026 Buyer's Guide",
    description:
      "Discover how to find top rated house construction contractors in Kashipur, understand ratings, verify quality, compare costs and pick a builder who delivers on promises.",
    url: "https://www.spacebuild.co.in/kashipur/top-rated-house-construction-contractors-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Top Rated House Construction Contractors in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Top Rated House Construction Contractors in Kashipur | 2026 Buyer's Guide",
    description:
      "Discover how to find top rated house construction contractors in Kashipur, understand ratings, verify quality, compare costs and pick a builder who delivers on promises.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
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