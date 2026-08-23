import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Renovation for Flat in Moradabad 2026 | Space Build",

  description:
    "Planning Vastu renovation for your flat or apartment in Moradabad? Get practical tips, layout solutions, and expert guidance from Space Build. Visit spacebuild.co.in for a free consultation.",

  keywords: [
    // English
    "vastu renovation for flat Moradabad",
    "flat vastu Moradabad",
    "apartment vastu renovation",
    "vastu tips for flat",
    "vastu for apartment Moradabad",
    "best vastu consultant for flat Moradabad",
    "Space Build Moradabad",
    "small flat vastu remedies",
    "vastu for rented flat",
    "vastu compliant apartment design",
    "2bhk 3bhk vastu renovation",
    "flat interior vastu Moradabad",

    // Hindi
    "मुरादाबाद में फ्लैट वास्तु रेनोवेशन",
    "फ्लैट के लिए वास्तु टिप्स",
    "अपार्टमेंट वास्तु मुरादाबाद",
    "फ्लैट वास्तु उपाय",
    "किराए के फ्लैट के लिए वास्तु",
    "मुरादाबाद में 2बीएचके 3बीएचके वास्तु",

    // Hinglish
    "Moradabad mein flat vastu renovation",
    "flat ke liye vastu tips",
    "apartment vastu Moradabad",
    "flat vastu remedies chhote ghar ke liye",
    "kirae ke flat ka vastu",
    "2bhk 3bhk flat vastu Moradabad",
    "vastu consultant for flat Moradabad",
    "flat interior renovation vastu ke sath",
  ].join(", "),

  authors: [{ name: "Space Build Moradabad" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },

  openGraph: {
    title: "Vastu Renovation for Flat in Moradabad | Space Build",
    description:
      "Complete guide to Vastu-compliant flat and apartment renovation, tips, and solutions in Moradabad by Space Build.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    locale: "en_IN",
    type: "article",
  },

  other: {
    language: "en-IN, hi-IN",
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