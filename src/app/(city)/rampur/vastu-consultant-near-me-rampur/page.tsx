import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Consultant Near Me in Rampur | Space Build Moradabad",

  description:
    'Searching for a "Vastu consultant near me" in Rampur? Space Build Moradabad provides on-site and online Vastu consultation for homes, offices, and shops. Visit https://www.spacebuild.co.in/ to book your consultation.',

  keywords:
    "Vastu consultant near me, Vastu consultant near me Rampur, local Vastu expert Rampur, Vastu consultant Rampur contact number, nearby Vastu consultancy, Vastu Shastra expert near me, home Vastu consultant near me, office Vastu consultant Rampur, Vastu consultant Moradabad, best Vastu consultant nearby, Space Build Moradabad, Vastu site visit Rampur, on-site Vastu consultation, affordable Vastu consultant Rampur, trusted Vastu consultant near me, मेरे पास वास्तु सलाहकार, रामपुर में वास्तु सलाहकार, नजदीकी वास्तु विशेषज्ञ रामपुर, वास्तु शास्त्र सलाहकार संपर्क नंबर, घर के पास वास्तु परामर्श, वास्तु शास्त्र विशेषज्ञ रामपुर, स्पेस बिल्ड मुरादाबाद, वास्तु सलाहकार मुरादाबाद, वास्तु शास्त्र सेवा रामपुर, विश्वसनीय वास्तु सलाहकार, mere paas Vastu consultant, Rampur me Vastu consultant near me, nazdiki Vastu expert Rampur, Vastu salahkar Rampur contact number, ghar ke paas Vastu consultation, Vastu Shastra expert Rampur me, Space Build Moradabad Vastu consultant, Vastu consultant Moradabad me, Rampur ke liye Vastu sewa, bharosemand Vastu consultant near me",

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
    title: "Vastu Consultant Near Me in Rampur | Space Build Moradabad",
    description:
      "On-site and online Vastu Shastra consultation near Rampur for homes, offices, and commercial spaces, by Space Build Moradabad.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build Moradabad",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Consultant Near Me in Rampur - Space Build Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Vastu Consultant Near Me in Rampur | Space Build Moradabad",
    description:
      "Find a trusted, nearby Vastu Shastra consultant in Rampur with Space Build Moradabad. Book your site visit today.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    title: "Vastu Consultant Near Me in Rampur | Space Build Moradabad",
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