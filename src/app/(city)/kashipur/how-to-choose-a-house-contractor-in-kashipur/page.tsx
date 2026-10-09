import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "How to Choose a House Contractor in Kashipur | Step-by-Step 2026 Guide",

  description:
    "Learn how to choose a house contractor in Kashipur with clear steps on verifying experience, comparing quotes, reading agreements and avoiding common hiring mistakes.",

  keywords:
    "how to choose house contractor Kashipur, hire house builder, best home contractor Kashipur, contractor selection checklist, residential contractor, verify contractor details, compare building quotations, house construction agreement, turnkey house contractor, labour contract, home construction tips, contractor red flags, reliable builder Uttarakhand, house building process, construction payment schedule, site inspection tips, material quality check, construction timeline, budget house construction, trusted local builder",

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
      "https://www.spacebuild.co.in/kashipur/how-to-choose-house-contractor-in-kashipur",
  },

  openGraph: {
    title:
      "How to Choose a House Contractor in Kashipur | Step-by-Step 2026 Guide",
    description:
      "Learn how to choose a house contractor in Kashipur with clear steps on verifying experience, comparing quotes, reading agreements and avoiding common hiring mistakes.",
    url: "https://www.spacebuild.co.in/kashipur/how-to-choose-house-contractor-in-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "How to Choose a House Contractor in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "How to Choose a House Contractor in Kashipur | Step-by-Step 2026 Guide",
    description:
      "Learn how to choose a house contractor in Kashipur with clear steps on verifying experience, comparing quotes, reading agreements and avoiding common hiring mistakes.",
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