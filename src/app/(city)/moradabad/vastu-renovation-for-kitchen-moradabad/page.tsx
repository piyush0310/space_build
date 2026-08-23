import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Renovation for Kitchen in Moradabad | Space Build",
  description:
    "Renovating your kitchen? Space Build offers expert Vastu-based kitchen renovation services in Moradabad to improve health, harmony, and prosperity in your home. Get professional guidance at https://www.spacebuild.co.in/.",
  keywords:
    "vastu renovation for kitchen Moradabad, kitchen vastu Moradabad, vastu kitchen design, kitchen renovation company Moradabad, vastu for kitchen direction, modular kitchen vastu, vastu shastra for kitchen, kitchen stove direction vastu, kitchen correction without demolition, vastu consultant Moradabad, kitchen vastu remedies, kitchen renovation ideas, vastu shastra kitchen tips, best kitchen renovation Moradabad, Space Build Moradabad, vastu for kitchen sink, kitchen colors vastu, vastu for northeast kitchen, vastu compliant kitchen design, kitchen layout vastu shastra, Moradabad me kitchen vastu, rasoi ka vastu Moradabad, kitchen renovation vastu ke anusar, rasoi ki disha vastu, kitchen ka vastu sudhar, modular kitchen vastu tips, gas stove ki disha vastu, kitchen sink vastu upay, Moradabad kitchen renovation company, vastu consultant Moradabad, rasoi ghar ka vastu, kitchen vastu dosh nivaran, rasoi renovation bina todphod, Space Build vastu seva, kitchen ka rang vastu ke anusar, northeast kitchen vastu upay, ghar ki rasoi kaise banaye vastu ke hisab se, kitchen vastu, kitchen renovation, vastu shastra, Moradabad vastu expert, modular kitchen, Space Build, vastu compliant kitchen, residential renovation Moradabad, kitchen design vastu, stove direction vastu, home renovation, vastu consultant, kitchen remodeling, vastu for cooking area",
  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },
  openGraph: {
    title: "Vastu Renovation for Kitchen in Moradabad | Space Build",
    description:
      "Renovating your kitchen? Space Build offers expert Vastu-based kitchen renovation services in Moradabad to improve health, harmony, and prosperity in your home.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Renovation for Kitchen in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Renovation for Kitchen in Moradabad | Space Build",
    description:
      "Renovating your kitchen? Space Build offers expert Vastu-based kitchen renovation services in Moradabad to improve health, harmony, and prosperity in your home.",
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