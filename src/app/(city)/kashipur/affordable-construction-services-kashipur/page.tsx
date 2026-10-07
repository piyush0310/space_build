import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Affordable Construction Services Kashipur | Budget Build Guide",

  description:
    "Looking for affordable construction services in Kashipur? Learn smart planning, material choices and contract tips to build a strong home within your budget.",

  keywords:
    "Find affordable construction services in Kashipur for budget homes, small shops, renovation and extensions. Learn cost-saving design, material choices and honest pricing tips for strong, economical construction.",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Space Build Moradabad",
    },
  ],

  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },

  openGraph: {
    title: "Affordable Construction Services Kashipur | Budget Build Guide",
    description:
      "Looking for affordable construction services in Kashipur? Learn smart planning, material choices and contract tips to build a strong home within your budget.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Affordable Construction Services Kashipur | Budget Build Guide",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Affordable Construction Services Kashipur | Budget Build Guide",
    description:
      "Looking for affordable construction services in Kashipur? Learn smart planning, material choices and contract tips to build a strong home within your budget.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Affordable Construction Services Kashipur | Budget Build Guide",
    "geo.placename": "Kashipur, Uttarakhand",
    "geo.region": "IN-UK",
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