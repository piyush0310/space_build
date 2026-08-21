import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Home Vastu Renovation Tips & Guide | Space Build",
  description:
    "Discover expert home vastu renovation tips from Space Build. Learn Vastu rules for kitchen, bedroom, entrance, pooja room & more to bring positivity and balance to your home.",
  keywords:
    "home vastu renovation, vastu tips for home renovation, vastu shastra renovation, vastu for house renovation, vastu compliant home, vastu remedies for home, kitchen vastu tips, bedroom vastu tips, pooja room vastu, vastu for main entrance, home renovation vastu guide, Space Build renovation",
  alternates: {
    canonical: "https://www.spacebuild.co.in/home-vastu-renovation",
  },
  openGraph: {
    title: "Home Vastu Renovation Tips & Guide | Space Build",
    description:
      "Discover expert home vastu renovation tips from Space Build. Learn Vastu rules for kitchen, bedroom, entrance, pooja room & more to bring positivity and balance to your home.",
    url: "https://www.spacebuild.co.in/home-vastu-renovation",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Home Vastu Renovation Tips & Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Vastu Renovation Tips & Guide | Space Build",
    description:
      "Discover expert home vastu renovation tips from Space Build. Learn Vastu rules for kitchen, bedroom, entrance, pooja room & more to bring positivity and balance to your home.",
    images: [
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782801421/IMG_20260630_112901.jpg_wnfyv5.jpg",
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