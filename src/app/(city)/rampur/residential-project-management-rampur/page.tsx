import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Residential Project Management in Rampur | Build Your Home",

  description:
    "Building a home? Learn how residential project management in Rampur covers planning, budget, contractors, timelines, and handover from plot to possession.",

  keywords:
    "residential project management Rampur, home building project planning, plot to possession guide, house construction planning Rampur, independent house construction, builder floor project management, residential colony development, apartment project supervision, home construction budget planning, stage wise payment schedule, contractor coordination for homes, home construction timeline, house map approval process, interior and finishing coordination, electrical and plumbing planning, snag list for new house, home handover checklist, residential project risk control, vastu friendly house planning, new house registry and documents",

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
    title: "Residential Project Management in Rampur | Build Your Home",
    description:
      "Professional residential project management in Rampur. From plot verification and design to construction oversight, budget control, and final handover.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Residential Project Management in Rampur - Build Your Home",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Residential Project Management in Rampur | Build Your Home",
    description:
      "Space Build Moradabad - Residential project management services in Rampur covering planning, budget, contractors, timelines, and handover.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Residential Project Management in Rampur | Build Your Home",
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