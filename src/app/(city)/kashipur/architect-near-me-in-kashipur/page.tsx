import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Architect Near Me in Kashipur | Space Build",
  description:
    "Searching for an architect near me in Kashipur? Space Build offers local architectural design, Vastu consultation, and interior solutions for homes and businesses in and around Kashipur.",
  keywords:
    "architect near me in Kashipur, architect near me, local architect Kashipur, best architect near Kashipur, architect nearby Kashipur, architecture firm near me, home architect near me, commercial architect near me Kashipur, Vastu architect near me, architect consultation near Kashipur, residential architect near Kashipur, architect office near me, nearby architecture services Kashipur, local architecture firm Uttarakhand, architect near Udham Singh Nagar, architect near Moradabad, house design architect near me, architect for renovation near Kashipur, project management consultant near Kashipur, interior designer near Kashipur, architecture and Vastu consultant near me, best architecture firm near me Kashipur",
  alternates: {
    canonical: "https://www.spacebuild.co.in/architect-near-me-kashipur",
  },
  openGraph: {
    title: "Architect Near Me in Kashipur | Space Build",
    description:
      "Searching for an architect near me in Kashipur? Space Build offers local architectural design, Vastu consultation, and interior solutions for homes and businesses in and around Kashipur.",
    url: "https://www.spacebuild.co.in/architect-near-me-kashipur",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Architect Near Me in Kashipur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Architect Near Me in Kashipur | Space Build",
    description:
      "Searching for an architect near me in Kashipur? Space Build offers local architectural design, Vastu consultation, and interior solutions for homes and businesses in and around Kashipur.",
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