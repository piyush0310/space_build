import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Home Renovation in Moradabad | Expert Vastu Tips – Space Build",
  description:
    "Planning a home renovation in Moradabad? Learn expert Vastu Shastra tips for every room and get professional Vastu-compliant renovation services from Space Build Moradabad. Visit https://www.spacebuild.co.in/",
  keywords:
    "vastu home renovation moradabad, vastu tips for home renovation, vastu shastra moradabad, home renovation company moradabad, vastu consultant moradabad, best construction company moradabad, vastu compliant house design, home interior renovation moradabad, space build moradabad, vastu for main door, vastu for kitchen, vastu for bedroom, vastu for pooja room, home remodeling moradabad, vastu for staircase, residential renovation moradabad, vastu dosh remedies, house extension vastu, vastu for bathroom, five elements vastu, vastu ghar renovation moradabad, ghar ka vastu tips, vastu shastra ke niyam, moradabad me ghar banane wali company, ghar ki disha vastu, vastu anusar ghar ka naksha, rasoi ka vastu, sona kamra vastu, pooja ghar vastu, ghar renovation kaise kare, best builder moradabad, ghar ka vastu dosh, vastu ke anusar ghar banwana, seedhi ka vastu, snanghar vastu, mukhya dwar vastu, ghar ke panch tatva, vastu dosh nivaran upay, ghar naveenikaran moradabad, vastu, home renovation, moradabad, house renovation tips, interior design moradabad, construction company, home remodeling, vastu dosh nivaran, residential renovation",
  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },
  openGraph: {
    title:
      "Vastu Home Renovation in Moradabad | Expert Vastu Tips – Space Build",
    description:
      "Planning a home renovation in Moradabad? Learn expert Vastu Shastra tips for every room and get professional Vastu-compliant renovation services from Space Build Moradabad.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Home Renovation in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vastu Home Renovation in Moradabad | Expert Vastu Tips – Space Build",
    description:
      "Planning a home renovation in Moradabad? Learn expert Vastu Shastra tips for every room and get professional Vastu-compliant renovation services from Space Build Moradabad.",
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