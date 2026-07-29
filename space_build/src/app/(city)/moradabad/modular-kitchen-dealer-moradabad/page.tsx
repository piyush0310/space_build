import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Modular Kitchen Dealer in Moradabad | Space Build – Trusted Modular Kitchen Solutions",
  description:
    "Space Build is a trusted modular kitchen dealer in Moradabad, offering branded modular kitchen solutions, designs and materials through an expert showroom experience. Get reliable modular kitchen options tailored to your home and budget.",
  keywords:
    "modular kitchen dealer Moradabad, modular kitchen showroom Moradabad, modular kitchen supplier, best modular kitchen dealer, authorized modular kitchen dealer Moradabad, Space Build Moradabad, kitchen brand dealer, modular kitchen distributor, kitchen showroom near me, modular kitchen retailer Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/modular-kitchen-dealer-moradabad",
  },
  openGraph: {
    title: "Modular Kitchen Dealer in Moradabad | Space Build – Trusted Modular Kitchen Solutions",
    description:
      "Space Build is a trusted modular kitchen dealer in Moradabad, offering branded modular kitchen solutions, designs and materials through an expert showroom experience. Get reliable modular kitchen options tailored to your home and budget.",
    url: "https://www.spacebuild.co.in/modular-kitchen-dealer-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Modular Kitchen Dealer in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modular Kitchen Dealer in Moradabad | Space Build – Trusted Modular Kitchen Solutions",
    description:
      "Space Build is a trusted modular kitchen dealer in Moradabad, offering branded modular kitchen solutions, designs and materials through an expert showroom experience. Get reliable modular kitchen options tailored to your home and budget.",
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