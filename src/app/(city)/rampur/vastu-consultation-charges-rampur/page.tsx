import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Consultation Charges in Rampur | Space Build Moradabad",

  description:
    "Wondering about Vastu consultation charges in Rampur? Space Build Moradabad offers transparent, fair-priced Vastu consultancy for homes and offices. Visit https://www.spacebuild.co.in/.",

  keywords:
    "Vastu consultation charges Rampur, Vastu consultant fees Rampur, Vastu consultancy cost Moradabad, affordable Vastu expert Rampur, Vastu consultation price, home Vastu charges, office Vastu consultation fees, Vastu Shastra consultancy rates, Vastu expert cost near me, Space Build Moradabad, Vastu site visit charges, Vastu consultation packages, रामपुर में वास्तु परामर्श शुल्क, वास्तु सलाहकार फीस रामपुर, वास्तु परामर्श लागत मुरादाबाद, किफायती वास्तु विशेषज्ञ रामपुर, वास्तु परामर्श कीमत, घर वास्तु शुल्क, ऑफिस वास्तु परामर्श फीस, वास्तु शास्त्र परामर्श दरें, स्पेस बिल्ड मुरादाबाद, वास्तु साइट विजिट शुल्क, Rampur me Vastu consultation charges, Vastu consultant fees Rampur, Vastu consultancy cost Moradabad me, affordable Vastu expert Rampur, Vastu consultation ki price, ghar Vastu charges, office Vastu consultation fees, Vastu Shastra consultancy rates Rampur, Space Build Moradabad Vastu fees, Vastu site visit charges Rampur",

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
    title: "Vastu Consultation Charges in Rampur | Space Build Moradabad",
    description:
      "Transparent and fair Vastu consultation charges for homes, offices, and commercial spaces in Rampur by Space Build Moradabad.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Consultation Charges in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vastu Consultation Charges in Rampur | Space Build Moradabad",
    description:
      "Get clarity on Vastu consultation charges in Rampur with Space Build Moradabad. Book a consultation today.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Vastu Consultation Charges in Rampur | Space Build Moradabad",
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