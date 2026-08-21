import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Construction Company in Moradabad | Space Build",
  description:
    "Space Build is a trusted Vastu construction company in Moradabad offering Vastu-compliant home, villa & commercial construction services. Build your dream space with positive energy and expert guidance.",
  keywords:
    "vastu construction company moradabad, vastu construction moradabad, best construction company moradabad, vastu compliant house construction, vastu home builders moradabad, space build moradabad, residential construction company moradabad, commercial construction moradabad, vastu architects moradabad, vastu consultant construction company",
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/vastu-construction-company-moradabad",
  },
  openGraph: {
    title: "Vastu Construction Company in Moradabad | Space Build",
    description:
      "Space Build is a trusted Vastu construction company in Moradabad offering Vastu-compliant home, villa & commercial construction services. Build your dream space with positive energy and expert guidance.",
    url: "https://www.spacebuild.co.in/vastu-construction-company-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Construction Company in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Construction Company in Moradabad | Space Build",
    description:
      "Space Build is a trusted Vastu construction company in Moradabad offering Vastu-compliant home, villa & commercial construction services. Build your dream space with positive energy and expert guidance.",
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