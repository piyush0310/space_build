
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Haldwani Interior Design Companies for Homes | Compare",

  description:
    "Comparing Haldwani interior design companies for homes? Use one identical brief, a side-by-side sheet and simple scoring to pick with confidence.",

  keywords:
    "Haldwani interior design companies for homes, compare Haldwani interior design companies for homes, interior design companies Haldwani, home interior design Haldwani, residential interior designers Haldwani, interior design comparison, interior design brief, interior design drawings, interior design materials, interior design quotations, interior design supervision, interior design warranty, interior designer references, interior design company comparison, best interior design company in Haldwani",

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
      "https://www.spacebuild.co.in/haldwani/haldwani-interior-design-companies-for-homes",
  },

  openGraph: {
    title: "Haldwani Interior Design Companies for Homes | Compare",
    description:
      "Comparing Haldwani interior design companies for homes? Use one identical brief, a side-by-side sheet and simple scoring to pick with confidence.",
    url: "https://www.spacebuild.co.in/haldwani/haldwani-interior-design-companies-for-homes",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Haldwani Interior Design Companies for Homes - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Haldwani Interior Design Companies for Homes | Compare",
    description:
      "Comparing Haldwani interior design companies for homes? Use one identical brief, a side-by-side sheet and simple scoring to pick with confidence.",
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
