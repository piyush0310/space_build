import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "How to Hire a Construction Company in Kashipur | 6-Week Hiring Plan 2026",

  description:
    "Learn how to hire a construction company in Kashipur with a simple six-week plan covering briefing, shortlisting, site visits, quotations, negotiation, signing and the first month on site.",

  keywords:
    "how to hire construction company in Kashipur, hiring timeline for builder, construction company shortlist, builder briefing document, request for quotation, site meeting checklist, quotation comparison sheet, negotiation before signing, construction contract signing, work start checklist, first month on site, stage payment control, project communication plan, builder onboarding, handover inspection, snag list, hiring mistakes to avoid, construction hiring budget, Kashipur building company, local builder hiring steps",

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
      "https://www.spacebuild.co.in/kashipur/how-to-hire-construction-company-in-kashipur",
  },

  openGraph: {
    title:
      "How to Hire a Construction Company in Kashipur | 6-Week Hiring Plan 2026",
    description:
      "Learn how to hire a construction company in Kashipur with a simple six-week plan covering briefing, shortlisting, site visits, quotations, negotiation, signing and the first month on site.",
    url: "https://www.spacebuild.co.in/kashipur/how-to-hire-construction-company-in-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "How to Hire a Construction Company in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "How to Hire a Construction Company in Kashipur | 6-Week Hiring Plan 2026",
    description:
      "Learn how to hire a construction company in Kashipur with a simple six-week plan covering briefing, shortlisting, site visits, quotations, negotiation, signing and the first month on site.",
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