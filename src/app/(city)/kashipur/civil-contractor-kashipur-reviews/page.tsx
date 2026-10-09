import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Civil Contractor Kashipur Reviews | Decode Cracks and Leaks",
  description:
    "Reading civil contractor Kashipur reviews? Decode comments about cracks, leaks and damp walls into real causes, smart questions and inspection checks.",
  keywords: [
    "civil contractor Kashipur reviews",
    "civil contractor reviews Kashipur",
    "cracks in walls",
    "roof leakage complaints",
    "damp wall problems",
    "construction defect reviews",
    "civil construction workmanship",
    "structural care",
    "construction quality checks",
    "wall crack causes",
    "terrace waterproofing",
    "damp-proofing methods",
    "construction inspection checklist",
    "contractor review analysis",
    "building defect inspection",
    "tilting boundary walls",
    "construction curing practices",
    "water drainage problems",
    "contractor verification Kashipur",
    "Kashipur builder reputation",
  ],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/kashipur/civil-contractor-kashipur-reviews",
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
    title: "Civil Contractor Kashipur Reviews | Decode Cracks and Leaks",
    description:
      "Reading civil contractor Kashipur reviews? Decode comments about cracks, leaks and damp walls into real causes, smart questions and inspection checks.",
    url: "https://www.spacebuild.co.in/kashipur/civil-contractor-kashipur-reviews",
    siteName: "Space Build",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Civil Contractor Kashipur Reviews - Decode Cracks and Leaks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Civil Contractor Kashipur Reviews | Decode Cracks and Leaks",
    description:
      "Reading civil contractor Kashipur reviews? Decode comments about cracks, leaks and damp walls into real causes, smart questions and inspection checks.",
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