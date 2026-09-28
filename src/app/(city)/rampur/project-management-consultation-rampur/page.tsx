import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Project Management Consultation in Rampur | Fees, Services",

  description:
    "Need project management consultation in Rampur? Learn services, fee models, process steps, benefits and how to pick a trusted consultant before you start.",

  keywords:
    "project management consultation Rampur, project management consultant in Rampur, project management services Rampur, construction project management Rampur, PMC services Rampur, project planning consultancy, project management consultancy fees, project consultant Rampur, building project management Rampur, site supervision Rampur, construction consultant Rampur, project cost estimation Rampur, vendor selection Rampur, contract review Rampur, project timeline planning Rampur, Rampur me project management consultant, construction project manager Rampur, PMC consultant Rampur UP, project management fees Rampur, best project consultant Rampur, affordable project management Rampur, Rampur construction supervision, project planning services Rampur",

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
    title: "Project Management Consultation in Rampur | Fees, Services",
    description:
      "Need project management consultation in Rampur? Learn services, fee models, process steps, benefits and how to pick a trusted consultant before you start.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Project Management Consultation in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Project Management Consultation in Rampur | Fees, Services",
    description:
      "Need project management consultation in Rampur? Learn services, fee models, process steps, benefits and how to pick a trusted consultant before you start.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Project Management Consultation in Rampur | Fees, Services",
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