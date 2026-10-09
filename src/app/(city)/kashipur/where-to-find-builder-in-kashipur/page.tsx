import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Where to Find Builder in Kashipur | Best Places to Look",
  description:
    "Where to find builder in Kashipur? Explore online listings, local markets, referrals and site visits to discover trusted contractors for your project.",
  keywords:
    "where to find builder in Kashipur, builder in Kashipur, house construction Kashipur, villa projects Kashipur, shops construction Kashipur, renovation Kashipur, online platforms for builders Kashipur, local markets Kashipur, builder referrals Kashipur, live construction sites Kashipur, trusted contractors Kashipur, construction company Kashipur, home builder Kashipur, building contractor Kashipur, best builders Kashipur, affordable builders Kashipur, residential construction Kashipur, commercial construction Kashipur, house renovation Kashipur, builder near me Kashipur",

  alternates: {
    canonical: "https://www.spacebuild.co.in/kashipur/where-to-find-builder-in-kashipur",
  },

  openGraph: {
    title: "Where to Find Builder in Kashipur | Best Places to Look",
    description:
      "Where to find builder in Kashipur? Explore online listings, local markets, referrals and site visits to discover trusted contractors for your project.",
    url: "https://www.spacebuild.co.in/kashipur/where-to-find-builder-in-kashipur",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Where to Find Builder in Kashipur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Where to Find Builder in Kashipur | Best Places to Look",
    description:
      "Where to find builder in Kashipur? Explore online listings, local markets, referrals and site visits to discover trusted contractors for your project.",
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