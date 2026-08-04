import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Construction Project Manager in Moradabad | Space Build",
  description:
    "Looking for a reliable construction project manager in Moradabad? Space Build offers expert project management for residential, commercial & industrial builds. Visit spacebuild.co.in.",
  keywords:
    "construction project manager Moradabad, project management company Moradabad, construction company Moradabad, building contractor Moradabad, residential construction Moradabad, commercial construction Moradabad, Space Build Moradabad, construction consultancy Moradabad, civil construction services Moradabad, best construction company in Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/construction-project-manager-moradabad",
  },
  openGraph: {
    title: "Construction Project Manager in Moradabad | Space Build",
    description:
      "Looking for a reliable construction project manager in Moradabad? Space Build offers expert project management for residential, commercial & industrial builds. Visit spacebuild.co.in.",
    url: "https://www.spacebuild.co.in/construction-project-manager-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Construction Project Manager in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Project Manager in Moradabad | Space Build",
    description:
      "Looking for a reliable construction project manager in Moradabad? Space Build offers expert project management for residential, commercial & industrial builds. Visit spacebuild.co.in.",
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