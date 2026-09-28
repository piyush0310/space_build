import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Construction Management Company in Rampur | Build Smart",

  description:
    "Planning a build? Learn how a construction management company in Rampur handles budgeting, quality, scheduling, and safety for homes and commercial projects.",

  keywords:
    "construction management company in Rampur, construction company near me Rampur, building contractor in Rampur, house construction cost Rampur, residential construction services Rampur, commercial building construction Rampur UP, turnkey construction Rampur, project management consultant construction, construction cost estimation, architect and structural engineer Rampur, civil contractor Rampur, site supervision services, quality control in construction, RCC construction Rampur, building material procurement, renovation and remodelling Rampur, builders and developers Rampur, construction project scheduling, RERA compliant construction Uttar Pradesh, affordable home construction Rampur",

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
    title: "Construction Management Company in Rampur | Build Smart",
    description:
      "Planning a build? Learn how a construction management company in Rampur handles budgeting, quality, scheduling, and safety for homes and commercial projects.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Construction Management Company in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Construction Management Company in Rampur | Build Smart",
    description:
      "Planning a build? Learn how a construction management company in Rampur handles budgeting, quality, scheduling, and safety for homes and commercial projects.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Construction Management Company in Rampur | Build Smart",
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