import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu for Home in Moradabad | Space Build Home Vastu Consultation",
  description:
    "Looking for Vastu guidance for your home in Moradabad? Space Build offers detailed, room-by-room Vastu consultation for better health, harmony & prosperity.",
  keywords:
    "vastu for home moradabad, home vastu consultant moradabad, vastu for house moradabad, vastu tips for home, vastu for bedroom, vastu for kitchen, vastu for pooja room, home vastu remedies, space build home vastu, vastu consultation for homeowners",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-for-home-moradabad",
  },
  openGraph: {
    title: "Vastu for Home in Moradabad | Space Build Home Vastu Consultation",
    description:
      "Looking for Vastu guidance for your home in Moradabad? Space Build offers detailed, room-by-room Vastu consultation for better health, harmony & prosperity.",
    url: "https://www.spacebuild.co.in/vastu-for-home-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu for Home in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu for Home in Moradabad | Space Build Home Vastu Consultation",
    description:
      "Looking for Vastu guidance for your home in Moradabad? Space Build offers detailed, room-by-room Vastu consultation for better health, harmony & prosperity.",
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