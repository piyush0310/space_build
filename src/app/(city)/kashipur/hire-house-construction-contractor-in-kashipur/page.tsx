import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Hire House Construction Contractor Kashipur | 5-Meeting Plan",

  description:
    "Want to hire house construction contractor in Kashipur? Use a five-meeting playbook with questions, listening cues and checks before you sign.",

  keywords: [
    "hire house construction contractor in Kashipur",
    "house construction contractor Kashipur",
    "home construction contractor",
    "duplex construction contractor",
    "villa construction contractor",
    "house extension contractor",
    "contractor meeting questions",
    "house construction meeting plan",
    "contractor selection checklist",
    "construction quotation checks",
    "house construction contract",
    "contractor verification Kashipur",
    "residential construction contractor",
    "home builder Kashipur",
    "contractor site visit",
    "construction payment stages",
    "house construction agreement tips",
    "construction quality checks",
    "trusted house contractor Uttarakhand",
    "house building decision guide",
  ],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/kashipur/hire-house-construction-contractor-in-kashipur",
  },

  robots: {
    index: true,
    follow: true,
  },

  authors: [{ name: "Space Build" }],

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Hire House Construction Contractor Kashipur | 5-Meeting Plan",
    description:
      "Want to hire house construction contractor in Kashipur? Use a five-meeting playbook with questions, listening cues and checks before you sign.",
    url: "https://www.spacebuild.co.in/kashipur/hire-house-construction-contractor-in-kashipur",
    siteName: "Space Build",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hire House Construction Contractor Kashipur - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Hire House Construction Contractor Kashipur | 5-Meeting Plan",
    description:
      "Want to hire house construction contractor in Kashipur? Use a five-meeting playbook with questions, listening cues and checks before you sign.",
    images: ["/og-image.jpg"],
  },

  geo: {
    placename: "Kashipur, Uttarakhand, India",
    region: "IN-UT",
    country: "IN",
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