import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Pest Control Company in Moradabad | Space Build",
  description:
    "Space Build is a trusted pest control company in Moradabad, offering certified technicians, safe treatments & guaranteed results for homes & businesses.",
  keywords:
    "pest control company Moradabad, best pest control company Moradabad, Space Build pest control, certified pest control Moradabad, pest management company Moradabad, termite control company Moradabad, residential pest control company, commercial pest control company Moradabad, pest control experts Moradabad, top pest control services Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/pest-control-company-moradabad",
  },
  openGraph: {
    title: "Pest Control Company in Moradabad | Space Build",
    description:
      "Space Build is a trusted pest control company in Moradabad, offering certified technicians, safe treatments & guaranteed results for homes & businesses.",
    url: "https://www.spacebuild.co.in/pest-control-company-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Pest Control Company in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pest Control Company in Moradabad | Space Build",
    description:
      "Space Build is a trusted pest control company in Moradabad, offering certified technicians, safe treatments & guaranteed results for homes & businesses.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },
  icons: {
    icon: "/favicon-v2.ico",
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