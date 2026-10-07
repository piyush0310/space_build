import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Kashipur Construction Company Reviews | Decode Client Feedback",

  description:
    "Reading Kashipur construction company reviews? Learn to decode comments by theme, spot unreliable feedback and confirm opinions before you sign a contract.",

  keywords:
    "Kashipur construction company reviews, construction company reviews Kashipur, builder reviews Kashipur, contractor reviews Kashipur, construction feedback Kashipur, home construction reviews Kashipur, shop construction reviews Kashipur, factory construction reviews Kashipur, renovation reviews Kashipur, decode client comments Kashipur, test review honesty Kashipur, verify builder reviews Kashipur, construction company rating Kashipur, trusted construction company Kashipur, best construction company Kashipur, building contractor feedback Kashipur, construction company complaints Kashipur, client reviews construction Kashipur, review scorecard construction, construction company Kashipur",

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/kashipur-construction-company-reviews",
  },

  openGraph: {
    title: "Kashipur Construction Company Reviews | Decode Client Feedback",
    description:
      "Reading Kashipur construction company reviews? Learn to decode comments by theme, spot unreliable feedback and confirm opinions before you sign a contract.",
    url: "https://www.spacebuild.co.in/kashipur-construction-company-reviews",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kashipur Construction Company Reviews - Decode Client Feedback",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kashipur Construction Company Reviews | Decode Client Feedback",
    description:
      "Reading Kashipur construction company reviews? Learn to decode comments by theme, spot unreliable feedback and confirm opinions before you sign a contract.",
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