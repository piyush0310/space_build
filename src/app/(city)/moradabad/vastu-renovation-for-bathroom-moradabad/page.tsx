import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Renovation for Bathroom in Moradabad | Space Build",
  description:
    "Renovating your bathroom or toilet? Space Build offers expert Vastu-based bathroom renovation services in Moradabad to improve health, hygiene, and household harmony. Get professional guidance at https://www.spacebuild.co.in/.",
  keywords:
    "vastu renovation for bathroom Moradabad, bathroom vastu Moradabad, vastu for toilet direction, bathroom renovation company Moradabad, vastu shastra for bathroom, toilet seat direction vastu, bathroom correction without demolition, vastu consultant Moradabad, bathroom vastu remedies, bathroom renovation ideas, vastu shastra toilet tips, best bathroom renovation Moradabad, Space Build Moradabad, vastu for bathroom colors, vastu for attached bathroom, vastu compliant bathroom design, bathroom layout vastu shastra, vastu for toilet in brahmasthan, vastu for bathroom drainage, washroom renovation vastu, Moradabad me bathroom vastu, snanghar ka vastu Moradabad, bathroom renovation vastu ke anusar, toilet ki disha vastu, bathroom ka vastu sudhar, toilet seat ki disha vastu tips, bathroom ke rang vastu ke anusar, Moradabad bathroom renovation company, vastu consultant Moradabad, ghar ke toilet ka vastu, bathroom vastu dosh nivaran, bathroom renovation bina todphod, Space Build vastu seva, brahmasthan me toilet ka dosh, toilet kis disha me banaye, ghar ka bathroom kaise banaye vastu ke hisab se",
  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },
  openGraph: {
    title: "Vastu Renovation for Bathroom in Moradabad | Space Build",
    description:
      "Renovating your bathroom or toilet? Space Build offers expert Vastu-based bathroom renovation services in Moradabad to improve health, hygiene, and household harmony.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Renovation for Bathroom in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Renovation for Bathroom in Moradabad | Space Build",
    description:
      "Renovating your bathroom or toilet? Space Build offers expert Vastu-based bathroom renovation services in Moradabad to improve health, hygiene, and household harmony.",
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