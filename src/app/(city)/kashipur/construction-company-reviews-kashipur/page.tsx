import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Construction Company Reviews in Kashipur | Read, Verify and Use Feedback 2026",
  description:
    "Learn how to read construction company reviews in Kashipur: sort complaints by type, track review timelines, test company replies and turn feedback into a safe hiring decision.",
  keywords: [
    "construction company reviews Kashipur",
    "company feedback analysis",
    "review file method",
    "complaint category check",
    "review timeline pattern",
    "company reply quality",
    "rating average trap",
    "verified client feedback",
    "delay complaints",
    "hidden charge complaints",
    "quality defect reviews",
    "after handover complaints",
    "review authenticity check",
    "builder reputation research",
    "review to reality check",
    "homeowner experience feedback",
    "construction ratings",
    "negative review handling",
    "reference call questions",
    "Kashipur builder reputation",
  ],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/kashipur/construction-company-reviews-kashipur",
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
      "Construction Company Reviews in Kashipur | Read, Verify and Use Feedback 2026",
    description:
      "Learn how to read construction company reviews in Kashipur: sort complaints by type, track review timelines, test company replies and turn feedback into a safe hiring decision.",
    url: "https://www.spacebuild.co.in/kashipur/construction-company-reviews-kashipur",
    siteName: "Space Build",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Construction Company Reviews in Kashipur - Space Build",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Construction Company Reviews in Kashipur | Read, Verify and Use Feedback 2026",
    description:
      "Learn how to read construction company reviews in Kashipur: sort complaints by type, track review timelines, test company replies and turn feedback into a safe hiring decision.",
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