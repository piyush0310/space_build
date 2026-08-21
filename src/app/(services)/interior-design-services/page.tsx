import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Interior Design Services | Space Build – Home, Office & Commercial Interiors",
  description:
    "Space Build offers complete interior design services for homes, apartments, offices & commercial spaces. Get personalized designs, 3D visuals & a free consultation today.",
  keywords:
    "interior design services, interior design company, residential interior design services, office interior design services, apartment interior design, commercial interior design, renovation and remodeling services, turnkey interior design, interior design near me, space build interior design, home interior design services, best interior design company",
  alternates: {
    canonical: "https://www.spacebuild.co.in/interior-design-services",
  },
  openGraph: {
    title:
      "Interior Design Services | Space Build – Home, Office & Commercial Interiors",
    description:
      "Space Build offers complete interior design services for homes, apartments, offices & commercial spaces. Get personalized designs, 3D visuals & a free consultation today.",
    url: "https://www.spacebuild.co.in/interior-design-services",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Interior Design Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Interior Design Services | Space Build – Home, Office & Commercial Interiors",
    description:
      "Space Build offers complete interior design services for homes, apartments, offices & commercial spaces. Get personalized designs, 3D visuals & a free consultation today.",
    images: [
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782801421/IMG_20260630_112901.jpg_wnfyv5.jpg",
    ],
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