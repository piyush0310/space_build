import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Remedies for Existing Home in Moradabad | Space Build",
  description:
    "Already living in your home but facing Vastu doshas? Space Build offers practical Vastu remedies for existing homes in Moradabad without demolition. Get expert Vastu solutions for your house today at https://www.spacebuild.co.in/.",
  keywords:
    "vastu remedies for existing home Moradabad, vastu correction without demolition, vastu tips for old house, vastu dosh remedies Moradabad, vastu consultant Moradabad, home vastu solutions, vastu shastra remedies for house, vastu for already built house, easy vastu remedies, vastu correction without breaking walls, vastu expert Moradabad, vastu remedies for kitchen, vastu remedies for main door, vastu remedies for bedroom, vastu remedies for toilet, vastu shastra for existing home, house vastu consultant near me, Space Build Moradabad, vastu solutions for old construction, vastu tips for daily life, Moradabad me purane ghar ka vastu, vastu dosh nivaran upay, bina todphod ke vastu correction, ghar ka vastu kaise thik kare, purane makan ka vastu sudhar, vastu ke aasan upay, ghar me vastu dosh ke lakshan, vastu shastra ke upay ghar ke liye, Moradabad vastu consultant, ghar ka vastu sahi karne ke tarike, kitchen vastu upay, mukhya dwar vastu upay, bedroom vastu sudhar, toilet vastu dosh upay, purane ghar me vastu correction Moradabad, Space Build vastu seva, ghar ki negative energy kaise hataye, vastu dosh dur karne ke tarike, vastu remedies, existing home vastu, vastu correction, vastu dosh nivaran, Moradabad vastu expert, home vastu solutions, Space Build, vastu shastra, non-demolition vastu, house renovation Moradabad, vastu consultant, residential vastu, easy vastu tips, vastu for old house",
  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },
  openGraph: {
    title: "Vastu Remedies for Existing Home in Moradabad | Space Build",
    description:
      "Already living in your home but facing Vastu doshas? Space Build offers practical Vastu remedies for existing homes in Moradabad without demolition.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Remedies for Existing Homes in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Remedies for Existing Home in Moradabad | Space Build",
    description:
      "Already living in your home but facing Vastu doshas? Space Build offers practical Vastu remedies for existing homes in Moradabad without demolition.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
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