import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Modular Kitchen Installation in Moradabad | Space Build",
  description:
    "Planning modular kitchen installation in Moradabad? Space Build handles every step, from site preparation to final fitting, ensuring a smooth, precise, and hassle-free setup.",
  keywords:
    "modular kitchen installation Moradabad, kitchen installation service Moradabad, modular kitchen fitting Moradabad, kitchen setup Moradabad, Space Build Moradabad, modular kitchen installers Moradabad, kitchen assembly Moradabad, kitchen renovation installation Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/modular-kitchen-installation-moradabad",
  },
  openGraph: {
    title: "Modular Kitchen Installation in Moradabad | Space Build",
    description:
      "Planning modular kitchen installation in Moradabad? Space Build handles every step, from site preparation to final fitting, ensuring a smooth, precise, and hassle-free setup.",
    url: "https://www.spacebuild.co.in/modular-kitchen-installation-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Modular Kitchen Installation in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Installation in Moradabad | Space Build",
    description:
      "Planning modular kitchen installation in Moradabad? Space Build handles every step, from site preparation to final fitting, ensuring a smooth, precise, and hassle-free setup.",
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