import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Pest Control for Shops in Moradabad | Space Build – Protect Your Merchandise & Customers",
  description:
    "Safeguard your retail shop or showroom with professional pest control for shops in Moradabad by Space Build. Protect merchandise, maintain hygiene and boost customer confidence. Visit spacebuild.co.in for a quote.",
  keywords:
    "pest control for shops Moradabad, retail shop pest control, showroom pest control Moradabad, small business pest control, shop pest treatment, market pest control Moradabad, Space Build Moradabad, brassware shop pest control, clothing store pest control, godown pest control Moradabad, मोरादाबाद में दुकान का पेस्ट कंट्रोल, dukaan ke liye pest control Moradabad, showroom mein kide makode ka ilaj, बाजार पेस्ट कंट्रोल सर्विस मोरादाबाद, chhoti dukan ke liye pest control, पीतल उद्योग दुकान पेस्ट कंट्रोल, Space Build shop service, kapde ki dukan mein pest control, मोरादाबाद में गोदाम पेस्ट कंट्रोल, retail business pest control",
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
    title: "Pest Control for Shops in Moradabad | Space Build",
    description:
      "Protect your retail business with Space Build's specialized shop and showroom pest control services in Moradabad.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control for Shops in Moradabad - Space Build",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pest Control for Shops in Moradabad | Space Build",
    description:
      "Protect your retail business with Space Build's specialized shop and showroom pest control services in Moradabad.",
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