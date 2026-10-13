
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Consultant Online | Space Build Haldwani",

  description:
    "Thinking of an online Vastu consultation? Learn how it works, what to prepare, its benefits and limits, and how to turn a Vastu report into a practical interior plan with Space Build Haldwani. Book a free consultation.",

  keywords:
    "Vastu consultant online, online Vastu consultation, Vastu expert online, Vastu consultation by video call, Vastu report online, online Vastu for home, online Vastu for flat, online Vastu for office, Vastu floor plan analysis, how online Vastu works, Vastu consultant fees, Vastu remedies without demolition, Vastu friendly interior, Vastu shastra tips, Vastu correction, interior designer Haldwani, interior design Haldwani, Haldwani interiors, Vastu and interior design, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/haldwani/vastu-consultant-online",
  },

  openGraph: {
    title: "Vastu Consultant Online | Space Build Haldwani",

    description:
      "Thinking of an online Vastu consultation? Learn how it works, what to prepare, its benefits and limits, and how to turn a Vastu report into a practical interior plan with Space Build Haldwani. Book a free consultation.",

    url: "https://www.spacebuild.co.in/haldwani/vastu-consultant-online",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Consultant Online - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Vastu Consultant Online | Space Build Haldwani",

    description:
      "Thinking of an online Vastu consultation? Learn how it works, what to prepare, its benefits and limits, and how to turn a Vastu report into a practical interior plan with Space Build Haldwani. Book a free consultation.",

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
