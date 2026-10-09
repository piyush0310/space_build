import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Kashipur Civil Construction Services | Structure & Site Works",

  description:
    "Need Kashipur civil construction services? Learn about earthwork, foundations, RCC, drainage, roads and testing, plus how to hire a capable civil team.",

  keywords:
    "Kashipur civil construction services, civil construction Kashipur, civil contractor Kashipur, earthwork Kashipur, foundation construction Kashipur, RCC structure Kashipur, reinforced concrete construction Kashipur, drainage construction Kashipur, road construction Kashipur, boundary wall construction Kashipur, industrial site works Kashipur, warehouse construction Kashipur, factory civil works Kashipur, soil testing Kashipur, waterproofing Kashipur, site preparation Kashipur, civil engineering services Kashipur, building construction Kashipur, construction company Kashipur, dependable civil contractors Kashipur, civil work quotation Kashipur, structural construction Kashipur, construction quality testing Kashipur",

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/kashipur/kashipur-construction-companies",
  },

  openGraph: {
    title: "Kashipur Civil Construction Services | Structure & Site Works",
    description:
      "Need Kashipur civil construction services? Learn about earthwork, foundations, RCC, drainage, roads and testing, plus how to hire a capable civil team.",
    url: "https://www.spacebuild.co.in/kashipur/kashipur-construction-companies",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kashipur Civil Construction Services - Structure & Site Works",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kashipur Civil Construction Services | Structure & Site Works",
    description:
      "Need Kashipur civil construction services? Learn about earthwork, foundations, RCC, drainage, roads and testing, plus how to hire a capable civil team.",
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