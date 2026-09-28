import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best Pest Control Services in Rampur | Home & Business",

  description:
    "Need the best pest control services in Rampur? See seasonal pest calendar, treatment options, hiring checklist, and red flags before you book a service.",

  keywords:
    "best pest control services in Rampur, pest control service near me, Rampur pest control company, house pest control treatment, termite treatment cost Rampur, wood borer treatment, cockroach gel treatment, bed bug heat and spray treatment, rat and mice control service, mosquito control for colonies, lizard and spider control, ant control service, flat pest control Rampur, shop and godown pest control, hotel and restaurant pest control, school and hospital pest control, pre-construction anti-termite, pest control AMC Rampur, eco-friendly pest control services, sanitisation and pest control Rampur UP",

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
    title: "Best Pest Control Services in Rampur | Home & Business",
    description:
      "Need the best pest control services in Rampur? See seasonal pest calendar, treatment options, hiring checklist, and red flags before you book a service.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Pest Control Services in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Pest Control Services in Rampur | Home & Business",
    description:
      "Need the best pest control services in Rampur? See seasonal pest calendar, treatment options, hiring checklist, and red flags before you book a service.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Best Pest Control Services in Rampur | Home & Business",
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