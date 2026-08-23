import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Vastu Renovation Consultant in Moradabad | Space Build – Expert Vastu Guidance",
  description:
    "Need expert Vastu guidance before renovating your home? Space Build offers professional Vastu renovation consultant services in Moradabad. Visit https://www.spacebuild.co.in/ to book a consultation.",
  keywords:
    "vastu renovation consultant moradabad, vastu consultant near me, home vastu consultation, vastu expert moradabad, vastu advisor for renovation, vastu consultation services, best vastu consultant moradabad, space build moradabad, vastu dosh consultation, vastu site visit consultant, residential vastu expert, vastu shastra consultant, house vastu consultation moradabad, vastu correction consultant, vastu consultant nearby, ghar ka vastu consultation, renovation ke liye vastu salahkar, sabse acchha vastu consultant moradabad, ghar ke liye vastu expert, vastu shastra salahkar, ghar vastu consultation moradabad, vastu sudhar consultant, vastu consultant, renovation consultant, moradabad, vastu expert, space build, vastu consultation, home vastu advisor, vastu shastra expert, residential vastu, vastu dosh consultant",
  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },
  openGraph: {
    title:
      "Vastu Renovation Consultant in Moradabad | Space Build – Expert Vastu Guidance",
    description:
      "Need expert Vastu guidance before renovating your home? Space Build offers professional Vastu renovation consultant services in Moradabad.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Vastu Renovation Consultant in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Vastu Renovation Consultant in Moradabad | Space Build – Expert Vastu Guidance",
    description:
      "Need expert Vastu guidance before renovating your home? Space Build offers professional Vastu renovation consultant services in Moradabad.",
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