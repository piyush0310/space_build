import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best Contractor in Kashipur | Find the Right Fit for Your Job",

  description:
    "Who is the best contractor in Kashipur? Learn to match skills to your job, run a smart interview, test work quality and choose a dependable professional.",

  keywords:
    "Find the best contractor in Kashipur for houses, shops, repairs, extensions and site works. Match skills to your job, interview carefully, verify references and choose a dependable professional.",

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
      "https://www.spacebuild.co.in/kashipur/best-contractor-in-kashipur",
  },

  openGraph: {
    title: "Best Contractor in Kashipur | Find the Right Fit for Your Job",
    description:
      "Who is the best contractor in Kashipur? Learn to match skills to your job, run a smart interview, test work quality and choose a dependable professional.",
    url: "https://www.spacebuild.co.in/kashipur/best-contractor-in-kashipur",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Contractor in Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Contractor in Kashipur | Find the Right Fit for Your Job",
    description:
      "Who is the best contractor in Kashipur? Learn to match skills to your job, run a smart interview, test work quality and choose a dependable professional.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Best Contractor in Kashipur | Find the Right Fit for Your Job",
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