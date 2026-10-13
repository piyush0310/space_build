
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Consultant Cost in Haldwani: Fees & Factors | Space Build",

  description:
    "Wondering about Vastu consultant cost in Haldwani? Learn what affects fees for home, plot, shop and office Vastu consultation, and get a clear, honest quote from Space Build. Visit spacebuild.co.in.",

  keywords:
    "Vastu consultant cost in Haldwani, Vastu consultant fees Haldwani, Vastu consultation charges, Vastu consultant price, Vastu expert fees near me, cost of Vastu consultation for home, Vastu consultation for plot cost, commercial Vastu consultant charges, shop Vastu consultation fees, office Vastu consultant cost, Vastu consultant near me, Vastu consultant in Haldwani, best Vastu consultant Haldwani, affordable Vastu consultant, Vastu consultation without demolition, Vastu house plan cost, Vastu site visit charges, Vastu consultant Uttarakhand, Vastu consultant Nainital district, Space Build Haldwani, Space Build Vastu",

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
      "https://www.spacebuild.co.in/haldwani/vastu-consultant-cost-in-haldwani",
  },

  openGraph: {
    title: "Vastu Consultant Cost in Haldwani: Fees & Factors | Space Build",

    description:
      "Wondering about Vastu consultant cost in Haldwani? Learn what affects fees for home, plot, shop and office Vastu consultation, and get a clear, honest quote from Space Build. Visit spacebuild.co.in.",

    url: "https://www.spacebuild.co.in/haldwani/vastu-consultant-cost-in-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Consultant Cost in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vastu Consultant Cost in Haldwani: Fees & Factors | Space Build",

    description:
      "Wondering about Vastu consultant cost in Haldwani? Learn what affects fees for home, plot, shop and office Vastu consultation, and get a clear, honest quote from Space Build. Visit spacebuild.co.in.",

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
