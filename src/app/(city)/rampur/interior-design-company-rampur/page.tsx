import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";


export const metadata = {
  title: "Best Interior Design Company in Rampur | Space Build Moradabad",

  description:
    "Space Build Moradabad is a trusted interior design company serving Rampur with home, office & commercial interior solutions. Modern designs, quality work, affordable pricing. Visit spacebuild.co.in",

  keywords:
    "interior design company in Rampur, best interior designer Rampur, home interior design Rampur, office interior design Rampur, Space Build Moradabad, interior designers near Rampur, modular kitchen Rampur, false ceiling design Rampur, affordable interior designer Rampur, residential interior design Rampur, commercial interior design Rampur, interior decoration Rampur, Rampur me interior designer, Rampur ki best interior design company, ghar ka interior design Rampur, Rampur me modular kitchen designer, office interior design Rampur me, Space Build Moradabad interior company, Rampur ke liye affordable interior designer, ghar sajane wali company Rampur, interior decoration Rampur me, Moradabad se Rampur interior services, sasta interior designer Rampur, best ghar design company Rampur",

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
    title: "Best Interior Design Company in Rampur | Space Build Moradabad",
    description:
      "Trusted interior design company in Rampur offering home, office & commercial interior solutions. Modern designs, quality workmanship, affordable pricing.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Best Interior Design Company in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Interior Design Company in Rampur | Space Build Moradabad",
    description:
      "Space Build Moradabad - Trusted interior design company serving Rampur with home, office & commercial interior solutions.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Best Interior Design Company in Rampur | Space Build Moradabad",
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