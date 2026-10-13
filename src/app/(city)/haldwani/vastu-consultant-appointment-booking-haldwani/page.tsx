
import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Vastu Consultant Appointment Booking Haldwani | Space Build Haldwani",

  description:
    "Planning to book a Vastu consultant appointment in Haldwani? Learn the booking steps, what to prepare, questions to ask, and how to turn the advice into a practical interior plan with Space Build Haldwani. Book a free consultation.",

  keywords:
    "Vastu consultant appointment booking Haldwani, book Vastu consultant Haldwani, Vastu consultation appointment, Vastu expert appointment, how to book Vastu consultant, Vastu site visit booking, Vastu consultation preparation, Vastu consultation checklist, Vastu consultant fees, Vastu consultation for new house, Vastu consultation for flat, Vastu consultation for office, Vastu report, Vastu friendly interior, Vastu shastra Haldwani, interior designer Haldwani, interior design Haldwani, Haldwani interiors, Vastu and interior design, Space Build Haldwani",

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
      "https://www.spacebuild.co.in/haldwani/vastu-consultant-appointment-booking",
  },

  openGraph: {
    title:
      "Vastu Consultant Appointment Booking Haldwani | Space Build Haldwani",

    description:
      "Planning to book a Vastu consultant appointment in Haldwani? Learn the booking steps, what to prepare, questions to ask, and how to turn the advice into a practical interior plan with Space Build Haldwani. Book a free consultation.",

    url: "https://www.spacebuild.co.in/haldwani/vastu-consultant-appointment-booking",
    siteName: "Space Build",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vastu Consultant Appointment Booking Haldwani - Space Build",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Vastu Consultant Appointment Booking Haldwani | Space Build Haldwani",

    description:
      "Planning to book a Vastu consultant appointment in Haldwani? Learn the booking steps, what to prepare, questions to ask, and how to turn the advice into a practical interior plan with Space Build Haldwani. Book a free consultation.",

    images: ["https://www.spacebuild.co.in/spacebuild_logo.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  other: {
    "geo.placename": "Haldwani, Uttarakhand",
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
