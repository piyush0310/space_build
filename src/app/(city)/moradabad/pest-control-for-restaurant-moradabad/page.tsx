import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Pest Control for Restaurants in Moradabad | Space Build – Hygiene & Compliance Solutions",
  description:
    "Protect your restaurant's reputation with professional pest control for restaurants in Moradabad by Space Build. FSSAI-friendly treatments for kitchens, dining areas and storage. Visit spacebuild.co.in for a consultation.",
  keywords:
    "pest control for restaurants Moradabad, restaurant pest control services, kitchen pest control Moradabad, food industry pest control, FSSAI pest control compliance, hotel and restaurant pest management, Space Build Moradabad, commercial kitchen pest treatment, cockroach control for restaurants, restaurant hygiene pest control, मोरादाबाद में रेस्टोरेंट पेस्ट कंट्रोल, restaurant ke liye pest control Moradabad, kitchen mein kide makode ka ilaj, रसोई पेस्ट कंट्रोल सर्विस मोरादाबाद, hotel aur restaurant pest control, खाद्य उद्योग पेस्ट कंट्रोल, Space Build restaurant service, restaurant mein cockroach ka ilaj, मोरादाबाद में होटल पेस्ट कंट्रोल, food business ke liye pest control",
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
    title: "Pest Control for Restaurants in Moradabad | Space Build",
    description:
      "Maintain a hygienic and compliant food establishment with Space Build's dedicated restaurant pest control services in Moradabad.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Pest Control for Restaurants in Moradabad - Space Build",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pest Control for Restaurants in Moradabad | Space Build",
    description:
      "Maintain a hygienic and compliant food establishment with Space Build's dedicated restaurant pest control services in Moradabad.",
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