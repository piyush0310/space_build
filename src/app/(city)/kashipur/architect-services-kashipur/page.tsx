import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Architect Services in Kashipur | Space Build",
  description:
    "Get professional architect services in Kashipur from Space Build, including residential and commercial design, Vastu integration, renovation, interiors, and project management consultation.",
  keywords:
    "architect services Kashipur, architect services near me, residential architect services Kashipur, commercial architect services Kashipur, Vastu architect services Kashipur, architecture design services Kashipur, renovation architect services Kashipur, interior design services Kashipur, project management consultation Kashipur, architect consultation services Kashipur, professional architect services Uttarakhand, architecture firm services Kashipur, building design services Kashipur, architectural planning services Kashipur, Vastu construction services Kashipur, home architect services Kashipur, office architect services Kashipur, architecture firm Udham Singh Nagar, custom architect services Kashipur, best architect services near Kashipur, full service architecture Kashipur",
  alternates: {
    canonical: "https://www.spacebuild.co.in/kashipur/architect-services-kashipur",
  },
  openGraph: {
    title: "Architect Services in Kashipur | Space Build",
    description:
      "Get professional architect services in Kashipur from Space Build, including residential and commercial design, Vastu integration, renovation, interiors, and project management consultation.",
    url: "https://www.spacebuild.co.in/kashipur/architect-services-kashipur",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Architect Services in Kashipur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Architect Services in Kashipur | Space Build",
    description:
      "Get professional architect services in Kashipur from Space Build, including residential and commercial design, Vastu integration, renovation, interiors, and project management consultation.",
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