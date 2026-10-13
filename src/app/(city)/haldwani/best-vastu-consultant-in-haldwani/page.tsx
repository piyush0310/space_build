
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best Vastu Consultant in Haldwani | Space Build Haldwani",

  description:
    "How do you find the best Vastu consultant in Haldwani? Learn the qualities to look for, questions to ask, red flags to avoid, and how Vastu guidance fits your interior plan with Space Build Haldwani. Book a free consultation.",

  keywords:
    "best Vastu consultant in Haldwani, top Vastu expert Haldwani, Vastu consultant near me, how to choose Vastu consultant, Vastu consultant fees, Vastu consultation for home, Vastu consultation for office, Vastu report, Vastu for new house, Vastu for flat, Vastu correction, Vastu remedies without demolition, trusted Vastu expert, Vastu friendly interior, Vastu shastra Haldwani, interior designer Haldwani, interior design Haldwani, Haldwani interiors, Vastu and interior design, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/haldwani/best-vastu-consultant-in-haldwani",
  },

  openGraph: {
    title: "Best Vastu Consultant in Haldwani | Space Build Haldwani",

    description:
      "How do you find the best Vastu consultant in Haldwani? Learn the qualities to look for, questions to ask, red flags to avoid, and how Vastu guidance fits your interior plan with Space Build Haldwani. Book a free consultation.",

    url: "https://www.spacebuild.co.in/haldwani/best-vastu-consultant-in-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Vastu Consultant in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Vastu Consultant in Haldwani | Space Build Haldwani",

    description:
      "How do you find the best Vastu consultant in Haldwani? Learn the qualities to look for, questions to ask, red flags to avoid, and how Vastu guidance fits your interior plan with Space Build Haldwani. Book a free consultation.",

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
