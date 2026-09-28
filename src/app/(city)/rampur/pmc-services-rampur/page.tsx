import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "PMC Services in Rampur | Project Management Consultancy",

  description:
    "Looking for PMC services in Rampur? Understand consultancy phases, deliverables, fee models, and how a PMC keeps your project on budget and on schedule.",

  keywords:
    "PMC services in Rampur, project management consultancy Rampur, PMC company in Rampur UP, owner's representative services, pre-construction planning services, feasibility study for building projects, DPR preparation services, tender and bid evaluation, BOQ preparation services, project cost control consultant, construction schedule monitoring, third-party quality audit construction, contract administration services, industrial project management consultant, real estate project management services, school and hospital project consultant, PMC fee structure, risk management in construction projects, project handover and closeout, infrastructure project consultant Uttar Pradesh",

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
    title: "PMC Services in Rampur | Project Management Consultancy",
    description:
      "Professional PMC services in Rampur. From feasibility and DPR to tendering, cost control, quality audits, and project closeout.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "PMC Services in Rampur - Project Management Consultancy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PMC Services in Rampur | Project Management Consultancy",
    description:
      "Space Build Moradabad - PMC services in Rampur covering planning, tendering, cost control, quality audits, and project closeout.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "PMC Services in Rampur | Project Management Consultancy",
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