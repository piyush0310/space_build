import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Modern Interior Designer Services | Space Build – Home & Office Interiors",
  description:
    "Space Build offers professional modern interior designer services for homes, offices & commercial spaces. Get stylish, functional interiors with a free consultation today.",
  keywords:
    "modern interior designer, modern interior design services, interior designer for home, interior design company, modern home interior design, office interior design, interior designer near me, space build interior design, contemporary interior design, interior design trends, best interior designer, modern living room design, interior design for apartments, sustainable interior design, smart home interior design",
  alternates: {
    canonical: "https://www.spacebuild.co.in/modern-interior-designer-services",
  },
  openGraph: {
    title:
      "Modern Interior Designer Services | Space Build – Home & Office Interiors",
    description:
      "Space Build offers professional modern interior designer services for homes, offices & commercial spaces. Get stylish, functional interiors with a free consultation today.",
    url: "https://www.spacebuild.co.in/modern-interior-designer-services",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Modern Interior Designer Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Modern Interior Designer Services | Space Build – Home & Office Interiors",
    description:
      "Space Build offers professional modern interior designer services for homes, offices & commercial spaces. Get stylish, functional interiors with a free consultation today.",
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