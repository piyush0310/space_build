import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "How to Choose a Civil Construction Contractor in Kashipur | 2026 Guide",

  description:
    "Learn how to choose a civil construction contractor in Kashipur with simple checks on experience, rates, contracts, site quality and red flags before you hire.",

  keywords:
    "how to choose civil construction contractor Kashipur, select building contractor, best contractor Kashipur, contractor selection tips, hire home builder, construction contract checklist, verify contractor credentials, compare construction quotations, turnkey contractor, labour contractor, RCC work quality, residential construction Kashipur, commercial builder, industrial shed contractor, contractor red flags, construction agreement, reliable builder Uttarakhand, project timeline, material quality, construction budget planning",

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
      "https://www.spacebuild.co.in/kashipur/how-to-choose-civil-construction-contractor-in-kashipur",
  },

  openGraph: {
    title:
      "How to Choose a Civil Construction Contractor in Kashipur | 2026 Guide",
    description:
      "Learn how to choose a civil construction contractor in Kashipur with simple checks on experience, rates, contracts, site quality and red flags before you hire.",
    url: "https://www.spacebuild.co.in/kashipur/how-to-choose-civil-construction-contractor-in-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "How to Choose a Civil Construction Contractor in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "How to Choose a Civil Construction Contractor in Kashipur | 2026 Guide",
    description:
      "Learn how to choose a civil construction contractor in Kashipur with simple checks on experience, rates, contracts, site quality and red flags before you hire.",
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