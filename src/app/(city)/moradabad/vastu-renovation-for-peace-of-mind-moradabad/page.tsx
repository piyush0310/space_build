import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Renovation for Peace of Mind in Moradabad 2026 | Space Build",

  description:
    "Looking to create a calmer, more peaceful home in Moradabad? Explore traditional Vastu renovation ideas for mental peace and harmony from Space Build. Visit spacebuild.co.in for a consultation.",

  keywords: [
    // English
    "vastu renovation for peace of mind Moradabad",
    "vastu for mental peace",
    "vastu tips for calm home",
    "shanti vastu Moradabad",
    "vastu remedies for stress",
    "best vastu consultant Moradabad",
    "Space Build Moradabad",
    "vastu for family harmony",
    "vastu for positive energy home",
    "meditation room vastu",
    "vastu for anxiety relief home",
    "vastu correction for peaceful living",

    // Hindi
    "मुरादाबाद में मानसिक शांति के लिए वास्तु रेनोवेशन",
    "घर में शांति के लिए वास्तु उपाय",
    "तनाव मुक्ति वास्तु",
    "पारिवारिक सद्भाव वास्तु",
    "मुरादाबाद में सकारात्मक ऊर्जा वास्तु",
    "ध्यान कक्ष वास्तु टिप्स",

    // Hinglish
    "Moradabad mein mansik shanti ke liye vastu renovation",
    "ghar mein shanti ke liye vastu upay",
    "tension aur stress ke liye vastu",
    "ghar ka jhagda khatam karne ka vastu",
    "positive energy ghar mein lane ka vastu",
    "meditation room vastu tips Moradabad",
    "vastu consultant for peace of mind Moradabad",
    "ghar mein sukoon ke liye vastu sudhar",
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
    title: "Vastu Renovation for Peace of Mind in Moradabad | Space Build",
    description:
      "Traditional Vastu renovation ideas for a calmer, more harmonious home environment in Moradabad, offered by Space Build.",
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