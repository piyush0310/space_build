import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Correction & Renovation Services in Moradabad | Space Build",
  description:
    "Looking for expert Vastu correction and renovation services in Moradabad? Space Build offers professional Vastu consultation, home renovation, and structural correction solutions for homes, offices, and commercial spaces. Visit https://www.spacebuild.co.in/ to know more.",
  keywords:
    "vastu correction Moradabad, vastu renovation Moradabad, vastu consultant Moradabad, home renovation Moradabad, vastu shastra expert Moradabad, house renovation company Moradabad, vastu remedies for home, vastu compliant construction, best interior designer Moradabad, vastu correction without demolition, office vastu consultant Moradabad, vastu tips for new house, residential renovation services, vastu shastra for main door, kitchen vastu correction, bedroom vastu tips, vastu for shop and office, construction company Moradabad, Space Build Moradabad, vastu expert near me, Moradabad vastu correction, Moradabad me vastu consultant, ghar ka vastu sudhar, vastu dosh nivaran Moradabad, ghar renovation Moradabad, vastu shastra expert Moradabad, makan vastu correction, vastu ke hisab se ghar banwana, Moradabad me ghar ki renovation, dukan ka vastu, office ka vastu sahi karna, vastu dosh kaise thik kare, ghar ka naksha vastu ke anusar, Moradabad vastu sudhar company, ghar todphod ke bina vastu correction, purane ghar ka vastu correction, vastu remedies ghar ke liye, Space Build Moradabad vastu seva, vastu, vastu correction, vastu renovation, Moradabad construction company, vastu consultant, home renovation, interior design, vastu shastra, Space Build, residential construction Moradabad, commercial renovation, vastu dosh remedies, structural correction, real estate Moradabad, architecture Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },
  openGraph: {
    title: "Vastu Correction & Renovation Services in Moradabad | Space Build",
    description:
      "Looking for expert Vastu correction and renovation services in Moradabad? Space Build offers professional Vastu consultation, home renovation, and structural correction solutions for homes, offices, and commercial spaces.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Correction and Renovation Services in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Correction & Renovation Services in Moradabad | Space Build",
    description:
      "Looking for expert Vastu correction and renovation services in Moradabad? Space Build offers professional Vastu consultation, home renovation, and structural correction solutions for homes, offices, and commercial spaces.",
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