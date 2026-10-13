
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Affordable Interior Design Ideas for Small Apartments",

  description:
    "Browse affordable interior design ideas for small apartment living: free fixes, low-cost upgrades and planned storage, with room-wise tips and budgeting.",

  keywords:
    "affordable interior design ideas for small apartment living, free rearrangements, low-cost upgrades, smart storage, light, colour and humid-climate care, room-wise interior design tips, apartment budget planning",

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
      "https://www.spacebuild.co.in/affordable-interior-design-ideas-for-small-apartments",
  },

  openGraph: {
    title: "Affordable Interior Design Ideas for Small Apartments",

    description:
      "Browse affordable interior design ideas for small apartment living: free fixes, low-cost upgrades and planned storage, with room-wise tips and budgeting.",

    url: "https://www.spacebuild.co.in/affordable-interior-design-ideas-for-small-apartments",

    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Affordable Interior Design Ideas for Small Apartments - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Affordable Interior Design Ideas for Small Apartments",

    description:
      "Browse affordable interior design ideas for small apartment living: free fixes, low-cost upgrades and planned storage, with room-wise tips and budgeting.",

    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
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
