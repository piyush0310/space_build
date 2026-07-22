import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Home Interior Design in Moradabad | Space Build Interior Solutions",
  description:
    "Looking for home interior design in Moradabad? Space Build creates personalized, functional living spaces for homes and apartments of every size and budget.",
  keywords:
    "home interior design moradabad, home interior designer moradabad, house interior design, modular kitchen design moradabad, bedroom interior design, living room interior design, home renovation moradabad, space build home interior, budget home interior design, apartment interior design moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/home-interior-design-moradabad",
  },
  openGraph: {
    title: "Home Interior Design in Moradabad | Space Build Interior Solutions",
    description:
      "Looking for home interior design in Moradabad? Space Build creates personalized, functional living spaces for homes and apartments of every size and budget.",
    url: "https://www.spacebuild.co.in/home-interior-design-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Home Interior Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Interior Design in Moradabad | Space Build Interior Solutions",
    description:
      "Looking for home interior design in Moradabad? Space Build creates personalized, functional living spaces for homes and apartments of every size and budget.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
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