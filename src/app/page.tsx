import Brands from "@/components/Brands";
import ChallengeSolution from "@/components/ChallengeSolution";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import HowWePrepare from "@/components/HowWePrepare";
import Internship from "@/components/Internship";
import OfferLetter from "@/components/OfferLetter";
import PerksBenefits from "@/components/PerksBenefits";
import RoadMap from "@/components/RoadMap";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AxionGen",
  description: "This is Home for AxionGen",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <OfferLetter />
      <WhyChoose />
      <ChallengeSolution />
      <Internship />
      <RoadMap />
      <HowWePrepare />
      <PerksBenefits />
      <Testimonials />
      <Brands />
    </>
  );
}
