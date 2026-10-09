import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title:
    "Interior Design Portfolio Haldwani | How to Read, Judge and Build One 2026",


  description:
    "Explore what an interior design portfolio in Haldwani should show, how to judge real work behind the photos, and how studios can build a portfolio that earns trust.",


  keywords:
    "interior design portfolio Haldwani, interior portfolio, home interior projects, modular kitchen portfolio, living room designs, bedroom designs, project gallery, before and after, design case study, completed interiors",


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
      "https://www.spacebuild.co.in/haldwani/interior-design-portfolio-haldwani",
  },


  openGraph: {
    title:
      "Interior Design Portfolio Haldwani | How to Read, Judge and Build One 2026",
    description:
      "Explore what an interior design portfolio in Haldwani should show, how to judge real work behind the photos, and how studios can build a portfolio that earns trust.",
    url: "https://www.spacebuild.co.in/haldwani/interior-design-portfolio-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Design Portfolio Haldwani - Space Build",
      },
    ],
  },


  twitter: {
    card: "summary_large_image",
    title:
      "Interior Design Portfolio Haldwani | How to Read, Judge and Build One 2026",
    description:
      "Explore what an interior design portfolio in Haldwani should show, how to judge real work behind the photos, and how studios can build a portfolio that earns trust.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },


  icons: {
    icon: "/favicon.ico",
  },


  other: {
    "geo.placename": "Haldwani, Uttarakhand",
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