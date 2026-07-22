import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu Correction Services in Moradabad | Space Build",
  description:
    "Space Build offers professional Vastu correction services in Moradabad for homes & offices. Fix Vastu doshas without demolition and restore positive energy, health & prosperity.",
  keywords:
    "vastu correction services moradabad, vastu dosh correction, vastu remedies moradabad, vastu consultant moradabad, space build moradabad, vastu correction without demolition, home vastu correction, office vastu correction, vastu dosh nivaran services, vastu construction company moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-correction-services-moradabad",
  },
  openGraph: {
    title: "Vastu Correction Services in Moradabad | Space Build",
    description:
      "Space Build offers professional Vastu correction services in Moradabad for homes & offices. Fix Vastu doshas without demolition and restore positive energy, health & prosperity.",
    url: "https://www.spacebuild.co.in/vastu-correction-services-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Correction Services in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Correction Services in Moradabad | Space Build",
    description:
      "Space Build offers professional Vastu correction services in Moradabad for homes & offices. Fix Vastu doshas without demolition and restore positive energy, health & prosperity.",
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