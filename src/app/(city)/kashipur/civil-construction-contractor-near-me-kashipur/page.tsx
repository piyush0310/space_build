import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Civil Construction Contractor Near Me in Kashipur | Find Trusted Builders",


  description:
    "Searching for a civil construction contractor near me in Kashipur? Learn how to find, compare and hire a reliable local builder with fair rates and quality work.",


  keywords:
    "civil construction contractor near me Kashipur, local building contractor, nearby builders Kashipur, house construction contractor, RCC contractor near me, turnkey builder, labour contractor, construction company Kashipur, residential builder, commercial construction, industrial shed contractor, renovation contractor, boundary wall contractor, affordable contractor, trusted builder Uttarakhand, construction quotation, hire contractor, contractor selection, home construction Kashipur, quality construction",


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
      "https://www.spacebuild.co.in/kashipur/civil-construction-contractor-near-me-kashipur",
  },


  openGraph: {
    title: "Civil Construction Contractor Near Me in Kashipur | Find Trusted Builders",
    description:
      "Searching for a civil construction contractor near me in Kashipur? Learn how to find, compare and hire a reliable local builder with fair rates and quality work.",
    url: "https://www.spacebuild.co.in/kashipur/civil-construction-contractor-near-me-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Civil Construction Contractor Near Me in Kashipur - Space Build",
      },
    ],
  },


  twitter: {
    card: "summary_large_image",
    title: "Civil Construction Contractor Near Me in Kashipur | Find Trusted Builders",
    description:
      "Searching for a civil construction contractor near me in Kashipur? Learn how to find, compare and hire a reliable local builder with fair rates and quality work.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },


  icons: {
    icon: "/favicon.ico",
  },


  other: {
    title: "Civil Construction Contractor Near Me in Kashipur | Find Trusted Builders",
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