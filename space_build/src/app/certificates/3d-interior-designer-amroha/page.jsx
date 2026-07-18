import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "3D Interior Designer in Amroha | Vastu-Aligned Interior Design – Space Build",
  description:
    "Space Build offers 3D interior design in Amroha with Vastu-aligned planning, modular kitchens, renovation & complete construction solutions. Book a free consultation today.",
  keywords:
    "3D interior designer in Amroha, interior design company Amroha, Vastu interior designer Amroha, home interior designer Amroha, modular kitchen design Amroha, Vastu construction Amroha, interior renovation Amroha, best interior designer near Amroha, Space Build Amroha, MahaVastu expert Amroha",
  alternates: {
    canonical: "https://https://www.spacebuild.co.in/3d-interior-designer-in-amroha",
  },
  openGraph: {
    title: "3D Interior Designer in Amroha | Vastu-Aligned Interior Design – Space Build",
    description:
      "Space Build offers 3D interior design in Amroha with Vastu-aligned planning, modular kitchens, renovation & complete construction solutions. Book a free consultation today.",
    url: "https://https://www.spacebuild.co.in/3d-interior-designer-in-amroha",
    siteName: "Space build",
    images: [
      {
        url: "https://https://www.spacebuild.co.in/zentrix_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space build Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Interior Designer in Amroha | Vastu-Aligned Interior Design – Space Build",
    description:
      "Space Build offers 3D interior design in Amroha with Vastu-aligned planning, modular kitchens, renovation & complete construction solutions. Book a free consultation today.",
    images: ["https://res.cloudinary.com/dv9tivfvq/image/upload/v1782801421/IMG_20260630_112901.jpg_wnfyv5.jpg"],
  },
  icons: {
    icon: "/favicon-v2.ico",
  },
};

export default function Page() {
  return (
    <>
      <Banner />
      <Content/>
      <Portfolio />
    </>
  );
}