import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Pre Construction Termite Treatment in Moradabad | Space Build – Long Lasting Protection",
  description:
    "Get expert pre construction termite treatment in Moradabad from Space Build. Protect your new building from the foundation stage with our chemical soil treatment services. Visit spacebuild.co.in to know more.",
  keywords:
    "pre construction termite treatment Moradabad, pre construction anti termite treatment, soil treatment before construction Moradabad, foundation termite protection, chemical soil treatment Moradabad, termite proofing new building, Space Build Moradabad, pre construction pest control, new construction termite barrier, termite treatment during construction, मोरादाबाद में प्री कंस्ट्रक्शन दीमक ट्रीटमेंट, नए घर की नींव में दीमक उपचार, निर्माण से पहले दीमक की दवाई, फाउंडेशन दीमक सुरक्षा मोरादाबाद, naye ghar ki neev mein deemak treatment, construction se pehle deemak ka ilaj, Space Build दीमक सर्विस मोरादाबाद, ghar banate samay deemak treatment, मिट्टी में केमिकल ट्रीटमेंट मोरादाबाद, pre construction pest control Moradabad",
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
    title: "Pre Construction Termite Treatment in Moradabad | Space Build",
    description:
      "Protect your new construction from termites right from the foundation stage with Space Build's pre construction termite treatment services in Moradabad.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Pre Construction Termite Treatment in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pre Construction Termite Treatment in Moradabad | Space Build",
    description:
      "Protect your new construction from termites right from the foundation stage with Space Build's pre construction termite treatment services in Moradabad.",
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