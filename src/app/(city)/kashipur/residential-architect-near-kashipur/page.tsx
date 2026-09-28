import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Residential Architect Near Kashipur | Space Build",
  description:
    "Looking for a residential architect near Kashipur? Space Build offers Vastu-based home design, 3D elevation, interiors and construction guidance. Call today.",
  keywords:
    "residential architect near Kashipur, residential architect in Kashipur, architect near Kashipur, home architect Kashipur, house design architect Kashipur, Vastu architect Kashipur, Vastu based home design, residential architecture services, home construction guidance, house planning Kashipur, 3D elevation design, villa and bungalow design, duplex house design, farmhouse design Kashipur, home renovation architect, interior designer near Kashipur, modular kitchen Kashipur, Vastu consultant near Kashipur, Vastu construction services, custom home design, architect and interior designer, project management consultation, best architect near Kashipur, Space Build architects",
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/residential-architect-near-kashipur",
  },
  openGraph: {
    title: "Residential Architect Near Kashipur | Space Build",
    description:
      "Looking for a residential architect near Kashipur? Space Build offers Vastu-based home design, 3D elevation, interiors and construction guidance. Call today.",
    url: "https://www.spacebuild.co.in/residential-architect-near-kashipur",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Residential Architect Near Kashipur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Architect Near Kashipur | Space Build",
    description:
      "Looking for a residential architect near Kashipur? Space Build offers Vastu-based home design, 3D elevation, interiors and construction guidance. Call today.",
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