import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best Builder in Kashipur | Quality Construction You Can Trust",

  description:
    "Wondering who is the best builder in Kashipur? Learn the signs of quality work, fair pricing and honest service before you hire a construction partner.",

  keywords:
    "best builder in Kashipur, house construction in Kashipur, villa construction Kashipur, commercial building construction Kashipur, home renovation Kashipur, turnkey construction Kashipur, construction company Kashipur Uttarakhand, affordable builder in Kashipur, quality construction Kashipur, residential builder Kashipur, commercial builder Kashipur",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Space Build Moradabad",
    },
  ],

  alternates: {
    canonical: "https://www.spacebuild.co.in/kashipur/best-builder-in-kashipur",
  },

  openGraph: {
    title: "Best Builder in Kashipur | Quality Construction You Can Trust",
    description:
      "Wondering who is the best builder in Kashipur? Learn the signs of quality work, fair pricing and honest service before you hire a construction partner.",
    url: "https://www.spacebuild.co.in/kashipur/best-builder-in-kashipur",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Builder in Kashipur - Quality Construction You Can Trust",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Builder in Kashipur | Quality Construction You Can Trust",
    description:
      "Discover reliable house construction, villa projects, commercial buildings, renovation and turnkey construction services in Kashipur.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Best Builder in Kashipur | Quality Construction You Can Trust",
    "geo.placename": "Kashipur, Uttarakhand",
    "geo.region": "IN-UK",
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