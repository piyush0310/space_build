import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Renovation for Staircase in Moradabad | Space Build",
  description:
    "Planning a staircase renovation? Space Build offers expert Vastu-based staircase renovation services in Moradabad to improve growth, stability, and positive energy flow. Get professional guidance at https://www.spacebuild.co.in/.",
  keywords:
    "vastu renovation for staircase Moradabad, staircase vastu Moradabad, vastu for stairs direction, staircase renovation company Moradabad, vastu shastra for staircase, staircase location vastu, staircase correction without demolition, vastu consultant Moradabad, staircase vastu remedies, staircase renovation ideas, vastu shastra stairs tips, best staircase renovation Moradabad, Space Build Moradabad, vastu for staircase colors, vastu for spiral staircase, vastu compliant staircase design, staircase layout vastu shastra, vastu for staircase in northeast, vastu for number of steps, staircase under vastu rules, Moradabad me staircase vastu, sidhiyon ka vastu Moradabad, staircase renovation vastu ke anusar, sidhi ki disha vastu, staircase ka vastu sudhar, sidhiyon ki sankhya vastu tips, staircase ke rang vastu ke anusar, Moradabad staircase renovation company, vastu consultant Moradabad, ghar ki sidhi ka vastu, staircase vastu dosh nivaran, staircase renovation bina todphod, Space Build vastu seva, northeast me sidhi ka dosh, sidhi kis disha me banaye, ghar ki staircase kaise banaye vastu ke hisab se",
  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },
  openGraph: {
    title: "Vastu Renovation for Staircase in Moradabad | Space Build",
    description:
      "Planning a staircase renovation? Space Build offers expert Vastu-based staircase renovation services in Moradabad to improve growth, stability, and positive energy flow.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Renovation for Staircase in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Renovation for Staircase in Moradabad | Space Build",
    description:
      "Planning a staircase renovation? Space Build offers expert Vastu-based staircase renovation services in Moradabad to improve growth, stability, and positive energy flow.",
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