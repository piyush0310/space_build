import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Kashipur Building Contractors | Types, Trades & Hiring Guide",
  description:
    "Searching for Kashipur building contractors? Learn the different contractor types, trades, rates, contracts and checks needed to hire the right professional.",
  keywords:
    "Hire Kashipur building contractors for house construction, shops, renovation, finishing and structural work. Understand contractor types, trades, contracts and verification steps before choosing reliable local professionals.",

  alternates: {
    canonical: "https://www.spacebuild.co.in/kashipur-building-contractors",
  },

  openGraph: {
    title: "Kashipur Building Contractors | Types, Trades & Hiring Guide",
    description:
      "Searching for Kashipur building contractors? Learn the different contractor types, trades, rates, contracts and checks needed to hire the right professional.",
    url: "https://www.spacebuild.co.in/kashipur-building-contractors",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kashipur Building Contractors",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kashipur Building Contractors | Types, Trades & Hiring Guide",
    description:
      "Searching for Kashipur building contractors? Learn the different contractor types, trades, rates, contracts and checks needed to hire the right professional.",
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