import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Modular Kitchen in Moradabad | Space Build",
  description:
    "Space Build offers stylish and functional modular kitchens in Moradabad. Get customized designs, premium materials & expert installation for a smart, space-saving kitchen.",
  keywords:
    "modular kitchen moradabad, modular kitchen design moradabad, modular kitchen company moradabad, space build moradabad, kitchen interior design moradabad, l shaped modular kitchen, modular kitchen manufacturers moradabad, kitchen renovation moradabad, best modular kitchen designers, modern kitchen design moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/modular-kitchen-moradabad",
  },
  openGraph: {
    title: "Modular Kitchen in Moradabad | Space Build",
    description:
      "Space Build offers stylish and functional modular kitchens in Moradabad. Get customized designs, premium materials & expert installation for a smart, space-saving kitchen.",
    url: "https://www.spacebuild.co.in/modular-kitchen-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Modular Kitchen in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen in Moradabad | Space Build",
    description:
      "Space Build offers stylish and functional modular kitchens in Moradabad. Get customized designs, premium materials & expert installation for a smart, space-saving kitchen.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },
  icons: {
    icon: "/favicon-v2.ico",
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