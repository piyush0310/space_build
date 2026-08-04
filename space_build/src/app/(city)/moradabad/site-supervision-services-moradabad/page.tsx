import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Site Supervision Services in Moradabad | Space Build",
  description:
    "Space Build provides professional site supervision services in Moradabad, ensuring quality workmanship, safety compliance, and daily progress monitoring on every project.",
  keywords:
    "site supervision services Moradabad, construction site supervision Moradabad, site supervisor Moradabad, quality supervision construction Moradabad, Space Build Moradabad, on-site construction monitoring Moradabad, building site inspection Moradabad, construction safety supervision Moradabad, site management services Moradabad, daily site monitoring Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/site-supervision-services-moradabad",
  },
  openGraph: {
    title: "Site Supervision Services in Moradabad | Space Build",
    description:
      "Space Build provides professional site supervision services in Moradabad, ensuring quality workmanship, safety compliance, and daily progress monitoring on every project.",
    url: "https://www.spacebuild.co.in/site-supervision-services-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Site Supervision Services in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Site Supervision Services in Moradabad | Space Build",
    description:
      "Space Build provides professional site supervision services in Moradabad, ensuring quality workmanship, safety compliance, and daily progress monitoring on every project.",
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