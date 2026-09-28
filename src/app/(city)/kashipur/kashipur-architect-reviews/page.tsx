import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title:
    "Kashipur Architect Reviews 2026 – How to Choose the Right Architect | Space Build",
  description:
    "Read genuine insights on Kashipur architect reviews — what to look for, red flags to avoid, and how Space Build's client feedback reflects reliable, vastu-integrated design.",
  keywords:
    "kashipur architect reviews, best architect in kashipur reviews, architect feedback kashipur, top rated architect kashipur, architect testimonials kashipur, space build reviews, space build kashipur reviews, vastu architect reviews kashipur, house design architect reviews, trusted architect kashipur, architect ratings kashipur, google reviews architect kashipur, architect client feedback, how to choose architect kashipur, reliable architect kashipur, architecture firm reviews india, home construction architect reviews, best interior designer kashipur reviews, architect near me reviews, kashipur construction company reviews, vastu consultant reviews kashipur, architect portfolio reviews kashipur",
  alternates: {
    canonical: "https://www.spacebuild.co.in/kashipur-architect-reviews",
  },
  openGraph: {
    title:
      "Kashipur Architect Reviews 2026 – How to Choose the Right Architect | Space Build",
    description:
      "Read genuine insights on Kashipur architect reviews — what to look for, red flags to avoid, and how Space Build's client feedback reflects reliable, vastu-integrated design.",
    url: "https://www.spacebuild.co.in/kashipur-architect-reviews",
    siteName: "Space Build",
    images: [
      {
        url: "https://www.spacebuild.co.in/spacebuild_logo.jpg",
        width: 1200,
        height: 630,
        alt: "Space Build - Kashipur Architect Reviews 2026",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kashipur Architect Reviews 2026 – How to Choose the Right Architect | Space Build",
    description:
      "Read genuine insights on Kashipur architect reviews — what to look for, red flags to avoid, and how Space Build's client feedback reflects reliable, vastu-integrated design.",
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