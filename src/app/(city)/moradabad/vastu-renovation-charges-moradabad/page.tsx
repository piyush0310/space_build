import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Renovation Charges in Moradabad 2026 | Space Build",

  description:
    "Looking for Vastu renovation charges in Moradabad? Explore detailed service charges, consultant fees, and correction packages offered by Space Build. Visit spacebuild.co.in for a free quote.",

  keywords: [
    "vastu renovation charges Moradabad",
    "vastu consultant fees Moradabad",
    "home renovation charges Moradabad",
    "vastu correction charges",
    "vastu shastra service fees",
    "interior renovation packages Moradabad",
    "vastu remedy charges",
    "best vastu company Moradabad",
    "Space Build Moradabad",
    "house renovation packages",
    "vastu compliant renovation fees",
    "vastu expert charges Moradabad",
    "मुरादाबाद में वास्तु रेनोवेशन शुल्क",
    "वास्तु सलाहकार फीस मुरादाबाद",
    "घर के वास्तु सुधार का शुल्क",
    "वास्तु शास्त्र सेवा शुल्क",
    "वास्तु दोष सुधार चार्ज",
    "मुरादाबाद में घर रेनोवेशन पैकेज",
    "Moradabad mein vastu renovation charges kitne hote hain",
    "vastu consultant ki fees Moradabad",
    "ghar vastu correction charge",
    "vastu remedy ka kharcha",
    "best vastu company Moradabad mein",
    "vastu renovation package price",
    "vastu expert fees Moradabad",
    "ghar renovation charges list",
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
    title: "Vastu Renovation Charges in Moradabad | Space Build",
    description:
      "Detailed breakdown of Vastu renovation service charges, consultant fees, and packages offered by Space Build in Moradabad.",
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