import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Kashipur Architecture Company – Design, Vastu & Construction | Space Build",
  description:
    "Looking for a trusted architecture company in Kashipur? Space Build offers vastu-integrated design, interiors, and project management for residential, commercial and industrial projects.",
  keywords:
    "kashipur architecture company, architecture firm kashipur, best architecture company kashipur, architect company near me, vastu architecture company kashipur, residential architecture kashipur, commercial architecture company kashipur, industrial architecture kashipur, space build kashipur, architecture and interior company kashipur, design build firm kashipur, top architecture company uttarakhand, house design company kashipur, vastu construction company kashipur, architecture consultancy kashipur, project management consultation kashipur, modular kitchen design kashipur, interior design company kashipur, architect and structural engineer kashipur, turnkey construction company kashipur, building design firm kashipur, vastu renovation company kashipur",
  alternates: {
    canonical: "https://www.spacebuild.co.in/kashipur/kashipur-architecture-company",
  },
  openGraph: {
    title:
      "Kashipur Architecture Company – Design, Vastu & Construction | Space Build",
    description:
      "Looking for a trusted architecture company in Kashipur? Space Build offers vastu-integrated design, interiors, and project management for residential, commercial and industrial projects.",
    url: "https://www.spacebuild.co.in/kashipur/kashipur-architecture-company",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Kashipur Architecture Company",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kashipur Architecture Company – Design, Vastu & Construction | Space Build",
    description:
      "Looking for a trusted architecture company in Kashipur? Space Build offers vastu-integrated design, interiors, and project management for residential, commercial and industrial projects.",
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