import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Renovation Cost in Moradabad 2026 | Space Build Experts",

  description:
    "Planning Vastu renovation in Moradabad? Get complete cost details, factors affecting price, and expert Vastu correction solutions from Space Build. Visit spacebuild.co.in for a free consultation.",

  keywords: [
    "vastu renovation cost Moradabad",
    "vastu consultant Moradabad",
    "home renovation Moradabad",
    "vastu correction cost",
    "vastu shastra renovation",
    "interior renovation Moradabad",
    "vastu home construction",
    "best vastu consultant Moradabad",
    "Space Build Moradabad",
    "vastu remedies for home",
    "house renovation cost Moradabad",
    "vastu compliant interior design",
    "मुरादाबाद में वास्तु रेनोवेशन खर्च",
    "वास्तु सलाहकार मुरादाबाद",
    "घर का वास्तु सुधार",
    "वास्तु शास्त्र अनुसार घर निर्माण",
    "वास्तु दोष निवारण खर्च",
    "मुरादाबाद में घर रेनोवेशन",
    "Moradabad mein vastu renovation kharcha",
    "ghar ka vastu sudhar kaise kare",
    "vastu dosh nivaran cost Moradabad",
    "best vastu consultant Moradabad mein",
    "vastu ke hisab se ghar banwana",
    "Moradabad interior renovation price",
    "vastu shastra ghar design",
    "ghar renovation budget Moradabad",
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
    title: "Vastu Renovation Cost in Moradabad | Space Build",
    description:
      "Complete guide to Vastu renovation costs, factors, and expert solutions in Moradabad by Space Build.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    locale: "en_IN",
    type: "website",
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