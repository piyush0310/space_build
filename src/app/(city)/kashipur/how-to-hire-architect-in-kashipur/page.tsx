import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "How to Hire an Architect in Kashipur | Spacebuild Guide 2026",

  description:
    "Planning to hire an architect in Kashipur? Spacebuild shares a complete guide covering costs, qualifications, red flags, and tips to choose the right architect for your home or commercial project.",

  keywords:
    "architect in Kashipur, hire architect Kashipur, best architect Kashipur, architecture firm Kashipur, house design Kashipur, residential architect Kashipur, commercial architect Kashipur, Spacebuild Kashipur, architect fees in Kashipur, home construction Kashipur, building design Kashipur, interior designer Kashipur, civil engineer Kashipur, architect near me Kashipur, Uttarakhand architect, Udham Singh Nagar architect, custom home design Kashipur, architect for bungalow Kashipur, construction company Kashipur, structural design Kashipur, vastu architect Kashipur, affordable architect Kashipur",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Spacebuild",
    },
  ],

  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },

  openGraph: {
    title: "How to Hire an Architect in Kashipur | Spacebuild Guide 2026",
    description:
      "Planning to hire an architect in Kashipur? Spacebuild shares a complete guide covering costs, qualifications, red flags, and tips to choose the right architect for your home or commercial project.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Spacebuild",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "How to Hire an Architect in Kashipur - Spacebuild Guide",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "How to Hire an Architect in Kashipur | Spacebuild Guide 2026",
    description:
      "A complete Spacebuild guide to hiring the right architect in Kashipur for your home, bungalow, commercial space, or construction project.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "How to Hire an Architect in Kashipur | Spacebuild Guide 2026",
    "geo.placename": "Kashipur, Uttarakhand",
    "geo.region": "IN-UK",
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