import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Cheap Interior Designer Services | Spot Costly Shortcuts",

  description:
    "Searching for cheap interior designer services? Learn which shortcuts cheap quotes hide, how to test them and where saving money is truly safe.",

  keywords:
    "Find cheap interior designer services without hidden risks. Spot shortcuts in boards, hardware, paint, wiring and supervision, test samples, compare quotations and save money safely.",

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
      "https://www.spacebuild.co.in/cheap-interior-designer-services",
  },

  openGraph: {
    title: "Cheap Interior Designer Services | Spot Costly Shortcuts",
    description:
      "Searching for cheap interior designer services? Learn which shortcuts cheap quotes hide, how to test them and where saving money is truly safe.",
    url: "https://www.spacebuild.co.in/cheap-interior-designer-services",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Cheap Interior Designer Services - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cheap Interior Designer Services | Spot Costly Shortcuts",
    description:
      "Searching for cheap interior designer services? Learn which shortcuts cheap quotes hide, how to test them and where saving money is truly safe.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
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