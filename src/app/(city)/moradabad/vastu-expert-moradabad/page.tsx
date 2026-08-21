import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best Vastu Expert in Moradabad | Space Build",
  description:
    "Consult the best Vastu Expert in Moradabad at Space Build for residential, commercial, office, factory, and plot Vastu guidance. Get practical Vastu solutions to enhance positivity, prosperity, and balanced living.",
  keywords:
    "vastu expert moradabad, best vastu expert in moradabad, vastu consultant moradabad, vastu shastra expert moradabad, home vastu expert moradabad, office vastu expert moradabad, commercial vastu expert moradabad, factory vastu expert moradabad, plot vastu expert moradabad, space build vastu expert",
  alternates: {
    canonical: "https://www.spacebuild.co.in/vastu-expert-moradabad",
  },
  openGraph: {
    title: "Best Vastu Expert in Moradabad | Space Build",
    description:
      "Space Build provides professional Vastu expert services in Moradabad for homes, offices, shops, factories, apartments, and commercial properties with practical Vastu solutions.",
    url: "https://www.spacebuild.co.in/vastu-expert-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Best Vastu Expert in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Vastu Expert in Moradabad | Space Build",
    description:
      "Get expert Vastu consultation in Moradabad from Space Build for residential and commercial properties. Create harmonious, positive, and prosperous spaces.",
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