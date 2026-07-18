import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Office Vastu Correction Tips & Guide | Space Build",
  description:
    "Improve productivity and business growth with expert office vastu correction tips from Space Build. Learn Vastu rules for cabin placement, seating, entrance & more.",
  keywords:
    "office vastu correction, vastu tips for office, vastu shastra for office, office vastu remedies, vastu compliant office, cabin vastu tips, employee seating vastu, main entrance vastu office, cash counter vastu, office vastu consultant, office renovation vastu, Space Build office vastu",
  alternates: {
    canonical: "https://www.spacebuild.co.in/office-vastu-correction",
  },
  openGraph: {
    title: "Office Vastu Correction Tips & Guide | Space Build",
    description:
      "Improve productivity and business growth with expert office vastu correction tips from Space Build. Learn Vastu rules for cabin placement, seating, entrance & more.",
    url: "https://www.spacebuild.co.in/office-vastu-correction",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Office Vastu Correction Tips & Guide",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Office Vastu Correction Tips & Guide | Space Build",
    description:
      "Improve productivity and business growth with expert office vastu correction tips from Space Build. Learn Vastu rules for cabin placement, seating, entrance & more.",
    images: [
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782801421/IMG_20260630_112901.jpg_wnfyv5.jpg",
    ],
  },
  icons: {
    icon: "/favicon-v2.ico",
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