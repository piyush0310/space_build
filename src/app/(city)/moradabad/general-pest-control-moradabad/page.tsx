import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "General Pest Control Services in Moradabad | Space Build Pest Control Experts",

  description:
    "Looking for complete pest control solutions in Moradabad? Space Build offers comprehensive general pest control services for homes and businesses, covering mosquitoes, rodents, ants, cockroaches, termites, and more. Book a free inspection today.",

  keywords:
    "general pest control services Moradabad, pest control Moradabad, best pest control company Moradabad, home pest control Moradabad, commercial pest control Moradabad, complete pest control services Moradabad, annual pest control contract Moradabad, pest management company Moradabad, pest control near me Moradabad, affordable pest control Moradabad, Space Build Moradabad, pest control company Moradabad, Moradabad mein pest control seva, general pest control Moradabad, keet niyantran seva Moradabad, ghar ke liye pest control Moradabad, dukan aur office ke liye pest control Moradabad, best pest control company Moradabad, sasti pest control seva Moradabad, salana pest control contract Moradabad, pest control near me Moradabad, Space Build pest control Moradabad, general pest control, pest control Moradabad, home pest control, commercial pest control, pest management, annual pest control contract, Space Build, pest control near me, Uttar Pradesh pest control, complete pest solutions",

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/general-pest-control-services-moradabad",
  },

  openGraph: {
    title:
      "General Pest Control Services in Moradabad | Space Build Pest Control Experts",

    description:
      "Looking for complete pest control solutions in Moradabad? Space Build offers comprehensive general pest control services for homes and businesses, covering mosquitoes, rodents, ants, cockroaches, termites, and more. Book a free inspection today.",

    url:
      "https://www.spacebuild.co.in/general-pest-control-services-moradabad",

    siteName: "Space Build",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - General Pest Control Services in Moradabad",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "General Pest Control Services in Moradabad | Space Build Pest Control Experts",

    description:
      "Looking for complete pest control solutions in Moradabad? Space Build offers comprehensive general pest control services for homes and businesses, covering mosquitoes, rodents, ants, cockroaches, termites, and more. Book a free inspection today.",

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