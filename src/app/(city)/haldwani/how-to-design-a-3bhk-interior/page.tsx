import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "How to Design a 3BHK Interior | Space Build Haldwani",

  description:
    "Learn how to design a 3BHK interior step by step, from budget and layout to colours, storage, lighting, and execution. A practical guide from Space Build Haldwani. Book a free consultation today.",

  keywords:
    "how to design a 3BHK interior, 3BHK interior design steps, 3BHK interior planning, 3BHK interior guide, 3BHK design process, plan 3BHK home interior, 3BHK interior budget planning, 3BHK colour planning, 3BHK storage planning, 3BHK lighting plan, 3BHK furniture planning, 3BHK interior checklist, DIY 3BHK interior planning, 3BHK interior ideas, 3BHK interior cost, interior designer Haldwani, interior design Haldwani, Haldwani interiors, home interior planning, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/haldwani/how-to-design-a-3bhk-interior",
  },

  openGraph: {
    title:
      "How to Design a 3BHK Interior | Space Build Haldwani",
    description:
      "Learn how to design a 3BHK interior step by step, from budget and layout to colours, storage, lighting, and execution. A practical guide from Space Build Haldwani. Book a free consultation today.",
    url: "https://www.spacebuild.co.in/haldwani/how-to-design-a-3bhk-interior",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "How to Design a 3BHK Interior - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "How to Design a 3BHK Interior | Space Build Haldwani",
    description:
      "Learn how to design a 3BHK interior step by step, from budget and layout to colours, storage, lighting, and execution. A practical guide from Space Build Haldwani. Book a free consultation today.",
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