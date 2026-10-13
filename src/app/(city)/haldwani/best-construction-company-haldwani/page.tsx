
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best Construction Company Haldwani | Space Build Haldwani",

  description:
    "How do you pick the best construction company in Haldwani? Use this scorecard of qualities, site checks, contract points, and red flags, and see how Space Build Haldwani plans builds with interiors in mind. Book a free consultation.",

  keywords:
    "best construction company Haldwani, top builders Haldwani, trusted home builder Haldwani, how to choose builder, construction company checklist, house construction Haldwani, residential construction Haldwani, commercial construction Haldwani, civil contractor Haldwani, turnkey construction Haldwani, construction contract checklist, construction quality check, earthquake resistant building, construction with interiors, design and build Haldwani, interior designer Haldwani, interior design Haldwani, Haldwani construction, home building Uttarakhand, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/haldwani/best-construction-company-haldwani",
  },

  openGraph: {
    title: "Best Construction Company Haldwani | Space Build Haldwani",

    description:
      "How do you pick the best construction company in Haldwani? Use this scorecard of qualities, site checks, contract points, and red flags, and see how Space Build Haldwani plans builds with interiors in mind. Book a free consultation.",

    url: "https://www.spacebuild.co.in/haldwani/best-construction-company-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Construction Company Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Best Construction Company Haldwani | Space Build Haldwani",

    description:
      "How do you pick the best construction company in Haldwani? Use this scorecard of qualities, site checks, contract points, and red flags, and see how Space Build Haldwani plans builds with interiors in mind. Book a free consultation.",

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
