import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Top 10 Affordable Interior Designers in Haldwani | Space Build Moradabad",

  description:
    "Looking for affordable interior designers in Haldwani? Discover the top 10 qualities that define a budget-friendly, trustworthy designer, plus pricing tips from Space Build Moradabad. Book a free consultation today.",

  keywords:
    "affordable interior designers in Haldwani, top 10 interior designers Haldwani, budget interior designer, low cost interior design, home interior Haldwani, interior designer near me, modular kitchen Haldwani, wardrobe design, false ceiling design, turnkey interiors, 2BHK interior, 3BHK interior, living room interior, bedroom interior, office interior, interior cost, Haldwani interiors, Uttarakhand interior designer, Space Build Moradabad, interior quote",

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
      "https://www.spacebuild.co.in/haldwani/top-10-affordable-interior-designers-in-haldwani",
  },

  openGraph: {
    title:
      "Top 10 Affordable Interior Designers in Haldwani | Space Build Moradabad",
    description:
      "Looking for affordable interior designers in Haldwani? Discover the top 10 qualities that define a budget-friendly, trustworthy designer, plus pricing tips from Space Build Moradabad. Book a free consultation today.",
    url: "https://www.spacebuild.co.in/haldwani/top-10-affordable-interior-designers-in-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Top 10 Affordable Interior Designers in Haldwani - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Top 10 Affordable Interior Designers in Haldwani | Space Build Moradabad",
    description:
      "Looking for affordable interior designers in Haldwani? Discover the top 10 qualities that define a budget-friendly, trustworthy designer, plus pricing tips from Space Build Moradabad. Book a free consultation today.",
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