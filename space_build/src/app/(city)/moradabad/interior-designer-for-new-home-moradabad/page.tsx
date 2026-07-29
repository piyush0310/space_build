import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Interior Designer for New Home in Moradabad | Space Build – Complete Home Interior Solutions",
  description:
    "Interior Designer for New Home in Moradabad by Space Build – complete home interior solutions for new houses, apartments, and construction projects. Expert design planning, space optimization, and end-to-end execution for first-time homeowners.",
  keywords:
    "interior designer for new home Moradabad, new home interior design, best interior designer Moradabad, new house interior design ideas, home interior design company Moradabad, Space Build Moradabad, new apartment interior design, complete home interior solutions, interior design for new construction, first-time homeowner interior design",
  alternates: {
    canonical: "https://www.spacebuild.co.in/interior-designer-for-new-home-moradabad",
  },
  openGraph: {
    title: "Interior Designer for New Home in Moradabad | Space Build – Complete Home Interior Solutions",
    description:
      "Interior Designer for New Home in Moradabad by Space Build – complete home interior solutions for new houses, apartments, and construction projects. Expert design planning, space optimization, and end-to-end execution for first-time homeowners.",
    url: "https://www.spacebuild.co.in/interior-designer-for-new-home-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Interior Designer for New Home in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Designer for New Home in Moradabad | Space Build – Complete Home Interior Solutions",
    description:
      "Interior Designer for New Home in Moradabad by Space Build – complete home interior solutions for new houses, apartments, and construction projects. Expert design planning, space optimization, and end-to-end execution for first-time homeowners.",
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