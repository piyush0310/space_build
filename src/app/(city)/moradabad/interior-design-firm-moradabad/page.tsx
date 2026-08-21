import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Interior Design Firm in Moradabad | Space Build Moradabad",
  description:
    "Interior Design Firm in Moradabad by Space Build Moradabad for homes, offices, commercial spaces, turnkey interior solutions, modular furniture, and complete design services.",
  keywords:
    "interior design firm Moradabad, interior design company Moradabad, best interior firm Moradabad, home interior firm Moradabad, office interior firm Moradabad, Space Build Moradabad, turnkey interior solutions Moradabad, residential interior firm, commercial interior firm Moradabad, modular furniture Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/interior-design-firm-moradabad",
  },
  openGraph: {
    title: "Interior Design Firm in Moradabad | Space Build Moradabad",
    description:
      "Interior Design Firm in Moradabad by Space Build Moradabad for homes, offices, commercial spaces, turnkey interior solutions, modular furniture, and complete design services.",
    url: "https://www.spacebuild.co.in/interior-design-firm-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Interior Design Firm in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Firm in Moradabad | Space Build Moradabad",
    description:
      "Interior Design Firm in Moradabad by Space Build Moradabad for homes, offices, commercial spaces, turnkey interior solutions, modular furniture, and complete design services.",
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