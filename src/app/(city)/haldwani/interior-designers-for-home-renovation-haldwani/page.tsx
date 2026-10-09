
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Interior Designers for Home Renovation in Haldwani | Plan, Cost and Hiring Guide 2026",
  description:
    "Planning a home renovation in Haldwani? Learn how designers survey old houses, sequence work, handle leaks and wiring, estimate costs and avoid delays during remodelling.",
  keywords: [
    "interior designers for home renovation Haldwani",
    "home renovation Haldwani",
    "house remodelling Haldwani",
    "old house makeover Haldwani",
    "kitchen renovation Haldwani",
    "bathroom renovation Haldwani",
    "waterproofing Haldwani",
    "rewiring Haldwani",
    "renovation cost Haldwani",
    "renovation contractor Haldwani",
    "Vastu renovation Haldwani",
  ],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/haldwani/interior-designers-home-renovation-haldwani",
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
      "Interior Designers for Home Renovation in Haldwani | Plan, Cost and Hiring Guide 2026",
    description:
      "Planning a home renovation in Haldwani? Learn how designers survey old houses, sequence work, handle leaks and wiring, estimate costs and avoid delays during remodelling.",
    url: "https://www.spacebuild.co.in/haldwani/interior-designers-home-renovation-haldwani",
    siteName: "Space Build",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Interior Designers for Home Renovation in Haldwani – 2026 Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Interior Designers for Home Renovation in Haldwani | Plan, Cost and Hiring Guide 2026",
    description:
      "Learn about renovation surveys, work sequencing, costs, waterproofing, electrical upgrades and hiring a renovation designer in Haldwani.",
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