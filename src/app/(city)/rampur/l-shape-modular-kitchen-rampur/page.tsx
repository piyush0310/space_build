import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "L-Shape Modular Kitchen in Rampur | Space Build",
  description:
    "Get a premium L-shape modular kitchen in Rampur designed by Space Build. Smart corner storage, elegant finishes & expert installation for compact and mid-size kitchens. Book a free consultation.",
  keywords:
    "L shape modular kitchen Rampur, L shaped kitchen design Rampur, L shape kitchen Rampur, modular kitchen Rampur, L shape kitchen interior Rampur, L shape kitchen cost Rampur, corner modular kitchen Rampur, best modular kitchen company Rampur, L shape kitchen cabinets Rampur, modular kitchen design Rampur, small L shape kitchen Rampur, L shape kitchen for apartments Rampur, kitchen interior designer Rampur, L shape modular kitchen price Rampur, modular kitchen installation Rampur, affordable L shape kitchen Rampur, luxury L shape kitchen Rampur, L shape kitchen layout ideas, modular kitchen dealers Rampur, kitchen renovation Rampur, L shape kitchen with island Rampur, modular kitchen showroom Rampur, best interior designer Rampur",
  alternates: {
    canonical: "https://www.spacebuild.co.in/rampur/l-shape-modular-kitchen-rampur",
  },
  openGraph: {
    title: "L-Shape Modular Kitchen in Rampur | Space Build",
    description:
      "Get a premium L-shape modular kitchen in Rampur designed by Space Build. Smart corner storage, elegant finishes & expert installation for compact and mid-size kitchens. Book a free consultation.",
    url: "https://www.spacebuild.co.in/rampur/l-shape-modular-kitchen-rampur",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - L-Shape Modular Kitchen in Rampur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "L-Shape Modular Kitchen in Rampur | Space Build",
    description:
      "Get a premium L-shape modular kitchen in Rampur designed by Space Build. Smart corner storage, elegant finishes & expert installation for compact and mid-size kitchens. Book a free consultation.",
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