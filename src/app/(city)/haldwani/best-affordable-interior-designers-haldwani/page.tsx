
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best Affordable Interior Designers Haldwani | Build Routes",

  description:
    "Looking for the best affordable interior designers in Haldwani? Compare local carpenter, factory modular and hybrid routes for cost, quality and repairs.",

  keywords:
    "best affordable interior designers in Haldwani, affordable interior designer Haldwani, local carpenter, factory modular interiors, hybrid interior design, interior design cost, furniture quality, interior installation speed, interior repairs, interior warranty",

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
      "https://www.spacebuild.co.in/haldwani/best-affordable-interior-designers-haldwani",
  },

  openGraph: {
    title: "Best Affordable Interior Designers Haldwani | Build Routes",

    description:
      "Looking for the best affordable interior designers in Haldwani? Compare local carpenter, factory modular and hybrid routes for cost, quality and repairs.",

    url: "https://www.spacebuild.co.in/haldwani/best-affordable-interior-designers-haldwani",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Affordable Interior Designers Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Best Affordable Interior Designers Haldwani | Build Routes",

    description:
      "Looking for the best affordable interior designers in Haldwani? Compare local carpenter, factory modular and hybrid routes for cost, quality and repairs.",

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
