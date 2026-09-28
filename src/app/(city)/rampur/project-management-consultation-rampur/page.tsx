
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Project Management Consultation in Rampur | Space Build",

  description:
    "Expert project management consultation in Rampur for interior and renovation projects. Plan budgets, timelines and vendors with clarity. Call Space Build.",

  keywords:
    "project management consultation in Rampur, project management consultant in Rampur, PMC services in Rampur, project management consultancy Rampur, interior project management Rampur, renovation project management Rampur, construction project consultation Rampur, home renovation consultant Rampur, interior project planning Rampur, project management for homeowners Rampur, commercial interior project management Rampur, interior design consultant Rampur, Vastu consultant Rampur, house renovation planning Rampur, interior execution planning, interior project management consultation service, project planning without execution, vendor coordination consultant, BOQ and budget planning consultant, design project coordination consultant, project management consultation Moradabad, PMC consultant Uttar Pradesh, construction management advisory Uttar Pradesh, project timeline and budget planning, Space Build Rampur",

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
    title: "Project Management Consultation in Rampur | Space Build",
    description:
      "Expert project management consultation in Rampur for interior and renovation projects. Plan budgets, timelines and vendors with clarity. Call Space Build.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Project Management Consultation in Rampur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Project Management Consultation in Rampur | Space Build",
    description:
      "Expert project management consultation in Rampur for interior and renovation projects. Plan budgets, timelines and vendors with clarity. Call Space Build.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Project Management Consultation in Rampur | Space Build",
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
