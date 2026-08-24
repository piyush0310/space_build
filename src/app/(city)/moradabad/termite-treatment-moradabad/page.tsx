import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Termite Treatment Moradabad | Space Build – Deemak Control & Anti-Termite Services",
  description:
    "Protect your property from termites with Space Build's expert termite treatment services in Moradabad. Safe, effective, and long-lasting anti-termite solutions for homes and businesses. Book a free inspection today!",
  keywords:
    "termite treatment Moradabad, anti-termite treatment Moradabad, termite control Moradabad, termite control company Moradabad, termite treatment near me, pre-construction termite treatment Moradabad, post-construction termite treatment Moradabad, termite proofing Moradabad, termite inspection Moradabad, termite pest control Moradabad, wood termite treatment, termite removal service Moradabad, best termite treatment company Moradabad, Space Build termite treatment, residential termite treatment Moradabad, commercial termite treatment Moradabad, soil treatment for termites, chemical barrier termite treatment, termite protection services Moradabad, affordable termite treatment Moradabad, deemak ka ilaj Moradabad, deemak treatment Moradabad mein, deemak control company Moradabad, ghar mein deemak lagne ka ilaj, deemak bhagane wali service Moradabad, lakdi ka deemak treatment, deemak se bachne ka tarika, anti termite treatment Moradabad mein, deemak ki dawai Moradabad, naye ghar ke liye deemak treatment, purane ghar mein deemak ka ilaj, Space Build deemak treatment, sasti deemak treatment service Moradabad, bharosemand deemak control company, deemak inspection service Moradabad, termite treatment, Moradabad, Space Build, deemak treatment, anti-termite service, termite control company, termite inspection, pre-construction treatment, post-construction treatment, soil treatment, chemical barrier, wood protection, termite proofing, residential termite control, commercial termite control",
  alternates: {
    canonical: "https://www.spacebuild.co.in/termite-treatment-moradabad",
  },
  openGraph: {
    title:
      "Termite Treatment Moradabad | Space Build – Deemak Control & Anti-Termite Services",
    description:
      "Protect your property from termites with Space Build's expert termite treatment services in Moradabad. Safe, effective, and long-lasting anti-termite solutions for homes and businesses. Book a free inspection today!",
    url: "https://www.spacebuild.co.in/termite-treatment-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Termite Treatment and Deemak Control in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Termite Treatment Moradabad | Space Build – Deemak Control & Anti-Termite Services",
    description:
      "Protect your property from termites with Space Build's expert termite treatment services in Moradabad. Safe, effective, and long-lasting anti-termite solutions for homes and businesses. Book a free inspection today!",
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