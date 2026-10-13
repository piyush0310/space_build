
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Consultant Reviews in Haldwani: How to Choose | Space Build",

  description:
    "Looking for Vastu consultant reviews in Haldwani? Learn how to read reviews, spot genuine feedback, check a consultant's credibility and choose wisely. Practical guidance from Space Build. Visit spacebuild.co.in.",

  keywords:
    "Vastu consultant reviews Haldwani, Vastu consultant ratings, best Vastu consultant in Haldwani, Vastu consultant testimonials, genuine Vastu consultant reviews, how to choose a Vastu consultant, Vastu consultant near me, Vastu consultant in Haldwani, trusted Vastu expert Haldwani, Vastu consultation feedback, home Vastu consultation, plot Vastu consultation, commercial Vastu consultant, Vastu remedies without demolition, Vastu consultant Uttarakhand, Vastu consultant Nainital district, Vastu consultant Kathgodam, Vastu consultant credibility, Space Build Haldwani, Space Build Vastu",

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
      "https://www.spacebuild.co.in/haldwani/vastu-consultant-reviews-in-haldwani",
  },

  openGraph: {
    title: "Vastu Consultant Reviews in Haldwani: How to Choose | Space Build",

    description:
      "Looking for Vastu consultant reviews in Haldwani? Learn how to read reviews, spot genuine feedback, check a consultant's credibility and choose wisely. Practical guidance from Space Build. Visit spacebuild.co.in.",

    url: "https://www.spacebuild.co.in/haldwani/vastu-consultant-reviews-in-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Consultant Reviews in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vastu Consultant Reviews in Haldwani: How to Choose | Space Build",

    description:
      "Looking for Vastu consultant reviews in Haldwani? Learn how to read reviews, spot genuine feedback, check a consultant's credibility and choose wisely. Practical guidance from Space Build. Visit spacebuild.co.in.",

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
