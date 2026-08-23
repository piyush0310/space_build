import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "MahaVastu Renovation in Moradabad 2026 | Space Build",

  description:
    "Planning a MahaVastu-based home renovation in Moradabad? Learn principles, benefits, and renovation solutions offered by Space Build. Visit spacebuild.co.in for expert guidance.",

  keywords: [
    "mahavastu renovation Moradabad",
    "mahavastu consultant Moradabad",
    "mahavastu home renovation",
    "mahavastu principles for house",
    "vastu renovation Moradabad",
    "mahavastu interior design",
    "mahavastu compliant home",
    "best mahavastu expert Moradabad",
    "Space Build Moradabad",
    "mahavastu remedies",
    "house renovation as per mahavastu",
    "mahavastu five elements home",
    "मुरादाबाद में महावास्तु रेनोवेशन",
    "महावास्तु सलाहकार मुरादाबाद",
    "महावास्तु के अनुसार घर सुधार",
    "महावास्तु सिद्धांत घर के लिए",
    "घर का महावास्तु उपाय",
    "मुरादाबाद में महावास्तु विशेषज्ञ",
    "Moradabad mein mahavastu renovation",
    "mahavastu consultant Moradabad mein",
    "mahavastu ke hisab se ghar ka sudhar",
    "mahavastu principles ghar ke liye",
    "mahavastu remedies for home Moradabad",
    "mahavastu expert Moradabad",
    "ghar ko mahavastu compliant banana",
    "mahavastu panchtatva home tips",
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
    title: "MahaVastu Renovation in Moradabad | Space Build",
    description:
      "Complete guide to MahaVastu-based home renovation principles, benefits, and solutions in Moradabad by Space Build.",
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