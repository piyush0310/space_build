import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Best Interior Design Ideas in Moradabad | Space Build – Creative Home & Office Interiors",
  description:
    "Best Interior Design Ideas in Moradabad by Space Build for home interior design ideas, modern interior design, office interior design ideas, living room design, bedroom interior ideas, modular kitchen design, and budget interior design ideas.",
  keywords:
    "best interior design ideas Moradabad, interior designer Moradabad, home interior design ideas, modern interior design Moradabad, office interior design ideas, Space Build Moradabad, living room design ideas, bedroom interior ideas, modular kitchen design Moradabad, budget interior design ideas",
  alternates: {
    canonical: "https://www.spacebuild.co.in/best-interior-design-ideas-moradabad",
  },
  openGraph: {
    title: "Best Interior Design Ideas in Moradabad | Space Build – Creative Home & Office Interiors",
    description:
      "Best Interior Design Ideas in Moradabad by Space Build for home interior design ideas, modern interior design, office interior design ideas, living room design, bedroom interior ideas, modular kitchen design, and budget interior design ideas.",
    url: "https://www.spacebuild.co.in/best-interior-design-ideas-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Best Interior Design Ideas in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Interior Design Ideas in Moradabad | Space Build – Creative Home & Office Interiors",
    description:
      "Best Interior Design Ideas in Moradabad by Space Build for home interior design ideas, modern interior design, office interior design ideas, living room design, bedroom interior ideas, modular kitchen design, and budget interior design ideas.",
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
