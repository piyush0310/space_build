import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu-Based Construction in Rampur | Space Build Moradabad",

  description:
    "Planning Vastu-based construction in Rampur? Space Build Moradabad builds homes & offices following authentic Vastu Shastra guidelines. Visit https://www.spacebuild.co.in/",

  keywords:
    "vastu based construction Rampur, vastu construction guidelines Rampur, vastu shastra house plan Rampur, vastu based home design Rampur, vastu construction process Rampur, vastu building rules Rampur, vastu based floor plan Rampur, vastu construction services Rampur, vastu based house construction Rampur, vastu principles construction Rampur, vastu construction expert Rampur, vastu based architecture Rampur, Space Build Moradabad, construction company Moradabad, vastu based commercial construction Rampur, vastu based plot construction Rampur, vastu building techniques Rampur, vastu based residential construction Rampur, vastu construction tips Rampur, top construction company Rampur, Rampur mein vastu based construction, vastu ke niyam ke anusar ghar banana Rampur, vastu shastra ke hisab se construction Rampur, vastu based house plan Rampur, vastu ke anusar naksha Rampur, vastu construction process Rampur, vastu ke rules follow karke ghar banana Rampur, vastu based ghar ka design Rampur, Rampur mein vastu ke hisab se nirman, Space Build Moradabad vastu based construction, vastu shastra ke anusar office banana Rampur, vastu ke tips construction Rampur, ghar ka naksha vastu ke hisab se Rampur, Moradabad vastu based building company, vastu ke niyam Rampur construction",

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
    title: "Vastu-Based Construction in Rampur | Space Build Moradabad",
    description:
      "Planning Vastu-based construction in Rampur? Space Build Moradabad builds homes and offices following authentic Vastu Shastra guidelines.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu-Based Construction in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vastu-Based Construction in Rampur | Space Build Moradabad",
    description:
      "Vastu-based home, office, and commercial construction services in Rampur by Space Build Moradabad.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Vastu-Based Construction in Rampur | Space Build Moradabad",
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