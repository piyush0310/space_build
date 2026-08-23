import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Vastu Renovation Without Demolition in Moradabad | Space Build",
  description:
    "Fix Vastu doshas without breaking your home apart. Space Build offers expert Vastu renovation without demolition services in Moradabad using practical, non-invasive remedies. Get professional guidance at https://www.spacebuild.co.in/.",
  keywords:
    "vastu renovation without demolition Moradabad, vastu correction without breaking walls, non-demolition vastu remedies, vastu consultant Moradabad, vastu correction without construction, vastu shastra remedies without demolition, easy vastu correction Moradabad, vastu dosh nivaran without demolition, vastu correction using colors and mirrors, vastu remedies for existing house, low-cost vastu correction, vastu shastra tips without renovation, vastu correction for rented house, Space Build Moradabad, vastu without structural change, vastu correction using pyramids and yantras, budget-friendly vastu solutions, vastu shastra alternative remedies, vastu correction for apartments, minimal renovation vastu fix, Moradabad me bina todphod ke vastu correction, bina construction ke vastu sudhar, ghar ka vastu bina tod fod ke thik kare, vastu dosh nivaran aasan tarike, vastu correction Moradabad company, kam kharche me vastu sudhar, kiraye ke ghar ka vastu correction, vastu shastra ke upay bina renovation ke, rang aur darpan se vastu sudhar, vastu pyramid aur yantra se upay, Moradabad vastu consultant, ghar ka vastu dosh kaise thik kare bina todphod, Space Build vastu seva, apartment ka vastu correction, flat me vastu sudhar bina construction, ghar ki negative energy dur karne ke tarike",
  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },
  openGraph: {
    title:
      "Vastu Renovation Without Demolition in Moradabad | Space Build",
    description:
      "Fix Vastu doshas without breaking your home apart. Space Build offers expert Vastu renovation without demolition services in Moradabad using practical, non-invasive remedies.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Renovation Without Demolition in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vastu Renovation Without Demolition in Moradabad | Space Build",
    description:
      "Fix Vastu doshas without breaking your home apart. Space Build offers expert Vastu renovation without demolition services in Moradabad using practical, non-invasive remedies.",
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