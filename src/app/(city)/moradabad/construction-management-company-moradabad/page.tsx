import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Construction Management Company in Moradabad | Space Build",
  description:
    "Space Build is a leading construction management company in Moradabad, offering end-to-end services from planning and design to execution and handover.",
  keywords:
    "construction management company Moradabad, construction company Moradabad, building construction Moradabad, general contractor Moradabad, Space Build Moradabad, turnkey construction Moradabad, construction firm Moradabad, house construction company Moradabad, commercial construction company Moradabad, best construction company Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/construction-management-company-moradabad",
  },
  openGraph: {
    title: "Construction Management Company in Moradabad | Space Build",
    description:
      "Space Build is a leading construction management company in Moradabad, offering end-to-end services from planning and design to execution and handover.",
    url: "https://www.spacebuild.co.in/construction-management-company-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Construction Management Company in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Construction Management Company in Moradabad | Space Build",
    description:
      "Space Build is a leading construction management company in Moradabad, offering end-to-end services from planning and design to execution and handover.",
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