import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Best Vastu Renovation Company in Moradabad | Space Build",
  description:
    "Space Build is a trusted Vastu renovation company in Moradabad, offering expert home renovation, Vastu correction, and construction services. Visit https://www.spacebuild.co.in/ to know more.",
  keywords:
    "vastu renovation company moradabad, best renovation company moradabad, vastu construction company, home renovation contractor moradabad, vastu builders moradabad, top construction company moradabad, vastu compliant builders, residential renovation company, space build moradabad, trusted vastu company, house renovation firm moradabad, vastu architecture company, civil contractor moradabad, renovation and construction firm, sabse acchi renovation company moradabad, ghar renovation contractor moradabad, vastu builder moradabad, vastu ke anusar builder, ghar renovation company, bharosemand vastu company, ghar renovation firm moradabad, nirman aur renovation company, vastu company, renovation company, moradabad, construction firm, space build, trusted contractor, home renovation, residential construction, vastu architecture",
  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },
  openGraph: {
    title: "Best Vastu Renovation Company in Moradabad | Space Build",
    description:
      "Space Build is a trusted Vastu renovation company in Moradabad, offering expert home renovation, Vastu correction, and construction services.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Best Vastu Renovation Company in Moradabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Vastu Renovation Company in Moradabad | Space Build",
    description:
      "Space Build is a trusted Vastu renovation company in Moradabad, offering expert home renovation, Vastu correction, and construction services.",
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