import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "PVC Modular Kitchen in Moradabad | Space Build",
  description:
    "Considering a PVC modular kitchen in Moradabad? Space Build explains the benefits, materials, and design options of PVC kitchens built for durability and easy upkeep.",
  keywords:
    "PVC modular kitchen Moradabad, PVC kitchen cabinets Moradabad, waterproof kitchen Moradabad, PVC kitchen Moradabad price, Space Build Moradabad, PVC kitchen manufacturers Moradabad, termite proof kitchen Moradabad, PVC kitchen design Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/pvc-modular-kitchen-moradabad",
  },
  openGraph: {
    title: "PVC Modular Kitchen in Moradabad | Space Build",
    description:
      "Considering a PVC modular kitchen in Moradabad? Space Build explains the benefits, materials, and design options of PVC kitchens built for durability and easy upkeep.",
    url: "https://www.spacebuild.co.in/pvc-modular-kitchen-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - PVC Modular Kitchen in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PVC Modular Kitchen in Moradabad | Space Build",
    description:
      "Considering a PVC modular kitchen in Moradabad? Space Build explains the benefits, materials, and design options of PVC kitchens built for durability and easy upkeep.",
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
