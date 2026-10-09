import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Reliable Construction Company in Kashipur | Trust Signals and Risk Checks 2026",

  description:
    "Find a reliable construction company in Kashipur by testing promise-keeping, delivery history, cash discipline, transparency and dispute handling before you commit your money.",

  keywords:
    "reliable construction company Kashipur, dependable building firm, trustworthy builder, on-time project delivery, transparent construction billing, construction risk management, promise keeping contractor, delay history check, cash flow discipline, dispute resolution builder, honest quotation, consistent quality builder, client retention record, written progress reports, construction warranty honour, safe payment terms, supplier payment record, workforce stability, verified project references, long-term builder support",

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
      "https://www.spacebuild.co.in/kashipur/reliable-construction-company-kashipur",
  },

  openGraph: {
    title:
      "Reliable Construction Company in Kashipur | Trust Signals and Risk Checks 2026",
    description:
      "Find a reliable construction company in Kashipur by testing promise-keeping, delivery history, cash discipline, transparency and dispute handling before you commit your money.",
    url: "https://www.spacebuild.co.in/kashipur/reliable-construction-company-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Reliable Construction Company in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Reliable Construction Company in Kashipur | Trust Signals and Risk Checks 2026",
    description:
      "Find a reliable construction company in Kashipur by testing promise-keeping, delivery history, cash discipline, transparency and dispute handling before you commit your money.",
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