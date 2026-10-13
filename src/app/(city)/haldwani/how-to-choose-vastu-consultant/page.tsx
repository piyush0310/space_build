
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "How to Choose a Vastu Consultant: A Practical Guide | Space Build Haldwani",

  description:
    "Not sure how to choose a Vastu consultant? Learn the key qualities to look for, red flags to avoid and questions to ask before hiring in Haldwani. Practical guidance from Space Build. Visit spacebuild.co.in.",

  keywords:
    "How to choose Vastu consultant, how to choose a Vastu expert, choosing a Vastu consultant, best Vastu consultant selection tips, qualities of a good Vastu consultant, questions to ask Vastu consultant, Vastu consultant red flags, genuine Vastu consultant, Vastu consultant near me, Vastu consultant in Haldwani, best Vastu consultant Haldwani, trusted Vastu expert Haldwani, home Vastu consultation, plot Vastu consultation, commercial Vastu consultant, Vastu remedies without demolition, Vastu consultant Uttarakhand, Vastu consultant Nainital district, Vastu consultant Kathgodam, Space Build Haldwani, Space Build Vastu",

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
      "https://www.spacebuild.co.in/haldwani/how-to-choose-a-vastu-consultant",
  },

  openGraph: {
    title:
      "How to Choose a Vastu Consultant: A Practical Guide | Space Build Haldwani",

    description:
      "Not sure how to choose a Vastu consultant? Learn the key qualities to look for, red flags to avoid and questions to ask before hiring in Haldwani. Practical guidance from Space Build. Visit spacebuild.co.in.",

    url: "https://www.spacebuild.co.in/haldwani/how-to-choose-a-vastu-consultant",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "How to Choose a Vastu Consultant - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "How to Choose a Vastu Consultant: A Practical Guide | Space Build Haldwani",

    description:
      "Not sure how to choose a Vastu consultant? Learn the key qualities to look for, red flags to avoid and questions to ask before hiring in Haldwani. Practical guidance from Space Build. Visit spacebuild.co.in.",

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
