import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best House Construction Contractor in Kashipur | 2026 Selection Guide",

  description:
    "Looking for the best house construction contractor in Kashipur? Learn what makes a builder reliable, typical costs, contract tips and how to compare options wisely.",

  keywords: [
    "best house construction contractor Kashipur",
    "home builder Kashipur",
    "residential construction contractor",
    "house construction cost Kashipur",
    "turnkey home builder",
    "trusted contractor Uttarakhand",
    "independent house construction",
    "construction per sq ft rate",
    "grey structure contractor",
    "home building process",
    "quality construction Kashipur",
    "builder selection tips",
    "house construction agreement",
    "affordable home builder",
    "duplex house construction",
    "villa construction",
    "house renovation contractor",
    "construction timeline",
    "material quality check",
    "budget house construction",
  ],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/kashipur/kashipur-best-house-construction-contractor-rating",
  },

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title:
      "Best House Construction Contractor in Kashipur | 2026 Selection Guide",
    description:
      "Looking for the best house construction contractor in Kashipur? Learn what makes a builder reliable, typical costs, contract tips and how to compare options wisely.",
    url: "https://www.spacebuild.co.in/kashipur/kashipur-best-house-construction-contractor-rating",
    siteName: "Space Build",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best House Construction Contractor in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best House Construction Contractor in Kashipur | 2026 Selection Guide",
    description:
      "Looking for the best house construction contractor in Kashipur? Learn what makes a builder reliable, typical costs, contract tips and how to compare options wisely.",
    images: ["/og-image.jpg"],
  },

  geo: {
    placename: "Kashipur, Uttarakhand, India",
    region: "IN-UT",
    country: "IN",
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