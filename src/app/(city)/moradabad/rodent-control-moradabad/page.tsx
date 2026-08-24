import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Rodent Control Services in Moradabad | Space Build Pest Control Experts",
  description:
    "Struggling with rats and mice at home or business? Space Build offers professional rodent control services in Moradabad with safe, effective, and long-lasting solutions. Book a free inspection today.",
  keywords:
    "rodent control services Moradabad, rat control Moradabad, mice control Moradabad, best pest control Moradabad, rodent extermination Moradabad, rat proofing services Moradabad, rat removal Moradabad, commercial rodent control Moradabad, residential rat control Moradabad, rodent pest control company Moradabad, Space Build Moradabad, pest control company Moradabad, Moradabad mein chuha niyantran seva, rat control Moradabad, chuha bhagane ki seva Moradabad, ghar ke liye chuha upchar Moradabad, chuha se bachav Moradabad, safai aur pest control Moradabad, best chuha control company Moradabad, sasti pest control seva Moradabad, rodent proofing seva Moradabad, Space Build pest control Moradabad, rodent control, rat control, mice control, pest control Moradabad, rat proofing, rodent extermination, Space Build, home pest control, commercial pest control, Uttar Pradesh pest control",
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
    canonical: "https://www.spacebuild.co.in/rodent-control-moradabad",
  },
  openGraph: {
    title:
      "Rodent Control Services in Moradabad | Space Build Pest Control Experts",
    description:
      "Struggling with rats and mice at home or business? Space Build offers professional rodent control services in Moradabad with safe, effective, and long-lasting solutions. Book a free inspection today.",
    url: "https://www.spacebuild.co.in/rodent-control-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Rodent Control Services in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rodent Control Services in Moradabad | Space Build Pest Control Experts",
    description:
      "Struggling with rats and mice at home or business? Space Build offers professional rodent control services in Moradabad with safe, effective, and long-lasting solutions. Book a free inspection today.",
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