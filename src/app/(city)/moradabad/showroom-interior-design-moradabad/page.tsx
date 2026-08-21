import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Showroom Interior Design in Moradabad | Space Build",
  description:
    "Showroom Interior Design in Moradabad by Space Build for car showrooms, furniture showrooms, electronics showrooms, commercial showroom interiors, and brand showroom design services.",
  keywords:
    "showroom interior design Moradabad, showroom interior designer Moradabad, car showroom interior Moradabad, furniture showroom design Moradabad, electronics showroom interior Moradabad, showroom design company Moradabad, commercial showroom interiors Moradabad, Space Build Moradabad, brand showroom design Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/showroom-interior-design-moradabad",
  },
  openGraph: {
    title: "Showroom Interior Design in Moradabad | Space Build",
    description:
      "Showroom Interior Design in Moradabad by Space Build for car showrooms, furniture showrooms, electronics showrooms, commercial showroom interiors, and brand showroom design services.",
    url: "https://www.spacebuild.co.in/showroom-interior-design-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Showroom Interior Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Showroom Interior Design in Moradabad | Space Build",
    description:
      "Showroom Interior Design in Moradabad by Space Build for car showrooms, furniture showrooms, electronics showrooms, commercial showroom interiors, and brand showroom design services.",
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