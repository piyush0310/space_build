import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Monthly Pest Control Service in Moradabad | Space Build – Regular Protection Plans",
  description:
    "Keep your home or business pest-free all year with monthly pest control service in Moradabad from Space Build. Scheduled visits, consistent protection, transparent pricing. Visit spacebuild.co.in to subscribe.",
  keywords:
    "monthly pest control service Moradabad, monthly pest control plan, regular pest control visits, monthly termite inspection Moradabad, subscription pest control service, monthly pest control package, Space Build Moradabad, recurring pest control service, monthly cockroach control, scheduled pest control Moradabad, मोरादाबाद में मासिक पेस्ट कंट्रोल सर्विस, monthly pest control plan Moradabad, har mahine pest control ki visit, मासिक दीमक जांच मोरादाबाद, ghar ke liye monthly pest control, नियमित पेस्ट कंट्रोल सर्विस, Space Build monthly plan, subscription wala pest control, मोरादाबाद में हर महीने पेस्ट कंट्रोल, monthly cockroach aur kide control",
  authors: [
    {
      name: "Space Build",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },
  openGraph: {
    title: "Monthly Pest Control Service in Moradabad | Space Build",
    description:
      "Subscribe to Space Build's monthly pest control service in Moradabad for consistent, scheduled protection against termites and common household pests.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Monthly Pest Control Service in Moradabad - Space Build",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monthly Pest Control Service in Moradabad | Space Build",
    description:
      "Subscribe to Space Build's monthly pest control service in Moradabad for consistent, scheduled protection against termites and common household pests.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  other: {
    language: "English",
    "geo.region": "IN-UP",
    "geo.placename": "Moradabad",
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