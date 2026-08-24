import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Rat Control Services in Moradabad | Space Build Pest Control Experts",
  description:
    "Dealing with a rat problem at home, shop, or warehouse? Space Build provides professional rat control services in Moradabad with safe, targeted, and long-lasting solutions. Book a free inspection today.",
  keywords:
    "rat control services Moradabad, rat control Moradabad, rat removal Moradabad, best pest control Moradabad, rat extermination Moradabad, rat proofing services Moradabad, rat trapping services Moradabad, commercial rat control Moradabad, residential rat control Moradabad, rat pest control company Moradabad, Space Build Moradabad, pest control company Moradabad, Moradabad mein chuha control seva, rat control Moradabad, chuha bhagane ki seva Moradabad, ghar ke liye chuha upchar Moradabad, dukan aur godown mein chuha se bachav Moradabad, best chuha control company Moradabad, sasti pest control seva Moradabad, chuha pakadne ki seva Moradabad, rat proofing seva Moradabad, Space Build pest control Moradabad, rat control, rat removal, rat extermination, pest control Moradabad, rat proofing, rat trapping, Space Build, home pest control, commercial pest control, Uttar Pradesh pest control",
  authors: [
    {
      name: "Space Build Moradabad",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.spacebuild.co.in/rat-control-moradabad",
  },
  openGraph: {
    title:
      "Rat Control Services in Moradabad | Space Build Pest Control Experts",
    description:
      "Dealing with a rat problem at home, shop, or warehouse? Space Build provides professional rat control services in Moradabad with safe, targeted, and long-lasting solutions. Book a free inspection today.",
    url: "https://www.spacebuild.co.in/rat-control-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Rat Control Services in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rat Control Services in Moradabad | Space Build Pest Control Experts",
    description:
      "Dealing with a rat problem at home, shop, or warehouse? Space Build provides professional rat control services in Moradabad with safe, targeted, and long-lasting solutions. Book a free inspection today.",
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