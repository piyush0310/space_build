import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best Pest Control Company in Rampur | Safe & Affordable",

  description:
    "Looking for the best pest control company in Rampur? Compare treatments, safety, cost, and tips for termites, cockroaches, bed bugs, and rodents at home.",

  keywords:
    "best pest control company in Rampur, pest control near me Rampur, pest control services in Rampur, termite control Rampur, anti-termite treatment for home, cockroach control service Rampur, bed bug treatment Rampur, rodent control Rampur, mosquito fogging service Rampur, home pest control Rampur UP, residential pest control service, commercial pest control Rampur, pest control for restaurants, office disinfection and pest control, pest control cost in Rampur, affordable pest control service, annual pest control contract, herbal pest control Rampur, licensed pest control company, pest control Uttar Pradesh",

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
    title: "Best Pest Control Company in Rampur | Safe & Affordable",
    description:
      "Looking for the best pest control company in Rampur? Compare treatments, safety, cost, and tips for termites, cockroaches, bed bugs, and rodents at home.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Pest Control Company in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Pest Control Company in Rampur | Safe & Affordable",
    description:
      "Looking for the best pest control company in Rampur? Compare treatments, safety, cost, and tips for termites, cockroaches, bed bugs, and rodents at home.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Best Pest Control Company in Rampur | Safe & Affordable",
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