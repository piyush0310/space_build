
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Interior Designer Haldwani Reviews | How to Read Feedback Before Hiring 2026",
  description:
    "Read interior designer reviews in Haldwani the smart way: spot real feedback, decode common complaints, verify claims on site and learn how studios can earn honest reviews.",
  keywords: [
    "interior designer Haldwani reviews",
    "designer ratings Haldwani",
    "client feedback Haldwani",
    "interior studio reviews Haldwani",
    "modular kitchen reviews Haldwani",
    "home interior feedback Haldwani",
    "genuine reviews Haldwani",
    "designer reputation Haldwani",
    "review checklist Haldwani",
    "complaint patterns interior designers",
  ],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/interior-designer-haldwani-reviews",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Space Build" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title:
      "Interior Designer Haldwani Reviews | How to Read Feedback Before Hiring 2026",
    description:
      "Read interior designer reviews in Haldwani the smart way: spot real feedback, decode common complaints, verify claims on site and learn how studios can earn honest reviews.",
    url: "https://www.spacebuild.co.in/haldwani/interior-designer-haldwani-reviews",
    siteName: "Space Build",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Designer Haldwani Reviews – 2026 Hiring Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Interior Designer Haldwani Reviews | How to Read Feedback Before Hiring 2026",
    description:
      "Learn how to evaluate interior designer ratings, verify client feedback and identify common complaint patterns before hiring in Haldwani.",
    images: ["/og-image.jpg"],
  },
  geo: {
    placename: "Haldwani, Uttarakhand, India",
    region: "IN-UT",
    country: "IN",
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