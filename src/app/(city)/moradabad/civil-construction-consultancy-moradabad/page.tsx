import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Civil Construction Consultancy in Moradabad | Space Build",
  description:
    "Space Build offers expert civil construction consultancy in Moradabad, covering structural design, site supervision, and quality-driven building solutions. Visit spacebuild.co.in.",
  keywords:
    "civil construction consultancy Moradabad, civil engineering consultant Moradabad, construction consultancy services, structural design consultant Moradabad, building consultancy Moradabad, Space Build Moradabad, civil contractor Moradabad, site supervision services, residential construction consultant, commercial construction consultancy Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/civil-construction-consultancy-moradabad",
  },
  openGraph: {
    title: "Civil Construction Consultancy in Moradabad | Space Build",
    description:
      "Space Build offers expert civil construction consultancy in Moradabad, covering structural design, site supervision, and quality-driven building solutions. Visit spacebuild.co.in.",
    url: "https://www.spacebuild.co.in/civil-construction-consultancy-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Civil Construction Consultancy in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Civil Construction Consultancy in Moradabad | Space Build",
    description:
      "Space Build offers expert civil construction consultancy in Moradabad, covering structural design, site supervision, and quality-driven building solutions. Visit spacebuild.co.in.",
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