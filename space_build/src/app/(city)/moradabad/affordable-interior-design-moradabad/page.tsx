import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Affordable Interior Design in Moradabad | Space Build",
  description:
    "Space Build offers affordable interior design in Moradabad for homes & offices with budget-friendly solutions, quality materials & stylish, functional designs.",
  keywords:
    "affordable interior design Moradabad, budget interior designer Moradabad, low cost interior design, cheap interior design company, affordable home interiors, Space Build affordable interiors, budget-friendly office design, pocket-friendly interior designer, economical interior design Moradabad, best affordable interior designer near me",
  alternates: {
    canonical: "https://www.spacebuild.co.in/affordable-interior-design-moradabad",
  },
  openGraph: {
    title: "Affordable Interior Design in Moradabad | Space Build",
    description:
      "Space Build offers affordable interior design in Moradabad for homes & offices with budget-friendly solutions, quality materials & stylish, functional designs.",
    url: "https://www.spacebuild.co.in/affordable-interior-design-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Affordable Interior Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Interior Design in Moradabad | Space Build",
    description:
      "Space Build offers affordable interior design in Moradabad for homes & offices with budget-friendly solutions, quality materials & stylish, functional designs.",
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