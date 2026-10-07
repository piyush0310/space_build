import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Kashipur Residential Construction Company | Home Building Guide",
  description:
    "Need a Kashipur residential construction company? Learn how to plan family-friendly homes, check teams, control costs and get a safe, comfortable handover.",
  keywords:
    "Choose a Kashipur residential construction company for independent houses, duplexes, villas and rental floors. Learn home planning, safety, budgeting and handover tips for comfortable, durable family living.",

  alternates: {
    canonical: "https://www.spacebuild.co.in/kashipur-residential-construction-company",
  },

  openGraph: {
    title: "Kashipur Residential Construction Company | Home Building Guide",
    description:
      "Need a Kashipur residential construction company? Learn how to plan family-friendly homes, check teams, control costs and get a safe, comfortable handover.",
    url: "https://www.spacebuild.co.in/kashipur-residential-construction-company",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kashipur Residential Construction Company",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kashipur Residential Construction Company | Home Building Guide",
    description:
      "Need a Kashipur residential construction company? Learn how to plan family-friendly homes, check teams, control costs and get a safe, comfortable handover.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
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