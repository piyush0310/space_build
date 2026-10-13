
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Consultant Near Me in Haldwani | Space Build",

  description:
    "Looking for a Vastu consultant near you in Haldwani? Space Build offers home, plot, office and shop Vastu consultation with practical, no-demolition solutions. Visit spacebuild.co.in.",

  keywords:
    "Vastu consultant near me, Vastu consultant in Haldwani, best Vastu consultant Haldwani, Vastu expert near me, Vastu shastra consultant Uttarakhand, home Vastu consultation, residential Vastu consultant, commercial Vastu consultant, office Vastu consultation, shop Vastu tips, plot Vastu consultation, Vastu for new house, Vastu for construction, Vastu remedies without demolition, Vastu house plan, Vastu architect Haldwani, Vastu consultant Nainital district, Vastu consultant Kathgodam, Vastu direction guide, Vastu dosh remedies, Space Build Haldwani, Space Build Vastu",

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
      "https://www.spacebuild.co.in/haldwani/vastu-consultant-near-me",
  },

  openGraph: {
    title: "Vastu Consultant Near Me in Haldwani | Space Build",

    description:
      "Looking for a Vastu consultant near you in Haldwani? Space Build offers home, plot, office and shop Vastu consultation with practical, no-demolition solutions. Visit spacebuild.co.in.",

    url: "https://www.spacebuild.co.in/haldwani/vastu-consultant-near-me",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Consultant Near Me in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vastu Consultant Near Me in Haldwani | Space Build",

    description:
      "Looking for a Vastu consultant near you in Haldwani? Space Build offers home, plot, office and shop Vastu consultation with practical, no-demolition solutions. Visit spacebuild.co.in.",

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
