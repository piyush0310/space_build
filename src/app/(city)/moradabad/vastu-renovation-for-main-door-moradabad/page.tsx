import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Renovation for Main Door in Moradabad | Space Build",
  description:
    "Is your main door affecting the energy of your home? Space Build offers expert Vastu renovation solutions for main doors and entrances in Moradabad. Get professional guidance at https://www.spacebuild.co.in/.",
  keywords:
    "vastu renovation for main door Moradabad, main door vastu Moradabad, vastu for entrance door, main gate vastu tips, vastu consultant Moradabad, main door direction vastu, entrance renovation vastu, vastu shastra for main door, front door vastu remedies, main door correction without demolition, vastu for house entrance, main door color vastu, vastu shastra entrance design, house gate vastu, Space Build Moradabad, vastu expert near me, main door renovation ideas, vastu for south facing main door, vastu for main door threshold, entrance vastu correction, Moradabad me mukhya dwar vastu, ghar ke main door ka vastu, mukhya dwar disha vastu, ghar ke gate ka vastu, entrance vastu Moradabad, mukhya dwar vastu upay, ghar ke darwaze ka vastu sudhar, south facing main door vastu upay, main gate ka rang vastu, mukhya dwar renovation Moradabad, vastu consultant Moradabad, ghar ke prawesh dwar ka vastu, dehleez vastu tips, Space Build vastu seva, main door vastu dosh nivaran, ghar ka darwaza kis disha me hona chahiye, entrance ka vastu sudharna, main door vastu, entrance vastu, vastu renovation, Moradabad vastu expert, front door vastu, Space Build, vastu shastra, house gate vastu, main entrance correction, residential vastu Moradabad, vastu remedies for door, home entrance design, vastu consultant, door direction vastu",
  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },
  openGraph: {
    title: "Vastu Renovation for Main Door in Moradabad | Space Build",
    description:
      "Is your main door affecting the energy of your home? Space Build offers expert Vastu renovation solutions for main doors and entrances in Moradabad.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Renovation for Main Door in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Renovation for Main Door in Moradabad | Space Build",
    description:
      "Is your main door affecting the energy of your home? Space Build offers expert Vastu renovation solutions for main doors and entrances in Moradabad.",
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