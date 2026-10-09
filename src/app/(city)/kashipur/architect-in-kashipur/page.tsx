import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Architect in Kashipur | Vastu-Based Design – Space Build",
  description:
    "Looking for an architect in Kashipur? Space Build offers house design, commercial planning, interiors and Vastu-aligned architecture. Book a consultation today.",
  keywords:
    "architect in Kashipur, best architect in Kashipur, top architect in Kashipur, architect near me Kashipur, house design in Kashipur, house map designer Kashipur, residential architect Kashipur, commercial architect Kashipur, industrial architect Kashipur, Vastu architect in Kashipur, Vastu consultant Kashipur, interior designer in Kashipur, modular kitchen Kashipur, home construction planning Kashipur, building plan Kashipur, 3D elevation design Kashipur, architectural services Kashipur, renovation architect Kashipur, villa design Kashipur, shop and showroom design Kashipur, warehouse planning Kashipur, architect in Uttarakhand, architect in Udham Singh Nagar, Space Build architects, Vastu construction consultation",
  alternates: {
    canonical: "https://www.spacebuild.co.in/kashipur/architect-in-kashipur",
  },
  openGraph: {
    title: "Architect in Kashipur | Vastu-Based Design – Space Build",
    description:
      "Looking for an architect in Kashipur? Space Build offers house design, commercial planning, interiors and Vastu-aligned architecture. Book a consultation today.",
    url: "https://www.spacebuild.co.in/kashipur/architect-in-kashipur",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Architect in Kashipur - Space Build",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Architect in Kashipur | Vastu-Based Design – Space Build",
    description:
      "Looking for an architect in Kashipur? Space Build offers house design, commercial planning, interiors and Vastu-aligned architecture. Book a consultation today.",
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