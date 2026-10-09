import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Architect Services in Kashipur | Spacebuild – Design, Build, Deliver",

  description:
    "Explore complete architect services in Kashipur with Spacebuild — residential, commercial, interior, and structural design solutions tailored to your needs and budget.",

  keywords:
    "architect services Kashipur, architecture firm Kashipur, residential architect Kashipur, commercial architect Kashipur, interior design services Kashipur, structural design Kashipur, Spacebuild Kashipur, home design services Kashipur, building design company Kashipur, architectural consultancy Kashipur, best architecture firm Kashipur, construction design services Kashipur, 3D architectural design Kashipur, Vastu architect Kashipur, industrial architect Kashipur, renovation services Kashipur, turnkey construction Kashipur, civil design Kashipur, Uttarakhand architecture services, Udham Singh Nagar architect services, affordable architect services Kashipur, custom home architect Kashipur",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Spacebuild",
    },
  ],

  alternates: {
    canonical: "https://www.spacebuild.co.in/kashipur/architect-services-in-kashipur",
  },

  openGraph: {
    title: "Architect Services in Kashipur | Spacebuild – Design, Build, Deliver",
    description:
      "Explore complete architect services in Kashipur with Spacebuild — residential, commercial, interior, and structural design solutions tailored to your needs and budget.",
    url: "https://www.spacebuild.co.in/kashipur/architect-services-in-kashipur",
    siteName: "Spacebuild",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Architect Services in Kashipur by Spacebuild",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Architect Services in Kashipur | Spacebuild – Design, Build, Deliver",
    description:
      "Explore residential, commercial, interior, and structural architect services in Kashipur with Spacebuild.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Architect Services in Kashipur | Spacebuild – Design, Build, Deliver",
    "geo.placename": "Kashipur, Uttarakhand",
    "geo.region": "IN-UK",
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