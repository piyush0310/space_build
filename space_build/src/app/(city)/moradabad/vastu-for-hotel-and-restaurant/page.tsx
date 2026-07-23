import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu for Hotel and Restaurant | Hotel & Restaurant Vastu Consultant | Space Build",
  description:
    "Get expert Vastu for hotels and restaurants with Space Build. Improve customer experience, business growth, staff productivity, and positive energy through professional Vastu consultation.",
  keywords:
    "vastu for hotel and restaurant, hotel vastu consultant, restaurant vastu consultant, hotel vastu, restaurant vastu, hotel entrance vastu, restaurant kitchen vastu, hotel reception vastu, hospitality vastu, commercial vastu consultant, hotel construction vastu, restaurant interior vastu, hotel vastu tips, restaurant vastu tips, Space Build",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-for-hotel-and-restaurant",
  },
  openGraph: {
    title: "Vastu for Hotel and Restaurant | Hotel & Restaurant Vastu Consultant | Space Build",
    description:
      "Get expert Vastu for hotels and restaurants with Space Build. Improve customer experience, business growth, staff productivity, and positive energy through professional Vastu consultation.",
    url: "https://www.spacebuild.co.in/vastu-for-hotel-and-restaurant",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu for Hotel and Restaurant",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu for Hotel and Restaurant | Hotel & Restaurant Vastu Consultant | Space Build",
    description:
      "Get expert Vastu for hotels and restaurants with Space Build. Improve customer experience, business growth, staff productivity, and positive energy through professional Vastu consultation.",
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