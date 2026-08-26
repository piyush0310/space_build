import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Affordable Pest Control in Moradabad | Space Build – Quality Service, Budget-Friendly Prices",
  description:
    "Looking for affordable pest control in Moradabad without compromising on quality? Space Build offers budget-friendly termite treatment and pest control packages for homes and businesses. Visit spacebuild.co.in for details.",
  keywords:
    "affordable pest control Moradabad, budget pest control services, low cost termite treatment Moradabad, cheap pest control near me, economical pest control packages, affordable termite treatment, Space Build Moradabad, value for money pest control, pest control offers Moradabad, best price pest control, मोरादाबाद में सस्ता पेस्ट कंट्रोल, kam paise mein pest control Moradabad, budget friendly deemak treatment, सस्ता और अच्छा पेस्ट कंट्रोल सर्विस, ghar ke liye sasta pest control, कम खर्च में दीमक उपचार मोरादाबाद, Space Build affordable service, sasta pest control near me, मोरादाबाद में किफायती पेस्ट कंट्रोल, best rate pest control Moradabad",
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
    title: "Affordable Pest Control in Moradabad | Space Build",
    description:
      "Get quality pest control services at affordable prices in Moradabad with Space Build, offering termite treatment and general pest control for every budget.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Affordable Pest Control in Moradabad - Space Build",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Pest Control in Moradabad | Space Build",
    description:
      "Get quality pest control services at affordable prices in Moradabad with Space Build, offering termite treatment and general pest control for every budget.",
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