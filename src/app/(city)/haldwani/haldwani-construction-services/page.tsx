
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Haldwani Construction Services | Space Build Haldwani",

  description:
    "Explore construction services in Haldwani, from new houses and commercial buildings to renovation, waterproofing, and interior fit-out. Learn what each service involves and how to plan with Space Build Haldwani. Book a free consultation.",

  keywords:
    "Haldwani construction services, house construction Haldwani, residential construction services, commercial construction services, renovation services Haldwani, building extension Haldwani, waterproofing services Haldwani, structural repair services, boundary wall construction, interior fit-out services, turnkey construction services, civil work Haldwani, home building services, construction planning, construction with interiors, design and build Haldwani, interior designer Haldwani, interior design Haldwani, home building Uttarakhand, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/haldwani/haldwani-construction-services",
  },

  openGraph: {
    title: "Haldwani Construction Services | Space Build Haldwani",

    description:
      "Explore construction services in Haldwani, from new houses and commercial buildings to renovation, waterproofing, and interior fit-out. Learn what each service involves and how to plan with Space Build Haldwani. Book a free consultation.",

    url: "https://www.spacebuild.co.in/haldwani/haldwani-construction-services",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Haldwani Construction Services - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Haldwani Construction Services | Space Build Haldwani",

    description:
      "Explore construction services in Haldwani, from new houses and commercial buildings to renovation, waterproofing, and interior fit-out. Learn what each service involves and how to plan with Space Build Haldwani. Book a free consultation.",

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
