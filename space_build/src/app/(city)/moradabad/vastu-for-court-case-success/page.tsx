import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu for Court Case Success | Space Build",
  description:
    "Explore traditional Vastu beliefs related to court cases with Space Build. Learn home direction, remedies & tips believed to support mental clarity.",
  keywords:
    "vastu for court case success, vastu remedies for legal matters, vastu for legal disputes, Space Build vastu consultation, vastu tips for mental clarity, vastu for confidence, vastu remedies for home, vastu tips for home Moradabad, vastu for decision making, vastu for stress relief",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-for-court-case-success",
  },
  openGraph: {
    title: "Vastu for Court Case Success | Space Build",
    description:
      "Explore traditional Vastu beliefs related to court cases with Space Build. Learn home direction, remedies & tips believed to support mental clarity.",
    url: "https://www.spacebuild.co.in/vastu-for-court-case-success",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu for Court Case Success",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu for Court Case Success | Space Build",
    description:
      "Explore traditional Vastu beliefs related to court cases with Space Build. Learn home direction, remedies & tips believed to support mental clarity.",
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