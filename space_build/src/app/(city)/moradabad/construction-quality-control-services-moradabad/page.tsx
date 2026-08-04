import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Construction Quality Control Services in Moradabad | Space Build",
  description:
    "Space Build provides construction quality control services in Moradabad, covering material testing, checklists, and inspection standards to prevent defects.",
  keywords:
    "construction quality control Moradabad, quality control services Moradabad, construction quality assurance Moradabad, building inspection Moradabad, Space Build Moradabad, material testing construction Moradabad, construction defect prevention Moradabad, quality checklist construction Moradabad, structural quality control Moradabad, building quality audit Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/construction-quality-control-services-moradabad",
  },
  openGraph: {
    title: "Construction Quality Control Services in Moradabad | Space Build",
    description:
      "Space Build provides construction quality control services in Moradabad, covering material testing, checklists, and inspection standards to prevent defects.",
    url: "https://www.spacebuild.co.in/construction-quality-control-services-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Construction Quality Control Services in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Quality Control Services in Moradabad | Space Build",
    description:
      "Space Build provides construction quality control services in Moradabad, covering material testing, checklists, and inspection standards to prevent defects.",
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