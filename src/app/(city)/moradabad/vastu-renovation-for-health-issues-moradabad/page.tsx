import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Renovation for Health Issues in Moradabad 2026 | Space Build",

  description:
    "Exploring Vastu renovation to support better health and well-being at home? Learn traditional principles, room-wise tips, and renovation solutions from Space Build in Moradabad. Visit spacebuild.co.in.",

  keywords: [
    // English
    "vastu renovation for health issues Moradabad",
    "vastu for good health",
    "vastu tips for wellness",
    "swasthya vastu Moradabad",
    "vastu remedies for health",
    "best vastu consultant Moradabad",
    "Space Build Moradabad",
    "bedroom vastu for health",
    "vastu for sleep problems",
    "vastu for family wellbeing",
    "kitchen vastu health",
    "vastu correction for peace of mind",

    // Hindi
    "मुरादाबाद में स्वास्थ्य समस्या के लिए वास्तु रेनोवेशन",
    "स्वास्थ्य वास्तु उपाय",
    "अच्छी सेहत के लिए वास्तु",
    "बेडरूम वास्तु स्वास्थ्य",
    "नींद की समस्या वास्तु उपाय",
    "मुरादाबाद में पारिवारिक स्वास्थ्य वास्तु",

    // Hinglish
    "Moradabad mein sehat ki problem ke liye vastu renovation",
    "achi sehat ke liye vastu upay",
    "bedroom vastu health ke liye",
    "neend na aane ka vastu upay",
    "ghar mein bimari ka vastu karan",
    "family health vastu tips Moradabad",
    "vastu consultant for health Moradabad",
    "ghar ka vastu sudhar sehat ke liye",
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
    title: "Vastu Renovation for Health Issues in Moradabad | Space Build",
    description:
      "Traditional Vastu principles and renovation solutions believed to support better health and family wellbeing, offered by Space Build in Moradabad.",
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