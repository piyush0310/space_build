import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Kashipur Construction Company Contact | Enquiry, Visit and Follow-Up Guide 2026",

  description:
    "Contact a construction company in Kashipur the right way: choose the channel, send a clear enquiry, test response time, plan an office visit and keep records safely.",

  keywords:
    "Kashipur construction company contact, construction company enquiry, contact channel comparison, WhatsApp enquiry for builder, email quotation request, construction office visit checklist, enquiry message template, response time test, first meeting agenda, site visit scheduling, follow-up after enquiry, contact record keeping, verified company address, enquiry form safety, builder call checklist, quotation request format, meeting notes for construction, contact fraud warning signs, company contact verification, Kashipur builder enquiry",

  robots: {
    index: true,
    follow: true,
  },

  authors: [
    {
      name: "Space Build",
    },
  ],

  alternates: {
    canonical:
      "https://www.spacebuild.co.in/kashipur/kashipur-construction-company-contact",
  },

  openGraph: {
    title:
      "Kashipur Construction Company Contact | Enquiry, Visit and Follow-Up Guide 2026",
    description:
      "Contact a construction company in Kashipur the right way: choose the channel, send a clear enquiry, test response time, plan an office visit and keep records safely.",
    url: "https://www.spacebuild.co.in/kashipur/kashipur-construction-company-contact",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Kashipur Construction Company Contact - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Kashipur Construction Company Contact | Enquiry, Visit and Follow-Up Guide 2026",
    description:
      "Contact a construction company in Kashipur the right way: choose the channel, send a clear enquiry, test response time, plan an office visit and keep records safely.",
    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    "geo.placename": "Kashipur, Uttarakhand",
    "geo.region": "IN-UT",
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