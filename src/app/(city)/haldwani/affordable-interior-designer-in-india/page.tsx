import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Affordable Interior Designer in India | Region-wise Guide",

  description:
    "Searching for an affordable interior designer in India? See how climate, city type and home style change planning, materials and costs across regions.",

  keywords:
    "Find an affordable interior designer in India by matching climate, city type, home style and delivery distance. Plan materials, budgets, remote services and payments carefully.",

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
      "https://www.spacebuild.co.in/affordable-interior-designer-in-india",
  },

  openGraph: {
    title: "Affordable Interior Designer in India | Region-wise Guide",
    description:
      "Searching for an affordable interior designer in India? See how climate, city type and home style change planning, materials and costs across regions.",
    url: "https://www.spacebuild.co.in/affordable-interior-designer-in-india",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Affordable Interior Designer in India - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Affordable Interior Designer in India | Region-wise Guide",
    description:
      "Searching for an affordable interior designer in India? See how climate, city type and home style change planning, materials and costs across regions.",
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