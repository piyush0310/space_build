import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Pest Control Charges in Moradabad | Space Build – Affordable & Transparent Pricing",
  description:
    "Wondering about pest control charges in Moradabad? Space Build offers transparent, affordable pest control pricing for termite treatment, cockroach control, rodent control and more. Visit spacebuild.co.in for a free quote.",
  keywords:
    "pest control charges Moradabad, pest control cost Moradabad, termite treatment price Moradabad, pest control price list, affordable pest control Moradabad, cockroach control cost, rodent control charges, Space Build Moradabad, pest control rates Moradabad, termite treatment cost per square feet, मोरादाबाद में पेस्ट कंट्रोल का चार्ज, दीमक ट्रीटमेंट का खर्चा मोरादाबाद, pest control ka price Moradabad, ghar ke pest control ka rate, सस्ता पेस्ट कंट्रोल मोरादाबाद, dimak treatment ka kharcha, Space Build pest control price, cockroach control ka charge, मोरादाबाद पेस्ट कंट्रोल रेट लिस्ट, pest control ki fees kitni hai",
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
    title: "Pest Control Charges in Moradabad | Space Build",
    description:
      "Understand pest control pricing in Moradabad with Space Build's transparent charge structure for termite treatment and general pest control services.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Pest Control Charges in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pest Control Charges in Moradabad | Space Build",
    description:
      "Understand pest control pricing in Moradabad with Space Build's transparent charge structure for termite treatment and general pest control services.",
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