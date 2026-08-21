import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best PMC Company in Moradabad | Space Build",
  description:
    "Looking for the best PMC company in Moradabad? Space Build offers expert project management consultancy, from planning to handover, with transparency and accountability. Visit spacebuild.co.in.",
  keywords:
    "best PMC company Moradabad, project management consultancy Moradabad, PMC services Moradabad, top construction PMC Moradabad, Space Build Moradabad, project management consultant, PMC firm Moradabad, construction project management company, best construction consultancy Moradabad, PMC services for builders",
  alternates: {
    canonical: "https://www.spacebuild.co.in/best-pmc-company-moradabad",
  },
  openGraph: {
    title: "Best PMC Company in Moradabad | Space Build",
    description:
      "Looking for the best PMC company in Moradabad? Space Build offers expert project management consultancy, from planning to handover, with transparency and accountability. Visit spacebuild.co.in.",
    url: "https://www.spacebuild.co.in/best-pmc-company-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Best PMC Company in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best PMC Company in Moradabad | Space Build",
    description:
      "Looking for the best PMC company in Moradabad? Space Build offers expert project management consultancy, from planning to handover, with transparency and accountability. Visit spacebuild.co.in.",
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