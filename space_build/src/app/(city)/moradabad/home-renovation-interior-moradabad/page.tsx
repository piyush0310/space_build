import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Home Renovation & Interior Design in Moradabad | Space Build",
  description:
    "Home Renovation & Interior Design in Moradabad by Space Build for home renovation, interior design, modular kitchens, false ceiling design, and complete residential makeover services.",
  keywords:
    "home renovation Moradabad, interior design Moradabad, home interior designers Moradabad, modular kitchen Moradabad, false ceiling design Moradabad, house renovation company Moradabad, best interior designer in Moradabad, residential renovation Moradabad, Space Build Moradabad, home makeover Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/home-renovation-interior-moradabad",
  },
  openGraph: {
    title: "Home Renovation & Interior Design in Moradabad | Space Build",
    description:
      "Home Renovation & Interior Design in Moradabad by Space Build for home renovation, interior design, modular kitchens, false ceiling design, and complete residential makeover services.",
    url: "https://www.spacebuild.co.in/home-renovation-interior-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Home Renovation & Interior Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Renovation & Interior Design in Moradabad | Space Build",
    description:
      "Home Renovation & Interior Design in Moradabad by Space Build for home renovation, interior design, modular kitchens, false ceiling design, and complete residential makeover services.",
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