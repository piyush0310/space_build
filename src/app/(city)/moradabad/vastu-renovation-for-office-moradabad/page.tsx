import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Renovation for Office in Moradabad 2026 | Space Build",

  description:
    "Want to improve productivity and growth with Vastu-compliant office renovation in Moradabad? Explore expert tips, cost factors, and solutions by Space Build. Visit spacebuild.co.in.",

  keywords: [
    "vastu renovation for office Moradabad",
    "office vastu Moradabad",
    "commercial vastu renovation",
    "vastu tips for office",
    "office interior renovation Moradabad",
    "vastu compliant office design",
    "best vastu consultant for office Moradabad",
    "Space Build Moradabad",
    "workspace vastu renovation",
    "vastu for business growth",
    "office cabin vastu",
    "vastu remedies for office",
    "मुरादाबाद में ऑफिस वास्तु रेनोवेशन",
    "ऑफिस वास्तु टिप्स",
    "दुकान और ऑफिस वास्तु सुधार",
    "व्यापार वृद्धि के लिए वास्तु",
    "मुरादाबाद में कमर्शियल वास्तु",
    "ऑफिस केबिन वास्तु उपाय",
    "Moradabad mein office vastu renovation",
    "office ke liye vastu tips",
    "dukan aur office vastu sudhar",
    "business growth ke liye vastu",
    "Moradabad mein commercial vastu renovation",
    "office cabin vastu remedies",
    "vastu consultant for office Moradabad",
    "workspace renovation as per vastu",
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
    title: "Vastu Renovation for Office in Moradabad | Space Build",
    description:
      "Complete guide to Vastu-compliant office renovation, tips, and solutions in Moradabad by Space Build.",
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