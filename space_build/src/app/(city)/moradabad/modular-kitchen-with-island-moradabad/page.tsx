import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Modular Kitchen with Island in Moradabad | Space Build",
  description:
    "Planning a modular kitchen with an island in Moradabad? Space Build designs functional, stylish island kitchens that maximise space, storage, and everyday convenience.",
  keywords:
    "modular kitchen with island Moradabad, kitchen island design Moradabad, island kitchen Moradabad, modular kitchen Moradabad, Space Build Moradabad, luxury kitchen design Moradabad, modular kitchen manufacturers Moradabad, custom kitchen island Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/modular-kitchen-with-island-moradabad",
  },
  openGraph: {
    title: "Modular Kitchen with Island in Moradabad | Space Build",
    description:
      "Planning a modular kitchen with an island in Moradabad? Space Build designs functional, stylish island kitchens that maximise space, storage, and everyday convenience.",
    url: "https://www.spacebuild.co.in/modular-kitchen-with-island-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Modular Kitchen with Island in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen with Island in Moradabad | Space Build",
    description:
      "Planning a modular kitchen with an island in Moradabad? Space Build designs functional, stylish island kitchens that maximise space, storage, and everyday convenience.",
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