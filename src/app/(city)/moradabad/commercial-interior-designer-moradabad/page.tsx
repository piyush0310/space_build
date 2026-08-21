import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Commercial Interior Designer in Moradabad | Space Build",
  description:
    "Space Build is a leading commercial interior designer in Moradabad offering office, showroom, retail & restaurant interior solutions with modern design and quality execution.",
  keywords:
    "commercial interior designer Moradabad, commercial interior design company, office interior designer Moradabad, showroom interior design, retail interior design Moradabad, Space Build commercial interiors, restaurant interior designer, best commercial interior designer near me, shop interior design Moradabad, corporate interior solutions",
  alternates: {
    canonical: "https://www.spacebuild.co.in/commercial-interior-designer-moradabad",
  },
  openGraph: {
    title: "Commercial Interior Designer in Moradabad | Space Build",
    description:
      "Space Build is a leading commercial interior designer in Moradabad offering office, showroom, retail & restaurant interior solutions with modern design and quality execution.",
    url: "https://www.spacebuild.co.in/commercial-interior-designer-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Commercial Interior Designer in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Interior Designer in Moradabad | Space Build",
    description:
      "Space Build is a leading commercial interior designer in Moradabad offering office, showroom, retail & restaurant interior solutions with modern design and quality execution.",
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