import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Residential Pest Control Services in Moradabad | Space Build Pest Control Experts",

  description:
    "Protect your home and family with trusted residential pest control services in Moradabad from Space Build. Safe, child-friendly, and pet-safe treatments for a pest-free home. Book a free inspection today.",

  keywords:
    "residential pest control Moradabad, home pest control services Moradabad, house pest control Moradabad, apartment pest control Moradabad, family pest control Moradabad, pest free home Moradabad, child safe pest control Moradabad, pet safe pest control Moradabad, home pest treatment Moradabad, best pest control for homes Moradabad, Space Build Moradabad, pest control company Moradabad, Moradabad mein ghar ke liye pest control, residential pest control Moradabad, ghar ka pest control seva Moradabad, flat aur apartment pest control Moradabad, bacchon ke liye surakshit pest control Moradabad, ghar ko keeton se bachao Moradabad, best pest control for ghar Moradabad, sasti pest control seva Moradabad, ghar ka keet niyantran Moradabad, Space Build pest control Moradabad, residential pest control, home pest control, house pest control, apartment pest control, family safe pest control, Space Build, child safe treatment, pet safe treatment, Uttar Pradesh pest control, pest free home",

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/residential-pest-control-services-moradabad",
  },

  openGraph: {
    title:
      "Residential Pest Control Services in Moradabad | Space Build Pest Control Experts",

    description:
      "Protect your home and family with trusted residential pest control services in Moradabad from Space Build. Safe, child-friendly, and pet-safe treatments for a pest-free home. Book a free inspection today.",

    url:
      "https://www.spacebuild.co.in/residential-pest-control-services-moradabad",

    siteName: "Space Build",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Residential Pest Control Services in Moradabad",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Residential Pest Control Services in Moradabad | Space Build Pest Control Experts",

    description:
      "Protect your home and family with trusted residential pest control services in Moradabad from Space Build. Safe, child-friendly, and pet-safe treatments for a pest-free home. Book a free inspection today.",

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