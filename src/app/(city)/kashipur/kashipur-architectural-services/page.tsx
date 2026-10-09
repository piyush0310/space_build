import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Kashipur Architectural Services | Space Build",
  description:
    "Explore complete architectural services in Kashipur with Space Build, including residential and commercial design, Vastu integration, interior design, and project management consultation.",
  keywords:
    "Kashipur architectural services, architectural services Kashipur, architecture firm Kashipur, residential architecture services Kashipur, commercial architecture services Kashipur, Vastu architectural services Kashipur, interior design services Kashipur, renovation services Kashipur, project management consultation Kashipur, architecture and design firm Kashipur, building design services Kashipur, architectural consultation Kashipur, Vastu construction services Kashipur, architecture services Uttarakhand, architecture firm Udham Singh Nagar, custom architectural design Kashipur, commercial building services Kashipur, home design services Kashipur, architectural planning Kashipur, full service architecture firm Kashipur, best architectural services near Kashipur",
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/kashipur/kashipur-architectural-services",
  },
  openGraph: {
    title: "Kashipur Architectural Services | Space Build",
    description:
      "Explore complete architectural services in Kashipur with Space Build, including residential and commercial design, Vastu integration, interior design, and project management consultation.",
    url: "https://www.spacebuild.co.in/kashipur/kashipur-architectural-services",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Kashipur Architectural Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kashipur Architectural Services | Space Build",
    description:
      "Explore complete architectural services in Kashipur with Space Build, including residential and commercial design, Vastu integration, interior design, and project management consultation.",
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