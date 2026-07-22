import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu Home Renovation Services in Moradabad | Space Build",
  description:
    "Space Build offers professional Vastu home renovation services in Moradabad to fix Vastu doshas in your house. Improve harmony, health & prosperity with expert home correction solutions.",
  keywords:
    "vastu home renovation moradabad, home renovation services moradabad, vastu house correction, vastu remedies for home, space build moradabad, vastu consultant for home, house renovation as per vastu, vastu dosh nivaran, home vastu correction services, vastu construction company moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-home-renovation-moradabad",
  },
  openGraph: {
    title: "Vastu Home Renovation Services in Moradabad | Space Build",
    description:
      "Space Build offers professional Vastu home renovation services in Moradabad to fix Vastu doshas in your house. Improve harmony, health & prosperity with expert home correction solutions.",
    url: "https://www.spacebuild.co.in/vastu-home-renovation-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Home Renovation Services in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Home Renovation Services in Moradabad | Space Build",
    description:
      "Space Build offers professional Vastu home renovation services in Moradabad to fix Vastu doshas in your house. Improve harmony, health & prosperity with expert home correction solutions.",
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