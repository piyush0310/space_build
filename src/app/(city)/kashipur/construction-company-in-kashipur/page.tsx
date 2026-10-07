import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Kashipur Construction Company | Services, Process & Guide",
  description:
    "Looking for a Kashipur construction company? Explore services, building stages, safety standards and tips to hire a dependable team for your next project.",
  keywords:
    "Hire a Kashipur construction company for residential buildings, commercial complexes, industrial sheds, renovation and turnkey delivery. Learn services, process and selection tips for reliable construction in Kashipur, Uttarakhand.",

  alternates: {
    canonical: "https://www.spacebuild.co.in/kashipur-construction-company",
  },

  openGraph: {
    title: "Kashipur Construction Company | Services, Process & Guide",
    description:
      "Looking for a Kashipur construction company? Explore services, building stages, safety standards and tips to hire a dependable team for your next project.",
    url: "https://www.spacebuild.co.in/kashipur-construction-company",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kashipur Construction Company",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kashipur Construction Company | Services, Process & Guide",
    description:
      "Looking for a Kashipur construction company? Explore services, building stages, safety standards and tips to hire a dependable team for your next project.",
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