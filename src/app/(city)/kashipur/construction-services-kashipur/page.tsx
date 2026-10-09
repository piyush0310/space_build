import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Construction Services in Kashipur | Pre, During and Post-Build Guide 2026",
  description:
    "Explore construction services in Kashipur across the full building lifecycle: surveys, design, approvals, equipment, quality checks, handover and long-term maintenance support.",
  keywords: [
    "construction services Kashipur",
    "pre-construction services",
    "land survey and soil testing",
    "architectural drawing services",
    "building approval assistance",
    "estimation and costing service",
    "ready mix concrete supply",
    "equipment rental",
    "labour supply service",
    "scaffolding and shuttering rental",
    "quality inspection service",
    "project management service",
    "snagging and handover",
    "annual maintenance contract",
    "waterproofing maintenance",
    "renovation services",
    "service package comparison",
    "service level agreement",
    "post-construction support",
    "Kashipur building support services",
  ],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/kashipur/construction-services-in-kashipur",
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
      "Construction Services in Kashipur | Pre, During and Post-Build Guide 2026",
    description:
      "Explore construction services in Kashipur across the full building lifecycle: surveys, design, approvals, equipment, quality checks, handover and long-term maintenance support.",
    url: "https://www.spacebuild.co.in/kashipur/construction-services-in-kashipur",
    siteName: "Space Build",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Construction Services in Kashipur - Space Build",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Construction Services in Kashipur | Pre, During and Post-Build Guide 2026",
    description:
      "Explore pre-construction, construction, handover and maintenance services available for building projects in Kashipur.",
    images: ["/og-image.jpg"],
  },
  geo: {
    placename: "Kashipur, Uttarakhand, India",
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