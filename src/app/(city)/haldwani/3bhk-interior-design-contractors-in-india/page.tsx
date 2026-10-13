import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "3BHK Interior Design Contractors in India | Space Build Haldwani",

  description:
    "Choosing among 3BHK interior design contractors in India? Learn contractor types, selection checks, contract points, payment tips, and red flags, with guidance from Space Build Haldwani. Book a free consultation.",

  keywords:
    "3BHK interior design contractors in India, 3BHK interior contractor, interior contractors India, 3BHK turnkey contractor, home interior contractor, how to choose interior contractor, 3BHK interior company, interior contractor checklist, interior contractor agreement, interior contractor payment terms, 3BHK interior execution, 3BHK interior cost, trusted interior contractor, interior contractor Haldwani, interior designer Haldwani, interior design Haldwani, Haldwani interiors, 3BHK interior quote, home renovation contractor, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/haldwani/3bhk-interior-design-contractors-in-india",
  },

  openGraph: {
    title:
      "3BHK Interior Design Contractors in India | Space Build Haldwani",
    description:
      "Choosing among 3BHK interior design contractors in India? Learn contractor types, selection checks, contract points, payment tips, and red flags, with guidance from Space Build Haldwani. Book a free consultation.",
    url: "https://www.spacebuild.co.in/haldwani/3bhk-interior-design-contractors-in-india",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "3BHK Interior Design Contractors in India - Space Build Haldwani",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "3BHK Interior Design Contractors in India | Space Build Haldwani",
    description:
      "Choosing among 3BHK interior design contractors in India? Learn contractor types, selection checks, contract points, payment tips, and red flags, with guidance from Space Build Haldwani. Book a free consultation.",
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