import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Shastra Consultant in Moradabad | Space Build Expert Consultation",
  description:
    "Looking for a trusted Vastu Shastra consultant in Moradabad? Space Build offers expert consultation for homes, offices & plots based on classical Vastu principles.",
  keywords:
    "vastu shastra consultant moradabad, vastu shastra expert moradabad, vastu consultant near me, vastu shastra for home, vastu shastra for office, vastu shastra consultation services, space build vastu shastra, traditional vastu consultant moradabad, vastu shastra plot analysis, vastu shastra remedies",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-shastra-consultant-moradabad",
  },
  openGraph: {
    title: "Vastu Shastra Consultant in Moradabad | Space Build Expert Consultation",
    description:
      "Looking for a trusted Vastu Shastra consultant in Moradabad? Space Build offers expert consultation for homes, offices & plots based on classical Vastu principles.",
    url: "https://www.spacebuild.co.in/vastu-shastra-consultant-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Shastra Consultant in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Shastra Consultant in Moradabad | Space Build Expert Consultation",
    description:
      "Looking for a trusted Vastu Shastra consultant in Moradabad? Space Build offers expert consultation for homes, offices & plots based on classical Vastu principles.",
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