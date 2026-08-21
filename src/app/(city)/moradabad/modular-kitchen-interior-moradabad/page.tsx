import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Modular Kitchen Interior Design in Moradabad | Space Build",
  description:
    "Explore modular kitchen interior design in Moradabad with Space Build. From layout planning to finishing touches, we create kitchens that blend style, comfort, and function.",
  keywords:
    "modular kitchen interior Moradabad, kitchen interior design Moradabad, modular kitchen Moradabad, kitchen interior decorators Moradabad, Space Build Moradabad, modern kitchen interior Moradabad, kitchen renovation Moradabad, interior design company Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/modular-kitchen-interior-moradabad",
  },
  openGraph: {
    title: "Modular Kitchen Interior Design in Moradabad | Space Build",
    description:
      "Explore modular kitchen interior design in Moradabad with Space Build. From layout planning to finishing touches, we create kitchens that blend style, comfort, and function.",
    url: "https://www.spacebuild.co.in/modular-kitchen-interior-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Modular Kitchen Interior Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Interior Design in Moradabad | Space Build",
    description:
      "Explore modular kitchen interior design in Moradabad with Space Build. From layout planning to finishing touches, we create kitchens that blend style, comfort, and function.",
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