import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best House Design Architect Near Moradabad & Kashipur | Space Build",
  description:
    "Looking for the best house design architect near Moradabad and Kashipur? Space Build offers custom home design, Vastu integration, and interior solutions for your dream home.",
  keywords:
    "best house design architect near Moradabad, house design architect Kashipur, best architect Moradabad, home architect Kashipur, residential architect Moradabad, house design near me, best architect near Moradabad, home design consultant Kashipur, Vastu architect Moradabad, house architect Uttar Pradesh, home design services Moradabad, house plan architect Kashipur, best home designer Moradabad, residential architecture Uttarakhand, house construction architect Kashipur, home interior architect Moradabad, house renovation architect Kashipur, top house architects near me, custom home design Moradabad, architect for villa design Kashipur, house design and Vastu consultant Moradabad",
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/best-house-design-architect-near-moradabad-kashipur",
  },
  openGraph: {
    title: "Best House Design Architect Near Moradabad & Kashipur | Space Build",
    description:
      "Looking for the best house design architect near Moradabad and Kashipur? Space Build offers custom home design, Vastu integration, and interior solutions for your dream home.",
    url: "https://www.spacebuild.co.in/best-house-design-architect-near-moradabad-kashipur",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Best House Design Architect Near Moradabad and Kashipur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best House Design Architect Near Moradabad & Kashipur | Space Build",
    description:
      "Looking for the best house design architect near Moradabad and Kashipur? Space Build offers custom home design, Vastu integration, and interior solutions for your dream home.",
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