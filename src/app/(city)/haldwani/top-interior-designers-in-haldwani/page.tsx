import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Top Interior Designers in Haldwani | How to Find the Best for Your Need 2026",
  description:
    'Find the top interior designers in Haldwani by learning what "top" really means, which categories suit your project, how to verify claims and how to shortlist with confidence.',
  keywords: [
    "top interior designers in Haldwani",
    "best interior designer Haldwani",
    "leading interior studio Haldwani",
    "home interior experts Haldwani",
    "modular kitchen specialists Haldwani",
    "Vastu interior designer Haldwani",
    "luxury interiors Haldwani",
    "budget interior designer Haldwani",
    "commercial interiors Haldwani",
    "turnkey interior firm Haldwani",
  ],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/top-interior-designers-haldwani",
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
      "Top Interior Designers in Haldwani | How to Find the Best for Your Need 2026",
    description:
      'Find the top interior designers in Haldwani by learning what "top" really means, which categories suit your project, how to verify claims and how to shortlist with confidence.',
    url: "https://www.spacebuild.co.in/haldwani/top-interior-designers-haldwani",
    siteName: "Space Build",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Top Interior Designers in Haldwani – 2026 Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Top Interior Designers in Haldwani | How to Find the Best for Your Need 2026",
    description:
      "Learn how to compare interior design studios, verify their work and shortlist the right professional for your project in Haldwani.",
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