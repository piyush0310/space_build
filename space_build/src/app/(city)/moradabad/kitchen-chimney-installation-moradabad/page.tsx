import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Kitchen Chimney Installation in Moradabad | Space Build",
  description:
    "Professional kitchen chimney installation in Moradabad by Space Build. Expert fitting, ducting, and integration with modular kitchens for efficient smoke and odor removal.",
  keywords:
    "kitchen chimney installation Moradabad, chimney installation near me, modular kitchen chimney Moradabad, kitchen chimney fitting Moradabad, best chimney installer Moradabad, Space Build Moradabad, kitchen chimney service Moradabad, chimney installation cost Moradabad, auto-clean chimney installation, kitchen ventilation Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/kitchen-chimney-installation-moradabad",
  },
  openGraph: {
    title: "Kitchen Chimney Installation in Moradabad | Space Build",
    description:
      "Professional kitchen chimney installation in Moradabad by Space Build. Expert fitting, ducting, and integration with modular kitchens for efficient smoke and odor removal.",
    url: "https://www.spacebuild.co.in/kitchen-chimney-installation-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Kitchen Chimney Installation in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Chimney Installation in Moradabad | Space Build",
    description:
      "Professional kitchen chimney installation in Moradabad by Space Build. Expert fitting, ducting, and integration with modular kitchens for efficient smoke and odor removal.",
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