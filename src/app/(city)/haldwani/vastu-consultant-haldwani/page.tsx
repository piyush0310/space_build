
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Consultant Haldwani | Space Build Haldwani",

  description:
    "Looking for a Vastu consultant in Haldwani? Learn what a Vastu consultation covers, how to choose a consultant, and how Vastu-guided planning fits your home or office design with Space Build Haldwani. Book a free consultation.",

  keywords:
    "Vastu consultant Haldwani, Vastu expert Haldwani, Vastu consultation Haldwani, Vastu for home Haldwani, Vastu for office Haldwani, Vastu for new house, Vastu for flat, Vastu correction, Vastu dosh remedies, Vastu friendly interior, Vastu kitchen direction, Vastu bedroom direction, Vastu main door, Vastu shastra tips, Vastu report, Vastu consultant near me, interior designer Haldwani, interior design Haldwani, Haldwani interiors, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/haldwani/vastu-consultant-haldwani",
  },

  openGraph: {
    title: "Vastu Consultant Haldwani | Space Build Haldwani",

    description:
      "Looking for a Vastu consultant in Haldwani? Learn what a Vastu consultation covers, how to choose a consultant, and how Vastu-guided planning fits your home or office design with Space Build Haldwani. Book a free consultation.",

    url: "https://www.spacebuild.co.in/haldwani/vastu-consultant-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Consultant Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vastu Consultant Haldwani | Space Build Haldwani",

    description:
      "Looking for a Vastu consultant in Haldwani? Learn what a Vastu consultation covers, how to choose a consultant, and how Vastu-guided planning fits your home or office design with Space Build Haldwani. Book a free consultation.",

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
