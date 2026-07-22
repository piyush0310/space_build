import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "MahaVastu Expert in Moradabad | Space Build Modern Vastu Guidance",
  description:
    "Looking for modern Vastu guidance in Moradabad? Space Build combines classical Vastu Shastra with contemporary approaches for homes, offices & plots.",
  keywords:
    "mahavastu expert moradabad, modern vastu consultant moradabad, mahavastu principles, vastu expert moradabad, modern vastu for home, modern vastu for office, space build vastu expert, simplified vastu consultant, vastu consultation moradabad, contemporary vastu guidance",
  alternates: {
    canonical: "https://www.spacebuild.co.in/mahavastu-expert-moradabad",
  },
  openGraph: {
    title: "MahaVastu Expert in Moradabad | Space Build Modern Vastu Guidance",
    description:
      "Looking for modern Vastu guidance in Moradabad? Space Build combines classical Vastu Shastra with contemporary approaches for homes, offices & plots.",
    url: "https://www.spacebuild.co.in/mahavastu-expert-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - MahaVastu Expert in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MahaVastu Expert in Moradabad | Space Build Modern Vastu Guidance",
    description:
      "Looking for modern Vastu guidance in Moradabad? Space Build combines classical Vastu Shastra with contemporary approaches for homes, offices & plots.",
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