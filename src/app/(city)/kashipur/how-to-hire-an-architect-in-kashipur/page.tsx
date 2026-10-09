import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "How to Hire an Architect in Kashipur | Space Build",
  description:
    "Learn how to hire the right architect in Kashipur with this complete guide covering credentials, portfolios, fees, and contracts. Get expert architectural consultation from Space Build.",
  keywords:
    "how to hire an architect in Kashipur, architect in Kashipur, hire architect Kashipur, best architect in Kashipur, architecture firm Kashipur, residential architect Kashipur, commercial architect Kashipur, architect fees Kashipur, architect consultation Kashipur, Vastu architect Kashipur, architect for home construction Kashipur, architectural services Uttarakhand, hire architect Uttarakhand, architect near me Kashipur, top architects Kashipur, architect portfolio Kashipur, construction consultant Kashipur, architect for renovation Kashipur, licensed architect Kashipur, architect and interior designer Kashipur, project management consultation Kashipur, architecture firm Udham Singh Nagar",
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/kashipur/how-to-hire-an-architect-in-kashipur",
  },
  openGraph: {
    title: "How to Hire an Architect in Kashipur | Space Build",
    description:
      "Learn how to hire the right architect in Kashipur with this complete guide covering credentials, portfolios, fees, and contracts. Get expert architectural consultation from Space Build.",
    url: "https://www.spacebuild.co.in/kashipur/how-to-hire-an-architect-in-kashipur",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - How to Hire an Architect in Kashipur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Hire an Architect in Kashipur | Space Build",
    description:
      "Learn how to hire the right architect in Kashipur with this complete guide covering credentials, portfolios, fees, and contracts. Get expert architectural consultation from Space Build.",
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