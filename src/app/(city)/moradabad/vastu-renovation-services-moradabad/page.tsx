import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Vastu Renovation Services in Moradabad | Space Build – Trusted Vastu Experts",
  description:
    "Looking for professional Vastu renovation services in Moradabad? Space Build offers expert Vastu correction, home remodeling, and consultation services. Visit https://www.spacebuild.co.in/ to know more.",
  keywords:
    "vastu renovation services moradabad, vastu correction services, vastu consultant moradabad, home renovation services moradabad, vastu remodeling company, vastu dosh correction, residential vastu services, vastu construction company moradabad, space build moradabad, vastu home makeover, vastu based interior renovation, vastu remedies services, house renovation experts moradabad, vastu civil work moradabad, vastu sudhar seva, ghar renovation seva moradabad, vastu dosh theek karne ki seva, vastu ke anusar ghar banwane wali company, ghar ka vastu sudharna, vastu nirman company moradabad, space build moradabad seva, vastu interior renovation, vastu upay seva, ghar renovation expert moradabad, vastu civil kaam moradabad, ghar ka vastu check karwana, vastu services, renovation services, moradabad, vastu correction, space build, home remodeling company, vastu construction, residential renovation, vastu dosh nivaran seva",
  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },
  openGraph: {
    title:
      "Vastu Renovation Services in Moradabad | Space Build – Trusted Vastu Experts",
    description:
      "Looking for professional Vastu renovation services in Moradabad? Space Build offers expert Vastu correction, home remodeling, and consultation services.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Renovation Services in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vastu Renovation Services in Moradabad | Space Build – Trusted Vastu Experts",
    description:
      "Looking for professional Vastu renovation services in Moradabad? Space Build offers expert Vastu correction, home remodeling, and consultation services.",
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