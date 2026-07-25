import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Interior Design Company in Moradabad | Space Build",
  description:
    "Space Build is a trusted interior design company in Moradabad offering home, office & commercial interior solutions with modern designs, quality execution & affordable pricing.",
  keywords:
    "interior design company Moradabad, interior designer Moradabad, best interior designer near me, home interior design Moradabad, commercial interior design company, Space Build Moradabad, interior decorators Moradabad, residential interior design, turnkey interior solutions, top interior design firm Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/interior-design-company-moradabad",
  },
  openGraph: {
    title: "Interior Design Company in Moradabad | Space Build",
    description:
      "Space Build is a trusted interior design company in Moradabad offering home, office & commercial interior solutions with modern designs, quality execution & affordable pricing.",
    url: "https://www.spacebuild.co.in/interior-design-company-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Interior Design Company in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Company in Moradabad | Space Build",
    description:
      "Space Build is a trusted interior design company in Moradabad offering home, office & commercial interior solutions with modern designs, quality execution & affordable pricing.",
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