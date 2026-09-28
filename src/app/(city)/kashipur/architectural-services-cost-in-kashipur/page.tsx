import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Architectural Services Cost in Kashipur | Space Build",
  description:
    "Wondering about architectural services cost in Kashipur? Learn fee models, cost factors and budget tips, then get a scope-based quote from Space Build today.",
  keywords:
    "architectural services cost in Kashipur, architect fees in Kashipur, architect charges Kashipur, house design cost Kashipur, architect cost per sq ft, residential architect cost, home design charges Kashipur, house plan cost Kashipur, 3D elevation cost Kashipur, Vastu consultation cost, architect and interior designer cost, building design cost India, architectural design pricing, architect fee structure India, construction drawing cost, residential architect near Kashipur, house map designer in Kashipur, house front elevation design Kashipur, interior designer in Kashipur, Vastu consultant in Kashipur, home renovation cost Kashipur, architect quotation Kashipur, affordable architect Kashipur, architectural planning services, Space Build architects",
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/architectural-services-cost-kashipur",
  },
  openGraph: {
    title: "Architectural Services Cost in Kashipur | Space Build",
    description:
      "Wondering about architectural services cost in Kashipur? Learn fee models, cost factors and budget tips, then get a scope-based quote from Space Build today.",
    url: "https://www.spacebuild.co.in/architectural-services-cost-kashipur",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Architectural Services Cost in Kashipur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Architectural Services Cost in Kashipur | Space Build",
    description:
      "Wondering about architectural services cost in Kashipur? Learn fee models, cost factors and budget tips, then get a scope-based quote from Space Build today.",
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