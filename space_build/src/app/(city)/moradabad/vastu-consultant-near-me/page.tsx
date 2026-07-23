import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu Consultant Near Me | Space Build",
  description:
    "Searching for a vastu consultant near you? Space Build offers experienced, local vastu consultation for homes, offices & commercial properties.",
  keywords:
    "vastu consultant near me, vastu expert near me, local vastu consultant, Space Build vastu consultation, best vastu consultant Moradabad, vastu consultant for home, vastu expert for business, vastu consultation service near me, hire vastu consultant, vastu specialist near me",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-consultant-near-me",
  },
  openGraph: {
    title: "Vastu Consultant Near Me | Space Build",
    description:
      "Searching for a vastu consultant near you? Space Build offers experienced, local vastu consultation for homes, offices & commercial properties.",
    url: "https://www.spacebuild.co.in/vastu-consultant-near-me",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Consultant Near Me",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Consultant Near Me | Space Build",
    description:
      "Searching for a vastu consultant near you? Space Build offers experienced, local vastu consultation for homes, offices & commercial properties.",
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