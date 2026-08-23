import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Defect Correction Services in Moradabad | Space Build",
  description:
    "Struggling with recurring problems at home or office? Space Build offers expert Vastu defect correction services in Moradabad to identify and fix Vastu doshas effectively. Visit https://www.spacebuild.co.in/ for a professional consultation.",
  keywords:
    "vastu defect correction Moradabad, vastu dosh correction, vastu defect identification, vastu correction services Moradabad, vastu consultant Moradabad, vastu defects in home, vastu defects in office, how to fix vastu defects, vastu shastra defect remedies, vastu correction without demolition, vastu expert near me, vastu audit Moradabad, vastu defects and solutions, vastu shastra consultant, house vastu defect correction, commercial vastu defect correction, Space Build Moradabad, vastu shastra expert Moradabad, vastu defect symptoms, vastu correction company Moradabad, Moradabad me vastu dosh correction, vastu dosh kaise pehchane, ghar ke vastu dosh, vastu dosh nivaran upay, vastu dosh ke lakshan, vastu correction Moradabad company, vastu shastra dosh sudhar, ghar ka vastu dosh kaise thik kare, office ka vastu dosh, vastu consultant Moradabad, vastu dosh nivaran ke tarike, bina todphod vastu correction, vastu audit Moradabad, Space Build vastu seva, vastu dosh se pareshani, ghar me vastu dosh ke effect, vastu shastra expert Moradabad, dukan ka vastu dosh, vastu defect, vastu dosh, vastu correction, Moradabad vastu expert, vastu audit, Space Build, vastu shastra, vastu consultant, home vastu defects, office vastu defects, vastu remedies, residential vastu correction, commercial vastu correction, vastu solutions Moradabad",
  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },
  openGraph: {
    title: "Vastu Defect Correction Services in Moradabad | Space Build",
    description:
      "Struggling with recurring problems at home or office? Space Build offers expert Vastu defect correction services in Moradabad to identify and fix Vastu doshas effectively.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Defect Correction Services in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vastu Defect Correction Services in Moradabad | Space Build",
    description:
      "Struggling with recurring problems at home or office? Space Build offers expert Vastu defect correction services in Moradabad to identify and fix Vastu doshas effectively.",
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