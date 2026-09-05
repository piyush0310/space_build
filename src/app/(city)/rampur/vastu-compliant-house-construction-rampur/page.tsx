import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Compliant House Construction in Rampur | Space Build Moradabad",

  description:
    "Build your dream home the right way with Vastu compliant house construction in Rampur by Space Build Moradabad. Our expert architects and Vastu consultants ensure your new home is designed for health, wealth, and happiness. Contact us for a free consultation.",

  keywords:
    "vastu compliant house construction Rampur, vastu house construction, vastu compliant home Rampur, new house construction as per vastu, vastu based house design, vastu construction company Rampur, house construction with vastu, vastu architect Rampur, vastu home builders, Space Build Moradabad, Rampur mein vastu ke anusar ghar nirman, vastu compliant ghar banwana, naya ghar vastu se banana, vastu ke hisab se ghar ka naksha, ghar nirman company Rampur, vastu architect Rampur, vastu shastra ghar nirman, ghar banwane mein vastu, vastu ke niyam se ghar, ghar nirman seva Moradabad",

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
    title: "Vastu Compliant House Construction in Rampur | Space Build Moradabad",
    description:
      "Build your dream home the right way with Vastu compliant house construction in Rampur by Space Build Moradabad. Our expert architects and Vastu consultants ensure your new home is designed for health, wealth, and happiness.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Compliant House Construction in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vastu Compliant House Construction in Rampur | Space Build Moradabad",
    description:
      "Build your dream home the right way with Vastu compliant house construction in Rampur by Space Build Moradabad. Expert architects and Vastu consultants for health, wealth, and happiness.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Vastu Compliant House Construction in Rampur | Space Build Moradabad",
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