import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Renovation for Bedroom in Moradabad | Space Build",
  description:
    "Planning a bedroom renovation? Space Build offers expert Vastu-based bedroom renovation services in Moradabad to improve sleep, relationships, and peace of mind. Get professional guidance at https://www.spacebuild.co.in/.",
  keywords:
    "vastu renovation for bedroom Moradabad, bedroom vastu Moradabad, vastu for master bedroom, bedroom renovation company Moradabad, vastu shastra for bedroom, bed direction vastu, bedroom correction without demolition, vastu consultant Moradabad, bedroom vastu remedies, bedroom renovation ideas, vastu shastra bedroom tips, best bedroom renovation Moradabad, Space Build Moradabad, vastu for bedroom colors, vastu for children bedroom, vastu compliant bedroom design, bedroom layout vastu shastra, vastu for sleeping direction, vastu for couple bedroom, vastu remedies for insomnia, Moradabad me bedroom vastu, sona kamra ka vastu Moradabad, bedroom renovation vastu ke anusar, so ne ki disha vastu, bedroom ka vastu sudhar, master bedroom vastu tips, palang ki disha vastu, bedroom ke rang vastu ke anusar, Moradabad bedroom renovation company, vastu consultant Moradabad, sone ke kamre ka vastu, bedroom vastu dosh nivaran, bedroom renovation bina todphod, Space Build vastu seva, bachon ke kamre ka vastu, so ne ki disha kaun si sahi hai, ghar ka bedroom kaise banaye vastu ke hisab se, bedroom vastu, bedroom renovation, vastu shastra, Moradabad vastu expert, master bedroom, Space Build, vastu compliant bedroom, residential renovation Moradabad, bedroom design vastu, sleeping direction vastu, home renovation, vastu consultant, bedroom remodeling, vastu for rest and relationships",
  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },
  openGraph: {
    title: "Vastu Renovation for Bedroom in Moradabad | Space Build",
    description:
      "Planning a bedroom renovation? Space Build offers expert Vastu-based bedroom renovation services in Moradabad to improve sleep, relationships, and peace of mind.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Renovation for Bedroom in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Renovation for Bedroom in Moradabad | Space Build",
    description:
      "Planning a bedroom renovation? Space Build offers expert Vastu-based bedroom renovation services in Moradabad to improve sleep, relationships, and peace of mind.",
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