import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Construction Project Management Services in Moradabad | Space Build",
  description:
    "Space Build offers reliable construction project management services in Moradabad, covering planning, execution, quality control & timely delivery.",
  keywords:
    "construction project management services Moradabad, construction management company Moradabad, Space Build construction services, building construction management Moradabad, construction consultancy Moradabad, site management services, construction contractor Moradabad, turnkey construction services, residential construction management, commercial construction services Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/construction-project-management-services-moradabad",
  },
  openGraph: {
    title: "Construction Project Management Services in Moradabad | Space Build",
    description:
      "Space Build offers reliable construction project management services in Moradabad, covering planning, execution, quality control & timely delivery.",
    url: "https://www.spacebuild.co.in/construction-project-management-services-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Construction Project Management Services in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Project Management Services in Moradabad | Space Build",
    description:
      "Space Build offers reliable construction project management services in Moradabad, covering planning, execution, quality control & timely delivery.",
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