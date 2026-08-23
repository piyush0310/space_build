import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Renovation for Pooja Room in Moradabad | Space Build",
  description:
    "Planning to renovate or build a pooja room? Space Build offers expert Vastu-based pooja room renovation services in Moradabad for peace, positivity, and spiritual harmony. Get professional guidance at https://www.spacebuild.co.in/.",
  keywords:
    "vastu renovation for pooja room Moradabad, pooja room vastu Moradabad, vastu for temple room, pooja room renovation company Moradabad, vastu shastra for pooja room, pooja room direction vastu, pooja room correction without demolition, vastu consultant Moradabad, pooja room vastu remedies, pooja room renovation ideas, vastu shastra mandir tips, best pooja room renovation Moradabad, Space Build Moradabad, vastu for pooja room colors, vastu for idol placement, vastu compliant pooja room design, pooja room layout vastu shastra, vastu for home temple, vastu for mandir direction, pooja room in apartment vastu, Moradabad me pooja room vastu, mandir kamre ka vastu Moradabad, pooja room renovation vastu ke anusar, mandir ki disha vastu, pooja ghar ka vastu sudhar, ghar ke mandir ka vastu tips, murti sthapna ki disha vastu, pooja room ke rang vastu ke anusar, Moradabad pooja room renovation company, vastu consultant Moradabad, ghar ke mandir ka vastu, pooja room vastu dosh nivaran, pooja room renovation bina todphod, Space Build vastu seva, ishaan kon ka vastu, mandir kis disha me banaye, ghar ka pooja ghar kaise banaye vastu ke hisab se",
  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },
  openGraph: {
    title: "Vastu Renovation for Pooja Room in Moradabad | Space Build",
    description:
      "Planning to renovate or build a pooja room? Space Build offers expert Vastu-based pooja room renovation services in Moradabad for peace, positivity, and spiritual harmony.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Renovation for Pooja Room in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Renovation for Pooja Room in Moradabad | Space Build",
    description:
      "Planning to renovate or build a pooja room? Space Build offers expert Vastu-based pooja room renovation services in Moradabad for peace, positivity, and spiritual harmony.",
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