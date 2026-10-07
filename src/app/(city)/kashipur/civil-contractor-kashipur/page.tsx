import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Civil Contractor Kashipur | Role, Billing & Hiring Guide",

  description:
    "Hiring a civil contractor in Kashipur? Understand duties, contract papers, billing, retention money and defect periods before you appoint a professional.",

  keywords:
    "Hire a civil contractor in Kashipur for foundations, RCC structures, roads, drains and site works. Learn duties, billing, contract papers and verification steps before hiring.",

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
      "https://www.spacebuild.co.in/civil-contractor-kashipur",
  },

  openGraph: {
    title: "Civil Contractor Kashipur | Role, Billing & Hiring Guide",
    description:
      "Hiring a civil contractor in Kashipur? Understand duties, contract papers, billing, retention money and defect periods before you appoint a professional.",
    url: "https://www.spacebuild.co.in/civil-contractor-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Civil Contractor Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Civil Contractor Kashipur | Role, Billing & Hiring Guide",
    description:
      "Hiring a civil contractor in Kashipur? Understand duties, contract papers, billing, retention money and defect periods before you appoint a professional.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Civil Contractor Kashipur | Role, Billing & Hiring Guide",
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