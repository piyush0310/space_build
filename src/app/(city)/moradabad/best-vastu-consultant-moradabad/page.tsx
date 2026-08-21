import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best Vastu Consultant in Moradabad | Space Build",
  description:
    "Searching for the Best Vastu Consultant in Moradabad? Space Build provides expert Vastu consultation for homes, offices, shops, factories, apartments, plots, and commercial properties to create balanced, positive, and prosperous spaces.",
  keywords:
    "best vastu consultant moradabad, best vastu consultant in moradabad, vastu consultant moradabad, vastu expert moradabad, vastu shastra consultant moradabad, home vastu consultant moradabad, office vastu consultant moradabad, commercial vastu consultant moradabad, plot vastu consultant moradabad, factory vastu consultant moradabad, Space Build vastu consultant",
  alternates: {
    canonical: "https://www.spacebuild.co.in/best-vastu-consultant-moradabad",
  },
  openGraph: {
    title: "Best Vastu Consultant in Moradabad | Space Build",
    description:
      "Space Build offers professional Vastu consultation in Moradabad for residential and commercial properties. Get practical Vastu solutions for better harmony, health, and prosperity.",
    url: "https://www.spacebuild.co.in/best-vastu-consultant-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Best Vastu Consultant in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Vastu Consultant in Moradabad | Space Build",
    description:
      "Consult the Best Vastu Consultant in Moradabad with Space Build for homes, offices, plots, shops, and commercial spaces.",
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