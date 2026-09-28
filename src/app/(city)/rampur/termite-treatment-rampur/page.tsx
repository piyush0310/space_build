import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Termite Treatment in Rampur | Process, Cost & Safety Guide",

  description:
    "Planning termite treatment in Rampur? See the step-by-step process, chemical options, safety rules, cost factors, and quotation checklist before you book.",

  keywords:
    "termite treatment Rampur, termite treatment process, termite treatment for home, non-repellent termiticide, termite treatment chemical safety, termite treatment before painting, termite treatment for flats, termite treatment for godowns, termite treatment quotation, termite treatment price Rampur, termite treatment for kitchen cabinets, termite treatment for wooden doors, termite treatment aftercare, termite treatment for rented house, termite treatment for plot, termite annual maintenance contract, termite treatment technician checklist, termite treatment odour and fumes, termite treatment for offices, termite treatment before buying house",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Space Build Moradabad",
    },
  ],

  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },

  openGraph: {
    title: "Termite Treatment in Rampur | Process, Cost & Safety Guide",
    description:
      "Complete termite treatment guide for Rampur homeowners. Learn about the treatment process, chemical safety, cost factors, and how to choose the right service provider.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Termite Treatment in Rampur - Process, Cost & Safety Guide",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Termite Treatment in Rampur | Process, Cost & Safety Guide",
    description:
      "Space Build Moradabad - Professional termite treatment services in Rampur with detailed process explanation, safety guidelines, and transparent pricing.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Termite Treatment in Rampur | Process, Cost & Safety Guide",
    "geo.placename": "Rampur, Uttar Pradesh",
    "geo.region": "IN-UP",
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