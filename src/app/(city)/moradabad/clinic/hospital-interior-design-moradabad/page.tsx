import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Clinic & Hospital Interior Design in Moradabad | Space Build",
  description:
    "Clinic & Hospital Interior Design in Moradabad by Space Build for clinic interior design, hospital renovation, dental clinic interiors, diagnostic center design, and healthcare facility planning services.",
  keywords:
    "clinic interior design Moradabad, hospital interior design Moradabad, healthcare interior designer Moradabad, medical clinic renovation Moradabad, hospital renovation Moradabad, dental clinic interior Moradabad, diagnostic center interior design Moradabad, Space Build Moradabad, healthcare facility design Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/clinic-hospital-interior-design-moradabad",
  },
  openGraph: {
    title: "Clinic & Hospital Interior Design in Moradabad | Space Build",
    description:
      "Clinic & Hospital Interior Design in Moradabad by Space Build for clinic interior design, hospital renovation, dental clinic interiors, diagnostic center design, and healthcare facility planning services.",
    url: "https://www.spacebuild.co.in/clinic-hospital-interior-design-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Clinic & Hospital Interior Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clinic & Hospital Interior Design in Moradabad | Space Build",
    description:
      "Clinic & Hospital Interior Design in Moradabad by Space Build for clinic interior design, hospital renovation, dental clinic interiors, diagnostic center design, and healthcare facility planning services.",
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