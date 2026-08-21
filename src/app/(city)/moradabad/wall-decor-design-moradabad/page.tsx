import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Wall Decor Design in Moradabad | Space Build – Creative Wall Design Solutions",
  description:
    "Transform your space with creative wall decor design solutions in Moradabad. From accent walls to 3D panels, textured finishes, and custom paneling, Space Build brings walls to life.",
  keywords:
    "wall decor design Moradabad, wall design ideas, accent wall Moradabad, 3D wall panels, wall texture design, Space Build Moradabad, living room wall decor, bedroom wall design ideas, wallpaper design Moradabad, wall art and paneling",
  alternates: {
    canonical: "https://www.spacebuild.co.in/wall-decor-design-moradabad",
  },
  openGraph: {
    title: "Wall Decor Design in Moradabad | Space Build – Creative Wall Design Solutions",
    description:
      "Transform your space with creative wall decor design solutions in Moradabad. From accent walls to 3D panels, textured finishes, and custom paneling, Space Build brings walls to life.",
    url: "https://www.spacebuild.co.in/wall-decor-design-moradabad",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Wall Decor Design in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wall Decor Design in Moradabad | Space Build – Creative Wall Design Solutions",
    description:
      "Transform your space with creative wall decor design solutions in Moradabad. From accent walls to 3D panels, textured finishes, and custom paneling, Space Build brings walls to life.",
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