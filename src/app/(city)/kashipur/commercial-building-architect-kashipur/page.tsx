import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Commercial Building Architect in Kashipur | Space Build",
  description:
    "Space Build offers expert commercial building architecture, Vastu-integrated design, and interior solutions in Kashipur. Get professional consultation for offices, showrooms, and industrial spaces.",
  keywords:
    "commercial building architect Kashipur, commercial architect Kashipur, architect in Kashipur, commercial construction Kashipur, office architect Kashipur, showroom design Kashipur, commercial interior design Kashipur, industrial building architect Kashipur, Vastu architect Kashipur, best architect in Kashipur, commercial building design Uttarakhand, architectural consultant Kashipur, commercial space planning Kashipur, warehouse design Kashipur, retail architecture Kashipur, commercial renovation Kashipur, Vastu construction Kashipur, project management consultation Kashipur, office interior design Kashipur, commercial building contractor Kashipur, architecture firm Udham Singh Nagar, commercial building architect Uttarakhand, industrial architect Rudrapur, commercial facade design Kashipur",
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/commercial-building-architect-kashipur",
  },
  openGraph: {
    title: "Commercial Building Architect in Kashipur | Space Build",
    description:
      "Space Build offers expert commercial building architecture, Vastu-integrated design, and interior solutions in Kashipur. Get professional consultation for offices, showrooms, and industrial spaces.",
    url: "https://www.spacebuild.co.in/commercial-building-architect-kashipur",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Commercial Building Architect in Kashipur",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Building Architect in Kashipur | Space Build",
    description:
      "Space Build offers expert commercial building architecture, Vastu-integrated design, and interior solutions in Kashipur. Get professional consultation for offices, showrooms, and industrial spaces.",
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