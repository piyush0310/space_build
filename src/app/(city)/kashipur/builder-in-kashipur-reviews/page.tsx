import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Builder in Kashipur Reviews | Read Feedback Before You Hire",
  description:
    "Reading builder in Kashipur reviews? Learn how to spot genuine feedback, avoid fake ratings and use client opinions to choose a dependable construction team.",
  keywords:
    "Check builder in Kashipur reviews for house construction, villa projects, shops and renovation. Learn to verify genuine client feedback, ratings and complaints before hiring local construction professionals.",

  alternates: {
    canonical: "https://www.spacebuild.co.in/builder-in-kashipur-reviews",
  },

  openGraph: {
    title: "Builder in Kashipur Reviews | Read Feedback Before You Hire",
    description:
      "Reading builder in Kashipur reviews? Learn how to spot genuine feedback, avoid fake ratings and use client opinions to choose a dependable construction team.",
    url: "https://www.spacebuild.co.in/builder-in-kashipur-reviews",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Builder in Kashipur Reviews",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Builder in Kashipur Reviews | Read Feedback Before You Hire",
    description:
      "Reading builder in Kashipur reviews? Learn how to spot genuine feedback, avoid fake ratings and use client opinions to choose a dependable construction team.",
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