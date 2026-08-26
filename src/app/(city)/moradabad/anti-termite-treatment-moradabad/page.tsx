import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Anti Termite Treatment in Moradabad | Space Build – Trusted Pest Control Experts",
  description:
    "Looking for reliable anti termite treatment in Moradabad? Space Build offers expert pre & post construction termite control services to protect your home and property. Visit spacebuild.co.in for a free consultation today.",
  keywords:
    "anti termite treatment Moradabad, termite control Moradabad, pest control services Moradabad, pre construction anti termite treatment, post construction termite treatment, termite proofing Moradabad, best pest control company Moradabad, Space Build Moradabad, termite treatment cost Moradabad, deemak treatment Moradabad, मोरादाबाद में एंटी टर्माइट ट्रीटमेंट, दीमक उपचार मोरादाबाद, दीमक कंट्रोल सर्विस मोरादाबाद, घर में दीमक की दवाई, मोरादाबाद पेस्ट कंट्रोल कंपनी, दीमक भगाने का उपाय मोरादाबाद, प्री कंस्ट्रक्शन दीमक ट्रीटमेंट, पोस्ट कंस्ट्रक्शन दीमक इलाज, Space Build दीमक सर्विस, ghar mein deemak ka ilaj Moradabad",
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
    title: "Anti Termite Treatment in Moradabad | Space Build",
    description:
      "Professional anti termite treatment services in Moradabad. Safe, effective, and long-lasting termite protection for homes and commercial buildings.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Anti Termite Treatment in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anti Termite Treatment in Moradabad | Space Build",
    description:
      "Professional anti termite treatment services in Moradabad. Safe, effective, and long-lasting termite protection for homes and commercial buildings.",
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