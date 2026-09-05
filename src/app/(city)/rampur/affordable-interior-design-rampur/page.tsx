import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Affordable Interior Design in Rampur | Space Build Moradabad",

  description:
    "Looking for affordable interior design in Rampur? Space Build Moradabad offers budget-friendly home & office interiors without compromising quality. Visit https://www.spacebuild.co.in/",

  keywords:
    "affordable interior design Rampur, budget interior designer Rampur, low cost interior design Rampur, cheap interior designer Rampur, affordable home interior Rampur, affordable office interior Rampur, budget friendly interior design Rampur, economical interior designer Rampur, affordable interior design company Rampur, affordable interior designer near me Rampur, budget home makeover Rampur, affordable modular kitchen Rampur, affordable false ceiling Rampur, Space Build Moradabad, interior designer Moradabad, low budget interior design ideas Rampur, pocket friendly interior design Rampur, affordable interior design packages Rampur, value for money interior designer Rampur, best affordable interior design UP, Rampur mein sasta interior designer, affordable interior design Rampur mein, kam budget mein interior design Rampur, sasta aur best interior designer Rampur, budget mein ghar ka interior Rampur, kam kharche mein interior design Rampur, affordable modular kitchen Rampur, sasta false ceiling Rampur, Rampur mein budget friendly interior design, Space Build Moradabad affordable interior, pocket friendly interior designer Rampur, ghar ka interior kam paise mein Rampur, best sasta interior design company Rampur, Moradabad ka sasta interior designer, affordable home decor Rampur",

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
    title: "Affordable Interior Design in Rampur | Space Build Moradabad",
    description:
      "Looking for affordable interior design in Rampur? Space Build Moradabad offers budget-friendly home and office interiors without compromising quality.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Affordable Interior Design in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Affordable Interior Design in Rampur | Space Build Moradabad",
    description:
      "Budget-friendly home and office interior design services in Rampur by Space Build Moradabad without compromising quality.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Affordable Interior Design in Rampur | Space Build Moradabad",
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