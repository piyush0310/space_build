import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu Defects for Health Problems in Moradabad | Space Build",
  description:
    "Learn how Vastu defects can cause health problems in Moradabad homes. Space Build shares causes, affected zones & remedies for a healthier home.",
  keywords:
    "vastu defects for health problems Moradabad, vastu and health, vastu dosh remedies, Space Build vastu consultation, vastu for good health, home vastu health issues, vastu tips for home Moradabad, vastu remedies for illness, vastu dosh symptoms, vastu correction for health",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-defects-for-health-problems-moradabad",
  },
  openGraph: {
    title: "Vastu Defects for Health Problems in Moradabad | Space Build",
    description:
      "Learn how Vastu defects can cause health problems in Moradabad homes. Space Build shares causes, affected zones & remedies for a healthier home.",
    url: "https://www.spacebuild.co.in/vastu-defects-for-health-problems-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Defects for Health Problems in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Defects for Health Problems in Moradabad | Space Build",
    description:
      "Learn how Vastu defects can cause health problems in Moradabad homes. Space Build shares causes, affected zones & remedies for a healthier home.",
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