import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Experienced Civil Contractor in Kashipur | How to Identify True Expertise",
  description:
    "Searching for an experienced civil contractor in Kashipur? Learn how to measure real expertise, check past work, compare rates and hire a skilled builder with confidence.",
  keywords: [
    "experienced civil contractor Kashipur",
    "skilled building contractor",
    "senior civil contractor",
    "civil work expertise",
    "RCC construction specialist",
    "years of experience contractor",
    "proven builder Kashipur",
    "structural work contractor",
    "residential and commercial contractor",
    "industrial construction contractor",
    "contractor portfolio check",
    "civil engineering supervision",
    "construction quality control",
    "contractor experience verification",
    "civil work rate Kashipur",
    "project completion record",
    "professional builder Uttarakhand",
    "construction safety standards",
    "civil contractor agreement",
    "reliable construction partner",
  ],
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/kashipur/experienced-civil-contractor-kashipur",
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
      "Experienced Civil Contractor in Kashipur | How to Identify True Expertise",
    description:
      "Searching for an experienced civil contractor in Kashipur? Learn how to measure real expertise, check past work, compare rates and hire a skilled builder with confidence.",
    url: "https://www.spacebuild.co.in/kashipur/experienced-civil-contractor-kashipur",
    siteName: "Space Build",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Experienced Civil Contractor in Kashipur - Space Build",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Experienced Civil Contractor in Kashipur | How to Identify True Expertise",
    description:
      "Learn how to verify a civil contractor's experience, inspect past projects, compare rates and choose a skilled builder in Kashipur.",
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