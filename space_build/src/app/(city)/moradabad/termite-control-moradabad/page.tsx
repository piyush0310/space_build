import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Termite Control in Moradabad | Space Build",
  description:
    "Protect your property with expert termite control in Moradabad by Space Build. Pre & post-construction treatments, safe chemicals & long-term protection.",
  keywords:
    "termite control Moradabad, termite treatment Moradabad, anti termite treatment, pre construction termite treatment, post construction termite control, Space Build termite control, termite control company Moradabad, termite proofing services, wood termite treatment, termite control cost Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/termite-control-moradabad",
  },
  openGraph: {
    title: "Termite Control in Moradabad | Space Build",
    description:
      "Protect your property with expert termite control in Moradabad by Space Build. Pre & post-construction treatments, safe chemicals & long-term protection.",
    url: "https://www.spacebuild.co.in/termite-control-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Termite Control in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Termite Control in Moradabad | Space Build",
    description:
      "Protect your property with expert termite control in Moradabad by Space Build. Pre & post-construction treatments, safe chemicals & long-term protection.",
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