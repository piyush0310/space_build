import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "3D House Design in Kashipur | Space Build",

  description:
    "Looking for realistic 3D house design in Kashipur? Space Build creates lifelike 3D elevations, walkthroughs, and interior views to help you visualize your dream home before construction.",

  keywords:
    "3D house design in Kashipur, 3D elevation design Kashipur, 3D house elevation Kashipur, 3D home design Kashipur, house 3D view Kashipur, front elevation design Kashipur, 3D floor plan Kashipur, 3D walkthrough Kashipur, exterior elevation design Kashipur, modern house elevation Kashipur, best 3D designer near me, 3D architectural design Kashipur, home elevation designer Kashipur, Vastu 3D house design, duplex 3D elevation Kashipur, villa 3D design Kashipur, 3D rendering house Kashipur, house design company Kashipur, affordable 3D house design Kashipur, Space Build Kashipur, 3D interior design Kashipur, custom home elevation Kashipur",

  alternates: {
    canonical: "https://www.spacebuild.co.in/3d-house-design-kashipur",
  },

  openGraph: {
    title: "3D House Design in Kashipur | Space Build",
    description:
      "Looking for realistic 3D house design in Kashipur? Space Build creates lifelike 3D elevations, walkthroughs, and interior views to help you visualize your dream home before construction.",
    url: "https://www.spacebuild.co.in/3d-house-design-kashipur",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "3D House Design in Kashipur - Space Build",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "3D House Design in Kashipur | Space Build",
    description:
      "Space Build creates realistic 3D house designs, elevations, walkthroughs, exterior views, and interior visualizations in Kashipur.",
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