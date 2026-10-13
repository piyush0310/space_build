
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Vastu Consultant for House in Haldwani: Home Vastu Guide | Space Build",

  description:
    "Looking for a Vastu consultant for your house in Haldwani? Get practical home Vastu guidance for new construction, existing houses and flats, with no-demolition solutions. Space Build, spacebuild.co.in.",

  keywords:
    "Vastu consultant for house Haldwani, home Vastu consultant Haldwani, house Vastu consultation, Vastu for new house, Vastu for existing house, Vastu expert for home, residential Vastu consultant, Vastu consultant near me, Vastu consultant in Haldwani, Vastu for house construction, Vastu house plan, Vastu for flat, Vastu for rented house, Vastu for main entrance, Vastu for kitchen, Vastu for bedroom, Vastu for pooja room, Vastu remedies without demolition, Vastu consultant Uttarakhand, Vastu consultant Nainital district, Vastu consultant Kathgodam, Space Build Haldwani, Space Build Vastu",

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
      "https://www.spacebuild.co.in/haldwani/vastu-consultant-for-house-in-haldwani",
  },

  openGraph: {
    title:
      "Vastu Consultant for House in Haldwani: Home Vastu Guide | Space Build",

    description:
      "Looking for a Vastu consultant for your house in Haldwani? Get practical home Vastu guidance for new construction, existing houses and flats, with no-demolition solutions. Space Build, spacebuild.co.in.",

    url: "https://www.spacebuild.co.in/haldwani/vastu-consultant-for-house-in-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Consultant for House in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Vastu Consultant for House in Haldwani: Home Vastu Guide | Space Build",

    description:
      "Looking for a Vastu consultant for your house in Haldwani? Get practical home Vastu guidance for new construction, existing houses and flats, with no-demolition solutions. Space Build, spacebuild.co.in.",

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
