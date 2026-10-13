import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Architect in Haldwani: Home & Commercial Design Guide | Space Build",

  description:
    "Looking for an architect in Haldwani? Learn what an architect does, how the design process works, what services to expect and how to choose the right one for your home or commercial project. Space Build, spacebuild.co.in.",

  keywords:
    "architect in Haldwani, best architect in Haldwani, architect near me, residential architect Haldwani, commercial architect Haldwani, house design Haldwani, home architect Haldwani, architectural design services, house plan Haldwani, 3D elevation design, building design Haldwani, interior and exterior design, architect and construction company, Vastu friendly architect, Vastu house plan, map approval Haldwani, architect Nainital district, architect Kathgodam, architect Uttarakhand, Space Build Haldwani, Space Build architecture",

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
      "https://www.spacebuild.co.in/haldwani/architect-in-haldwani",
  },

  openGraph: {
    title:
      "Architect in Haldwani: Home & Commercial Design Guide | Space Build",
    description:
      "Looking for an architect in Haldwani? Learn what an architect does, how the design process works, what services to expect and how to choose the right one for your home or commercial project. Space Build, spacebuild.co.in.",
    url: "https://www.spacebuild.co.in/haldwani/architect-in-haldwani",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Architect in Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Architect in Haldwani: Home & Commercial Design Guide | Space Build",
    description:
      "Looking for an architect in Haldwani? Learn what an architect does, how the design process works, what services to expect and how to choose the right one for your home or commercial project. Space Build, spacebuild.co.in.",
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