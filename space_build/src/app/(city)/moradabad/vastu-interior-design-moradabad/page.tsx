import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Interior Design in Moradabad | Space Build – Expert Vastu Home & Office Interiors",
  description:
    "Space Build offers professional Vastu interior design services in Moradabad for homes and offices. Get expert Vastu-compliant interior solutions to enhance harmony, health, and prosperity with trusted Vastu consultant services.",
  keywords:
    "vastu interior design Moradabad, vastu consultant Moradabad, vastu compliant home interiors, vastu office design Moradabad, best interior designer Moradabad, vastu shastra interior tips, Space Build Moradabad, residential vastu design, commercial vastu interiors, vastu based home renovation",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-interior-design-moradabad",
  },
  openGraph: {
    title: "Vastu Interior Design in Moradabad | Space Build – Expert Vastu Home & Office Interiors",
    description:
      "Space Build offers professional Vastu interior design services in Moradabad for homes and offices. Get expert Vastu-compliant interior solutions to enhance harmony, health, and prosperity with trusted Vastu consultant services.",
    url: "https://www.spacebuild.co.in/vastu-interior-design-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Interior Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Interior Design in Moradabad | Space Build – Expert Vastu Home & Office Interiors",
    description:
      "Space Build offers professional Vastu interior design services in Moradabad for homes and offices. Get expert Vastu-compliant interior solutions to enhance harmony, health, and prosperity with trusted Vastu consultant services.",
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