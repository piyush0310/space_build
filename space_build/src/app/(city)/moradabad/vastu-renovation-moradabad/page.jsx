import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Vastu Renovation in Moradabad | Space Build",
  description:
    "Space Build offers expert Vastu renovation services in Moradabad to correct Vastu doshas in homes & offices without demolition. Improve energy flow, health & prosperity with expert guidance.",
  keywords:
    "vastu renovation moradabad, vastu dosh correction moradabad, vastu remedies for home, vastu renovation services, space build moradabad, vastu consultant moradabad, home renovation as per vastu, office renovation vastu, vastu correction without demolition, vastu construction company moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-renovation-moradabad",
  },
  openGraph: {
    title: "Vastu Renovation in Moradabad | Space Build",
    description:
      "Space Build offers expert Vastu renovation services in Moradabad to correct Vastu doshas in homes & offices without demolition. Improve energy flow, health & prosperity with expert guidance.",
    url: "https://www.spacebuild.co.in/vastu-renovation-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Renovation in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Renovation in Moradabad | Space Build",
    description:
      "Space Build offers expert Vastu renovation services in Moradabad to correct Vastu doshas in homes & offices without demolition. Improve energy flow, health & prosperity with expert guidance.",
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