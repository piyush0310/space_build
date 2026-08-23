import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Renovation for Villa in Moradabad 2026 | Space Build",

  description:
    "Planning Vastu renovation for your villa or independent house in Moradabad? Explore expert layout tips, plot-level solutions, and renovation guidance from Space Build. Visit spacebuild.co.in.",

  keywords: [
    // English
    "vastu renovation for villa Moradabad",
    "villa vastu Moradabad",
    "independent house vastu renovation",
    "vastu tips for villa",
    "vastu for bungalow Moradabad",
    "best vastu consultant for villa Moradabad",
    "Space Build Moradabad",
    "duplex vastu renovation",
    "vastu for boundary wall",
    "swimming pool vastu",
    "garden vastu tips",
    "luxury villa vastu Moradabad",

    // Hindi
    "मुरादाबाद में विला वास्तु रेनोवेशन",
    "विला के लिए वास्तु टिप्स",
    "बंगला वास्तु मुरादाबाद",
    "स्वतंत्र घर वास्तु सुधार",
    "बाउंड्री वॉल वास्तु",
    "गार्डन वास्तु टिप्स",
    "मुरादाबाद में डुप्लेक्स वास्तु",

    // Hinglish
    "Moradabad mein villa vastu renovation",
    "villa ke liye vastu tips",
    "bangla vastu Moradabad",
    "independent house vastu sudhar",
    "boundary wall vastu tips",
    "garden aur lawn vastu",
    "duplex vastu renovation Moradabad",
    "luxury villa vastu consultant Moradabad",
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
    title: "Vastu Renovation for Villa in Moradabad | Space Build",
    description:
      "Complete guide to Vastu-compliant villa and independent house renovation, plot-level tips, and solutions in Moradabad by Space Build.",
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