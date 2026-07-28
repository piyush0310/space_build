import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Interior Design Cost Per Sq Ft in Moradabad | Space Build",
  description:
    "Interior Design Cost Per Sq Ft in Moradabad by Space Build for homes, offices, and commercial spaces. Get transparent, itemized interior design cost estimates and budget-friendly solutions.",
  keywords:
    "interior design cost per sq ft Moradabad, interior design price Moradabad, home interior cost Moradabad, renovation cost per sq ft Moradabad, interior design budget Moradabad, modular kitchen cost Moradabad, interior design rates Moradabad, Space Build Moradabad, affordable interior design Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/interior-design-cost-per-sq-ft-moradabad",
  },
  openGraph: {
    title: "Interior Design Cost Per Sq Ft in Moradabad | Space Build",
    description:
      "Interior Design Cost Per Sq Ft in Moradabad by Space Build for homes, offices, and commercial spaces. Get transparent, itemized interior design cost estimates and budget-friendly solutions.",
    url: "https://www.spacebuild.co.in/interior-design-cost-per-sq-ft-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Interior Design Cost Per Sq Ft in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Design Cost Per Sq Ft in Moradabad | Space Build",
    description:
      "Interior Design Cost Per Sq Ft in Moradabad by Space Build for homes, offices, and commercial spaces. Get transparent, itemized interior design cost estimates and budget-friendly solutions.",
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