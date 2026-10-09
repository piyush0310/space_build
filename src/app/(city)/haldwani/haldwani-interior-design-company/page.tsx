import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title:
    "Haldwani Interior Design Company | Due Diligence, Structure and Warranty Guide 2026",


  description:
    "Choosing a Haldwani interior design company? Check legal status, team structure, capacity, finances, warranty and complaint handling before you sign and pay.",


  keywords:
    "Haldwani interior design company, interior design firm, registered interior company, company profile check, turnkey interior company, design and build firm, interior warranty, company vs freelancer, project capacity, interior contract",


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
      "https://www.spacebuild.co.in/haldwani/haldwani-interior-design-company",
  },


  openGraph: {
    title:
      "Haldwani Interior Design Company | Due Diligence, Structure and Warranty Guide 2026",
    description:
      "Choosing a Haldwani interior design company? Check legal status, team structure, capacity, finances, warranty and complaint handling before you sign and pay.",
    url: "https://www.spacebuild.co.in/haldwani/haldwani-interior-design-company",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Haldwani Interior Design Company - Space Build",
      },
    ],
  },


  twitter: {
    card: "summary_large_image",
    title:
      "Haldwani Interior Design Company | Due Diligence, Structure and Warranty Guide 2026",
    description:
      "Choosing a Haldwani interior design company? Check legal status, team structure, capacity, finances, warranty and complaint handling before you sign and pay.",
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