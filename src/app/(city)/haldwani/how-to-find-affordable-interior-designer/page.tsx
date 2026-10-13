import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "How to Find Affordable Interior Designer | 7 Channels",

  description:
    "Learn how to find an affordable interior designer using seven trusted channels, a one-week search plan, budget scripts and safe hiring checks.",

  keywords:
    "Learn how to find affordable interior designer options through referrals, local carpenters, studios, students and platforms. Follow a one-week plan, compare quotations and hire safely.",

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
      "https://www.spacebuild.co.in/how-to-find-affordable-interior-designer",
  },

  openGraph: {
    title: "How to Find Affordable Interior Designer | 7 Channels",
    description:
      "Learn how to find an affordable interior designer using seven trusted channels, a one-week search plan, budget scripts and safe hiring checks.",
    url: "https://www.spacebuild.co.in/how-to-find-affordable-interior-designer",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "How to Find an Affordable Interior Designer - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "How to Find Affordable Interior Designer | 7 Channels",
    description:
      "Learn how to find an affordable interior designer using seven trusted channels, a one-week search plan, budget scripts and safe hiring checks.",
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