import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modern Vastu Construction Services | Space Build",
  description:
    "Space Build offers modern Vastu-compliant construction for homes, apartments, and offices. Get expert Vastu planning, design remedies & a free consultation today.",
  keywords:
    "modern vastu construction, vastu construction company, vastu compliant house construction, vastu for home design, vastu architecture services, vastu construction consultant, vastu for apartments, vastu for office construction, space build vastu services, vastu remedies for construction, affordable vastu construction",
  alternates: {
    canonical: "https://www.spacebuild.co.in/modern-vastu-construction-services",
  },
  openGraph: {
    title:
      "Modern Vastu Construction Services | Space Build",
    description:
      "Space Build offers modern Vastu-compliant construction for homes, apartments, and offices. Get expert Vastu planning, design remedies & a free consultation today.",
    url: "https://www.spacebuild.co.in/modern-vastu-construction-services",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Modern Vastu Construction Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Modern Vastu Construction Services | Space Build",
    description:
      "Space Build offers modern Vastu-compliant construction for homes, apartments, and offices. Get expert Vastu planning, design remedies & a free consultation today.",
    images: [
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782801421/IMG_20260630_112901.jpg_wnfyv5.jpg",
    ],
  },
  icons: {
    icon: "/favicon-v2.ico",
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