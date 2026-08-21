import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Construction Timeline Management in Moradabad | Space Build",
  description:
    "Space Build provides construction timeline management in Moradabad, tracking milestones, managing delays, and keeping projects on schedule from start to finish.",
  keywords:
    "construction timeline management Moradabad, construction schedule tracking Moradabad, project timeline management Moradabad, construction delay management Moradabad, Space Build Moradabad, milestone tracking construction Moradabad, construction progress monitoring Moradabad, on-time project delivery Moradabad, construction schedule recovery Moradabad, critical path construction Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/construction-timeline-management-moradabad",
  },
  openGraph: {
    title: "Construction Timeline Management in Moradabad | Space Build",
    description:
      "Space Build provides construction timeline management in Moradabad, tracking milestones, managing delays, and keeping projects on schedule from start to finish.",
    url: "https://www.spacebuild.co.in/construction-timeline-management-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Construction Timeline Management in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Timeline Management in Moradabad | Space Build",
    description:
      "Space Build provides construction timeline management in Moradabad, tracking milestones, managing delays, and keeping projects on schedule from start to finish.",
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