import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "False Ceiling Design in Moradabad | Space Build Moradabad",
  description:
    "False Ceiling Design in Moradabad by Space Build Moradabad for POP false ceiling, gypsum ceiling design, living room false ceiling, office false ceiling, and complete ceiling solutions.",
  keywords:
    "false ceiling design Moradabad, POP false ceiling Moradabad, gypsum ceiling design, false ceiling for living room, Space Build Moradabad, false ceiling lighting design, bedroom false ceiling, office false ceiling design, false ceiling cost Moradabad, ceiling design ideas",
  alternates: {
    canonical: "https://www.spacebuild.co.in/false-ceiling-design-moradabad",
  },
  openGraph: {
    title: "False Ceiling Design in Moradabad | Space Build Moradabad",
    description:
      "False Ceiling Design in Moradabad by Space Build Moradabad for POP false ceiling, gypsum ceiling design, living room false ceiling, office false ceiling, and complete ceiling solutions.",
    url: "https://www.spacebuild.co.in/false-ceiling-design-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - False Ceiling Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "False Ceiling Design in Moradabad | Space Build Moradabad",
    description:
      "False Ceiling Design in Moradabad by Space Build Moradabad for POP false ceiling, gypsum ceiling design, living room false ceiling, office false ceiling, and complete ceiling solutions.",
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