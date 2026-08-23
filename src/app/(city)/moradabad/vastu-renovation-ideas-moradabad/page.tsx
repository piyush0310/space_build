import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Renovation Ideas in Moradabad 2026 | Space Build",

  description:
    "Looking for creative Vastu renovation ideas for your home in Moradabad? Explore room-wise tips, budget-friendly solutions, and design inspiration from Space Build. Visit spacebuild.co.in.",

  keywords: [
    // English
    "vastu renovation ideas Moradabad",
    "vastu home decor ideas",
    "budget vastu remedies",
    "room wise vastu tips",
    "vastu interior ideas Moradabad",
    "easy vastu remedies for home",
    "best vastu consultant Moradabad",
    "Space Build Moradabad",
    "vastu color ideas",
    "vastu furniture arrangement ideas",
    "small home vastu ideas",
    "vastu renovation inspiration",

    // Hindi
    "मुरादाबाद में वास्तु रेनोवेशन आइडियाज",
    "वास्तु घर सजावट आइडिया",
    "कमरे के अनुसार वास्तु टिप्स",
    "आसान वास्तु उपाय घर के लिए",
    "वास्तु रंग सुझाव",
    "मुरादाबाद में वास्तु इंटीरियर आइडिया",

    // Hinglish
    "Moradabad mein vastu renovation ideas",
    "vastu ke hisab se ghar sajana",
    "kamre ke anusar vastu tips",
    "aasan vastu upay ghar ke liye",
    "vastu color suggestions ghar ke liye",
    "budget mein vastu remedies",
    "chhote ghar ke liye vastu ideas",
    "vastu furniture arrangement tips Moradabad",
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
    title: "Vastu Renovation Ideas in Moradabad | Space Build",
    description:
      "Creative, room-wise, and budget-friendly Vastu renovation ideas for homes in Moradabad by Space Build.",
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