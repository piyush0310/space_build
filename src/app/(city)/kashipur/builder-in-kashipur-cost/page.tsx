import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Builder in Kashipur Cost | House Construction Price Guide",
  description:
    "Planning to build? Understand builder in Kashipur cost, what affects the price, hidden charges and smart ways to save money without losing quality.",
  keywords:
    "Understand builder in Kashipur cost for house construction, villa building, shop projects, renovation and turnkey work. Compare rates, materials and hidden charges before hiring builders.",

  alternates: {
    canonical: "https://www.spacebuild.co.in/builder-in-kashipur-cost",
  },

  openGraph: {
    title: "Builder in Kashipur Cost | House Construction Price Guide",
    description:
      "Planning to build? Understand builder in Kashipur cost, what affects the price, hidden charges and smart ways to save money without losing quality.",
    url: "https://www.spacebuild.co.in/builder-in-kashipur-cost",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Builder in Kashipur Cost",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Builder in Kashipur Cost | House Construction Price Guide",
    description:
      "Planning to build? Understand builder in Kashipur cost, what affects the price, hidden charges and smart ways to save money without losing quality.",
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