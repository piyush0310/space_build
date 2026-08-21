import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Consultant in Moradabad | Space Build – Expert Vastu Solutions",
  description:
    "Looking for a trusted Vastu Consultant in Moradabad? Space Build offers expert residential, commercial & industrial Vastu consultation for homes, offices & plots. Book now!",
  keywords:
    "vastu consultant in moradabad, vastu expert moradabad, vastu shastra consultant, home vastu consultant moradabad, office vastu consultant, best vastu consultant near me, vastu consultancy services, space build moradabad, vastu for plot, vastu for construction, commercial vastu consultant, industrial vastu expert",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-consultant-in-moradabad",
  },
  openGraph: {
    title: "Vastu Consultant in Moradabad | Space Build – Expert Vastu Solutions",
    description:
      "Looking for a trusted Vastu Consultant in Moradabad? Space Build offers expert residential, commercial & industrial Vastu consultation for homes, offices & plots. Book now!",
    url: "https://www.spacebuild.co.in/vastu-consultant-in-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Consultant in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Consultant in Moradabad | Space Build – Expert Vastu Solutions",
    description:
      "Looking for a trusted Vastu Consultant in Moradabad? Space Build offers expert residential, commercial & industrial Vastu consultation for homes, offices & plots. Book now!",
    images: [
      "https://www.spacebuild.co.in/spacebuild_logo.jpg",
    ],
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