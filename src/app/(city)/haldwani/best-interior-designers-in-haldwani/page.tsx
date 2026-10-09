
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Best Interior Designers in Haldwani | Lowest-Regret Selection Method 2026",
  description:
    "Find the best interior designers in Haldwani with a lowest-regret method: weighted scoring, paid pilot stage, reference ladder, tie-breakers and contract safeguards before you commit.",
  keywords: [
    "Best interior designers in Haldwani",
    "best interior designer",
    "home interior experts",
    "designer selection method",
    "interior studio comparison",
    "modular kitchen designer",
    "wardrobe design",
    "Vastu interiors",
    "budget interiors",
    "luxury interiors",
  ],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/best-interior-designers-haldwani",
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
      "Best Interior Designers in Haldwani | Lowest-Regret Selection Method 2026",
    description:
      "Find the best interior designers in Haldwani with a lowest-regret method: weighted scoring, paid pilot stage, reference ladder, tie-breakers and contract safeguards before you commit.",
    url: "https://www.spacebuild.co.in/haldwani/best-interior-designers-haldwani",
    siteName: "Space Build",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Best Interior Designers in Haldwani",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Interior Designers in Haldwani | Lowest-Regret Selection Method 2026",
    description:
      "Find the best interior designers in Haldwani with a lowest-regret method: weighted scoring, paid pilot stage, reference ladder, tie-breakers and contract safeguards before you commit.",
    images: ["/og-image.jpg"],
  },
  other: {
    "geo.placename": "Haldwani, Uttarakhand, India",
    "geo.region": "IN-UT",
    "geo.country": "IN",
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