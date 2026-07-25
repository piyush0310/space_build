import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Specialist in Moradabad | Space Build Expert Vastu Solutions",
  description:
    "Need a Vastu specialist in Moradabad? Space Build offers expert, specialized consultation for homes, offices, factories & plots with advanced remedies.",
  keywords:
    "vastu specialist moradabad, vastu expert moradabad, specialized vastu consultant, vastu specialist for home, vastu specialist for office, industrial vastu specialist, plot vastu specialist moradabad, space build vastu specialist, advanced vastu remedies, vastu specialist near me",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-specialist-moradabad",
  },
  openGraph: {
    title: "Vastu Specialist in Moradabad | Space Build Expert Vastu Solutions",
    description:
      "Need a Vastu specialist in Moradabad? Space Build offers expert, specialized consultation for homes, offices, factories & plots with advanced remedies.",
    url: "https://www.spacebuild.co.in/vastu-specialist-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Specialist in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Specialist in Moradabad | Space Build Expert Vastu Solutions",
    description:
      "Need a Vastu specialist in Moradabad? Space Build offers expert, specialized consultation for homes, offices, factories & plots with advanced remedies.",
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