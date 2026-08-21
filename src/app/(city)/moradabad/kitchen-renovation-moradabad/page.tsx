import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Kitchen Renovation in Moradabad | Space Build",
  description:
    "Transform your kitchen with Space Build&apos;s expert kitchen renovation services in Moradabad, covering design, modular fittings, plumbing, and finishing. Visit spacebuild.co.in.",
  keywords:
    "kitchen renovation Moradabad, modular kitchen Moradabad, kitchen remodeling Moradabad, kitchen interior design Moradabad, Space Build Moradabad, kitchen renovation contractor, modular kitchen designer Moradabad, kitchen makeover services, best kitchen renovation company Moradabad, kitchen design and construction",
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/kitchen-renovation-moradabad",
  },
  openGraph: {
    title: "Kitchen Renovation in Moradabad | Space Build",
    description:
      "Transform your kitchen with Space Build&apos;s expert kitchen renovation services in Moradabad, covering design, modular fittings, plumbing, and finishing. Visit spacebuild.co.in.",
    url: "https://www.spacebuild.co.in/kitchen-renovation-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Kitchen Renovation in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Renovation in Moradabad | Space Build",
    description:
      "Transform your kitchen with Space Build&apos;s expert kitchen renovation services in Moradabad, covering design, modular fittings, plumbing, and finishing. Visit spacebuild.co.in.",
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