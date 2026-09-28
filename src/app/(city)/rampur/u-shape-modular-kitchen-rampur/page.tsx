
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "U-Shape Modular Kitchen in Rampur | Space Build",
  description:
    "Get a premium U-shape modular kitchen in Rampur designed by Space Build. Maximum storage, efficient workflow & elegant finishes for large and mid-size kitchens. Book a free consultation.",
  keywords:
    "U shape modular kitchen Rampur, U shaped kitchen design Rampur, U shape kitchen Rampur, modular kitchen Rampur, U shape kitchen interior Rampur, U shape kitchen cost Rampur, horseshoe kitchen design Rampur, best modular kitchen company Rampur, U shape kitchen cabinets Rampur, modular kitchen design Rampur, large kitchen design Rampur, U shape kitchen for villas Rampur, kitchen interior designer Rampur, U shape modular kitchen price Rampur, modular kitchen installation Rampur, affordable U shape kitchen Rampur, luxury U shape kitchen Rampur, U shape kitchen layout ideas, modular kitchen dealers Rampur, kitchen renovation Rampur, U shape kitchen with island Rampur, modular kitchen showroom Rampur, best interior designer Rampur",
  alternates: {
    canonical: "https://www.spacebuild.co.in/rampur/u-shape-modular-kitchen-rampur",
  },
  openGraph: {
    title: "U-Shape Modular Kitchen in Rampur | Space Build",
    description:
      "Get a premium U-shape modular kitchen in Rampur designed by Space Build. Maximum storage, efficient workflow & elegant finishes for large and mid-size kitchens. Book a free consultation.",
    url: "https://www.spacebuild.co.in/rampur/u-shape-modular-kitchen-rampur",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - U-Shape Modular Kitchen in Rampur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "U-Shape Modular Kitchen in Rampur | Space Build",
    description:
      "Get a premium U-shape modular kitchen in Rampur designed by Space Build. Maximum storage, efficient workflow & elegant finishes for large and mid-size kitchens. Book a free consultation.",
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
