import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Civil Construction Contractor Reviews in Kashipur | Honest 2026 Guide",

  description:
    "Read civil construction contractor reviews in Kashipur. Learn how to judge quality, rates, timelines and feedback before hiring a trusted builder for your project.",

  keywords:
    "civil construction contractor reviews Kashipur, best building contractor Kashipur, contractor ratings, builder feedback, house construction reviews, trusted contractor Uttarakhand, construction quality check, client testimonials, RCC contractor Kashipur, turnkey builder reviews, construction company Kashipur, contractor reputation, genuine reviews, home builders, commercial construction, site visit, completed projects, contractor comparison, hire contractor, construction complaints",

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
      "https://www.spacebuild.co.in/civil-construction-contractor-reviews-in-kashipur",
  },

  openGraph: {
    title: "Civil Construction Contractor Reviews in Kashipur | Honest 2026 Guide",
    description:
      "Read civil construction contractor reviews in Kashipur. Learn how to judge quality, rates, timelines and feedback before hiring a trusted builder for your project.",
    url: "https://www.spacebuild.co.in/civil-construction-contractor-reviews-in-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Civil Construction Contractor Reviews in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Civil Construction Contractor Reviews in Kashipur | Honest 2026 Guide",
    description:
      "Read civil construction contractor reviews in Kashipur. Learn how to judge quality, rates, timelines and feedback before hiring a trusted builder for your project.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Civil Construction Contractor Reviews in Kashipur | Honest 2026 Guide",
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