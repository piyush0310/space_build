import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu Shastra for New Construction | Space Build",
  description:
    "Planning new construction? Learn Vastu Shastra guidelines with Space Build covering foundation, room layout, direction & construction stages.",
  keywords:
    "vastu shastra for new construction, vastu for new home construction, vastu guidelines for building, Space Build vastu consultation, vastu for house foundation, vastu tips for new house, vastu construction checklist, vastu for home Moradabad, vastu principles for building, new house vastu tips",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-shastra-for-new-construction",
  },
  openGraph: {
    title: "Vastu Shastra for New Construction | Space Build",
    description:
      "Planning new construction? Learn Vastu Shastra guidelines with Space Build covering foundation, room layout, direction & construction stages.",
    url: "https://www.spacebuild.co.in/vastu-shastra-for-new-construction",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Shastra for New Construction",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Shastra for New Construction | Space Build",
    description:
      "Planning new construction? Learn Vastu Shastra guidelines with Space Build covering foundation, room layout, direction & construction stages.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },
  icons: {
    icon: "/favicon-v2.ico",
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