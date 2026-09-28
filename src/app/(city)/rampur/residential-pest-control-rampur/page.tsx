import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Residential Pest Control in Rampur | Safe Home Protection",

  description:
    "Protect your family with residential pest control in Rampur. Learn home-zone checks, seasonal plans, safe treatments, and myths before you book service.",

  keywords:
    "residential pest control Rampur, home pest control treatment, house pest control packages, pest control for independent house, pest control for villas and bungalows, termite proofing for homes, ant and silverfish control, lizard repellent for homes, mosquito prevention at home, rodent proofing house, pest control health risks, monsoon pest control for homes, quarterly home pest control plan, green pest control for families, pest control for kitchen cabinets, wooden furniture pest protection, pest control for senior citizens homes, pest control myths, home pest inspection checklist, pest control after treatment care",

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
    title: "Residential Pest Control in Rampur | Safe Home Protection",
    description:
      "Protect your family with residential pest control in Rampur. Learn home-zone checks, seasonal plans, safe treatments, and myths before you book service.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Residential Pest Control in Rampur - Safe Home Protection",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Residential Pest Control in Rampur | Safe Home Protection",
    description:
      "Protect your family with residential pest control in Rampur through safe treatments, seasonal plans, and home-zone checks.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Residential Pest Control in Rampur | Safe Home Protection",
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