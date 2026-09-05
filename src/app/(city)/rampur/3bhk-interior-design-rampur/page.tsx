import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "3BHK Interior Design in Rampur | Space Build Moradabad",

  description:
    "Looking for 3BHK interior design in Rampur? Space Build Moradabad creates spacious, elegant & functional 3BHK home interiors. Visit https://www.spacebuild.co.in/",

  keywords:
    "3bhk interior design Rampur, 3bhk home interior Rampur, 3bhk flat interior designer Rampur, 3bhk interior design cost Rampur, 3bhk apartment interior Rampur, 3bhk modular kitchen Rampur, 3bhk living room design Rampur, 3bhk bedroom design Rampur, best interior designer for 3bhk Rampur, luxury 3bhk interior Rampur, home interior designer Rampur, 3bhk full home interior Rampur, Space Build Moradabad, interior designer Moradabad, 3bhk flat design ideas Rampur, 3bhk villa interior design Rampur, 3bhk turnkey interior Rampur, false ceiling 3bhk Rampur, wardrobe design 3bhk Rampur, premium home interior Rampur, 3bhk interior design Rampur mein, 3bhk ghar ka interior design Rampur, 3bhk flat ka interior Rampur, 3bhk makan interior design Rampur, best 3bhk interior designer Rampur, 3bhk interior design ka kharcha Rampur, 3bhk modular kitchen design Rampur, 3bhk bedroom interior Rampur, 3bhk living room ka design Rampur, Rampur mein best home interior designer, Space Build Moradabad 3bhk interior, bade flat ka interior design Rampur, 3bhk ghar sajane ka idea Rampur, luxury interior design Rampur, Moradabad interior designer 3bhk flat",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Space Build Moradabad",
    },
  ],

  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },

  openGraph: {
    title: "3BHK Interior Design in Rampur | Space Build Moradabad",
    description:
      "Looking for 3BHK interior design in Rampur? Space Build Moradabad creates spacious, elegant, and functional 3BHK home interiors.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "3BHK Interior Design in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "3BHK Interior Design in Rampur | Space Build Moradabad",
    description:
      "Spacious, elegant, and functional 3BHK home interior design services in Rampur by Space Build Moradabad.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "3BHK Interior Design in Rampur | Space Build Moradabad",
    "geo.placename": "Rampur, Uttar Pradesh",
    "geo.region": "IN-UP",
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