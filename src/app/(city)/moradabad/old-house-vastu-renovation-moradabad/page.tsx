import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Old House Vastu Renovation in Moradabad 2026 | Space Build",

  description:
    "Renovating an old or ancestral house in Moradabad as per Vastu? Explore practical solutions, common defects, and expert guidance from Space Build. Visit spacebuild.co.in for a free consultation.",

  keywords: [
    // English
    "old house vastu renovation Moradabad",
    "ancestral property vastu renovation",
    "purani haveli vastu Moradabad",
    "old city house vastu correction",
    "vastu for old homes",
    "best vastu consultant for old house Moradabad",
    "Space Build Moradabad",
    "joint family house vastu",
    "heritage home renovation vastu",
    "old building renovation Moradabad",
    "vastu defects in old houses",

    // Hindi
    "मुरादाबाद में पुराने घर का वास्तु रेनोवेशन",
    "पुरानी हवेली वास्तु सुधार",
    "पुश्तैनी घर वास्तु",
    "संयुक्त परिवार के घर का वास्तु",
    "पुराने घर के वास्तु दोष",
    "मुरादाबाद में हेरिटेज हाउस रेनोवेशन",

    // Hinglish
    "Moradabad mein purane ghar ka vastu renovation",
    "purani haveli vastu sudhar",
    "pushtaini ghar ka vastu",
    "joint family ghar vastu correction",
    "old city ghar vastu defects",
    "heritage home renovation Moradabad",
    "vastu consultant for old house Moradabad",
    "purane makan ka renovation vastu ke sath",
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
    title: "Old House Vastu Renovation in Moradabad | Space Build",
    description:
      "Complete guide to Vastu-based renovation of old, ancestral, and heritage houses in Moradabad by Space Build.",
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