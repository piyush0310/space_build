import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Pest Control Near Me Moradabad | Space Build – Best Pest Control Services",
  description:
    "Looking for pest control near me in Moradabad? Space Build offers trusted, safe, and affordable pest control services for homes, offices, and commercial spaces in Moradabad. Book now!",
  keywords:
    "pest control near me Moradabad, pest control services Moradabad, best pest control company Moradabad, cockroach control Moradabad, termite control Moradabad, mosquito control Moradabad, rodent control Moradabad, bed bug treatment Moradabad, home pest control Moradabad, office pest control Moradabad, affordable pest control Moradabad, Space Build pest control, pest control near me, pest control services near me, licensed pest control Moradabad, residential pest control Moradabad, commercial pest control Moradabad, pest exterminator Moradabad, pest control company near me, safe pest control Moradabad, pest control Moradabad mein, ghar ke liye pest control Moradabad, cockroach bhagane wali company Moradabad, deemak ka ilaj Moradabad, chuha bhagane ki service Moradabad, machar control Moradabad, safai aur pest control Moradabad, sabse achi pest control company Moradabad, Space Build pest control Moradabad, pest control service near me Moradabad, ghar ka kide makode hatane wali company, dukaan ke liye pest control, office ke liye pest control Moradabad, sasti pest control service Moradabad, bharosemand pest control company, pest control, Moradabad, Space Build, near me, cockroach control, termite treatment, mosquito control, rodent control, bed bug removal, home pest control, office pest control, commercial pest control, pest exterminator, pest management, affordable pest control, licensed pest control company, safe pest control, residential pest control services",
  alternates: {
    canonical: "https://www.spacebuild.co.in/pest-control-near-me-moradabad",
  },
  openGraph: {
    title:
      "Pest Control Near Me Moradabad | Space Build – Best Pest Control Services",
    description:
      "Looking for pest control near me in Moradabad? Space Build offers trusted, safe, and affordable pest control services for homes, offices, and commercial spaces in Moradabad. Book now!",
    url: "https://www.spacebuild.co.in/pest-control-near-me-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Pest Control Near Me in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pest Control Near Me Moradabad | Space Build – Best Pest Control Services",
    description:
      "Looking for pest control near me in Moradabad? Space Build offers trusted, safe, and affordable pest control services for homes, offices, and commercial spaces in Moradabad. Book now!",
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