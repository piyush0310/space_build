import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Residential Contractor Contact Number Kashipur | Find and Verify Safely",

  description:
    "Need a residential contractor contact number in Kashipur? Learn where to find genuine numbers, verify the person behind them, what to ask on the first call and how to avoid fraud.",

  keywords:
    "residential contractor contact number Kashipur, contractor phone number, home builder contact Kashipur, house contractor mobile number, verified contractor details, builder enquiry call, construction contractor address, contractor WhatsApp enquiry, residential builder Kashipur, contractor site visit booking, free construction quotation, construction enquiry questions, genuine contractor listing, contractor fraud prevention, house construction consultation, local contractor directory, building contractor office, contractor background check, home construction enquiry, trusted residential builder",

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
      "https://www.spacebuild.co.in/kashipur/residential-contractor-contact-number-kashipur",
  },

  openGraph: {
    title:
      "Residential Contractor Contact Number Kashipur | Find and Verify Safely",
    description:
      "Need a residential contractor contact number in Kashipur? Learn where to find genuine numbers, verify the person behind them, what to ask on the first call and how to avoid fraud.",
    url: "https://www.spacebuild.co.in/kashipur/residential-contractor-contact-number-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Residential Contractor Contact Number Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Residential Contractor Contact Number Kashipur | Find and Verify Safely",
    description:
      "Need a residential contractor contact number in Kashipur? Learn where to find genuine numbers, verify the person behind them, what to ask on the first call and how to avoid fraud.",
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