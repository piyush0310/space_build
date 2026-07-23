import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Online Vastu Consultant India | Expert Online Vastu Consultation | Space Build",
  description:
    "Consult the best online Vastu consultant in India with Space Build. Get professional online Vastu consultation for homes, offices, shops, flats, factories, hotels, and commercial properties from anywhere in India.",
  keywords:
    "online vastu consultant India, online vastu consultation India, online vastu expert India, home vastu consultant online, commercial vastu consultant India, office vastu consultation online, plot vastu consultation India, online vastu for home, Space Build",
  alternates: {
    canonical: "https://www.spacebuild.co.in/online-vastu-consultant-india",
  },
  openGraph: {
    title: "Online Vastu Consultant India | Expert Online Vastu Consultation | Space Build",
    description:
      "Consult the best online Vastu consultant in India with Space Build. Get professional online Vastu consultation for homes, offices, shops, flats, factories, hotels, and commercial properties from anywhere in India.",
    url: "https://www.spacebuild.co.in/online-vastu-consultant-india",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Online Vastu Consultant India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Vastu Consultant India | Expert Online Vastu Consultation | Space Build",
    description:
      "Consult the best online Vastu consultant in India with Space Build. Get professional online Vastu consultation for homes, offices, shops, flats, factories, hotels, and commercial properties from anywhere in India.",
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