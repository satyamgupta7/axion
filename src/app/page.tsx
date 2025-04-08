import Brands from "@/components/Brands";
import ChallengeSolution from "@/components/ChallengeSolution";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import HiringPartner from "@/components/HiringPartners";
import HowWePrepare from "@/components/HowWePrepare";
import Internship from "@/components/Internship";
import OfferLetter from "@/components/OfferLetter";
import PerksBenefits from "@/components/PerksBenefits";
import RoadMap from "@/components/RoadMap";
import RoadmapAnimation from "@/components/RoadMapAnimation";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AxionGen | Launch Your Tech Career",
  description:
    "Start your tech journey with AxionGen. Real-world projects, expert mentorship, and guaranteed placement. Join 10,000+ students transforming their careers.",
  keywords: [
    "AxionGen",
    "Internship",
    "Tech Career",
    "Placement Program",
    "Real Projects",
    "Mentorship",
    "Web Development",
    "Full Stack Internship",
    "Career Boost",
    "IT Internship",
  ],
  authors: [{ name: "AxionGen Team", url: "https://axiongen.com/about" }],
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
      {/* <RoadMap /> */}
      <RoadmapAnimation />
      <HowWePrepare />
      <PerksBenefits />
      <Testimonials />
      {/* <Brands /> */}
      <div style={{ width: "100%", marginTop: "2rem" }}>
        <HiringPartner />
      </div>
    </>
  );
}
