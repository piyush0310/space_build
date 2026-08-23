import Content from "./Content";
import Banner from "./Banner";
import Portfolio from "@/components/Portfolio";

export const metadata = {
  title: "Vastu Renovation Near Me in Moradabad 2026 | Space Build",

  description:
    'Searching for "vastu renovation near me" in Moradabad? Find local, trusted Vastu renovation services with Space Build. Explore service areas, process, and how to get started. Visit spacebuild.co.in.',

  keywords: [
    // English
    "vastu renovation near me Moradabad",
    "local vastu consultant Moradabad",
    "vastu renovation services near me",
    "nearby vastu expert Moradabad",
    "home renovation near me Moradabad",
    "best vastu company near me",
    "Space Build Moradabad",
    "vastu contractor near me",
    "local home renovation services",
    "vastu consultant nearby",
    "trusted renovation company Moradabad",
    "vastu renovation service area Moradabad",

    // Hindi
    "मुरादाबाद में नजदीकी वास्तु रेनोवेशन",
    "आस-पास वास्तु सलाहकार",
    "स्थानीय वास्तु सेवा मुरादाबाद",
    "नजदीकी वास्तु विशेषज्ञ",
    "घर रेनोवेशन सर्विस पास में",
    "मुरादाबाद में भरोसेमंद वास्तु कंपनी",

    // Hinglish
    "Moradabad mein vastu renovation near me",
    "aas paas ka vastu consultant",
    "local vastu service Moradabad mein",
    "nazdiki vastu expert Moradabad",
    "ghar renovation service pass mein",
    "trusted vastu company Moradabad",
    "vastu contractor near me Moradabad",
    "mere ghar ke pass vastu renovation",
  ].join(", "),

  authors: [{ name: "Space Build Moradabad" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.spacebuild.co.in/",
  },

  openGraph: {
    title: "Vastu Renovation Near Me in Moradabad | Space Build",
    description:
      "Local Vastu renovation services across Moradabad by Space Build — service areas, process, and how to get started.",
    url: "https://www.spacebuild.co.in/",
    siteName: "Space Build",
    locale: "en_IN",
    type: "article",
  },

  other: {
    language: "en-IN, hi-IN",
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