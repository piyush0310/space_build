import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Building Contractor in Kashipur | Season-Wise Work Calendar",

  description:
    "Hiring a building contractor in Kashipur? Use a season-wise calendar to plan monsoon, fog, heat and festival work, protect materials and avoid delays.",

  keywords:
    "Hire a building contractor in Kashipur for homes, shops and extensions. Plan work around monsoon, fog, heat and festivals using season-wise checklists and material care.",

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
      "https://www.spacebuild.co.in/kashipur/building-contractor-in-kashipur",
  },

  openGraph: {
    title: "Building Contractor in Kashipur | Season-Wise Work Calendar",
    description:
      "Hiring a building contractor in Kashipur? Use a season-wise calendar to plan monsoon, fog, heat and festival work, protect materials and avoid delays.",
    url: "https://www.spacebuild.co.in/kashipur/building-contractor-in-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Building Contractor in Kashipur - Season-Wise Work Calendar",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Building Contractor in Kashipur | Season-Wise Work Calendar",
    description:
      "Hiring a building contractor in Kashipur? Use a season-wise calendar to plan monsoon, fog, heat and festival work, protect materials and avoid delays.",
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