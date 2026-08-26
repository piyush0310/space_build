import type { Metadata } from "next";
import Banner from "./Banner";
import Content from "./Content";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Commercial Pest Control in Moradabad | Space Build",
  description:
    "Commercial pest control in Moradabad for offices, shops, restaurants, hotels, warehouses and factories. Book an inspection with Space Build.",
  alternates: {
    canonical:
      "https://www.spacebuild.co.in/commercial-pest-control-moradabad",
  },
  robots: { index: true, follow: true },
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
