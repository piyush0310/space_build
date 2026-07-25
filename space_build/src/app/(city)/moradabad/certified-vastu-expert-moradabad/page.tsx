import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Certified Vastu Expert in Moradabad | Space Build",
  description:
    "Looking for a certified vastu expert in Moradabad? Space Build offers trained, knowledgeable vastu consultation backed by practical experience.",
  keywords:
    "certified vastu expert Moradabad, trained vastu consultant, vastu expert credentials, Space Build vastu consultation, qualified vastu consultant Moradabad, vastu training and certification, professional vastu expert, vastu consultant qualifications, vastu expert for home Moradabad, hire trained vastu expert",
  alternates: {
    canonical: "https://www.spacebuild.co.in/certified-vastu-expert-in-moradabad",
  },
  openGraph: {
    title: "Certified Vastu Expert in Moradabad | Space Build",
    description:
      "Looking for a certified vastu expert in Moradabad? Space Build offers trained, knowledgeable vastu consultation backed by practical experience.",
    url: "https://www.spacebuild.co.in/certified-vastu-expert-in-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Certified Vastu Expert in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certified Vastu Expert in Moradabad | Space Build",
    description:
      "Looking for a certified vastu expert in Moradabad? Space Build offers trained, knowledgeable vastu consultation backed by practical experience.",
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