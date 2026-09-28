import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Termite Control in Rampur | Anti-Termite Treatment Guide",

  description:
    "Need termite control in Rampur? Learn warning signs, treatment methods, cost factors, warranty terms, and prevention tips to protect your home and wood.",

  keywords:
    "termite control Rampur, anti-termite treatment Rampur, termite inspection service, subterranean termite treatment, drywood termite treatment, pre-construction termite treatment, post-construction termite treatment, drill and inject termite method, termite baiting system, termite treatment for wooden furniture, termite treatment cost per sq ft, termite proofing for new building, termite warranty period, termite damage repair, termite signs in walls, termite control for shops and offices, termite swarm after rain, chemical barrier for foundation, termite prevention tips, termite treatment for old houses",

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
    canonical: "https://www.spacebuild.co.in/",
  },

  openGraph: {
    title: "Termite Control in Rampur | Anti-Termite Treatment Guide",
    description:
      "Professional termite control in Rampur. From inspection and treatment to warranty and prevention—protect your home and wood from termites.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Termite Control in Rampur - Anti-Termite Treatment Guide",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Termite Control in Rampur | Anti-Termite Treatment Guide",
    description:
      "Space Build Moradabad - Termite control services in Rampur covering inspection, treatment, warranty, and prevention for homes and businesses.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Termite Control in Rampur | Anti-Termite Treatment Guide",
    "geo.placename": "Rampur, Uttar Pradesh",
    "geo.region": "IN-UP",
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