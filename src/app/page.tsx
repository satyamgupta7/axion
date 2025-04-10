import ChallengeSolution from "@/components/ChallengeSolution";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import HiringPartner from "@/components/HiringPartners";
import HowWePrepare from "@/components/HowWePrepare";
import Internship from "@/components/Internship";
import OfferLetter from "@/components/OfferLetter";
import PerksBenefits from "@/components/PerksBenefits";
import RoadMap from "@/components/RoadMap";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AxionGen | Launch Your Tech Career",
  description:
    "Launch your tech career with confidence. Join AxionGen for real-world internships, expert mentorship, and results that speak — 3,000+ success stories and counting.",
  keywords: [
    "AxionGen",
    "Tech Internship",
    "IT Training",
    "Placement Program",
    "Full Stack Internship",
    "Frontend Internship",
    "Backend Internship",
    "Real Projects",
    "Career Launchpad",
    "Web Development",
    "Software Development",
    "Mentorship",
    "Job Ready Program",
    "Internship with Offer Letter",
    "Remote Internship",
  ],
  authors: [{ name: "AxionGen Team", url: "https://axiongen.com/about" }],
  creator: "AxionGen",
  publisher: "AxionGen",
  metadataBase: new URL("https://axiongen.com"),
  applicationName: "AxionGen - Tech Career Launchpad",
  generator: "Next.js",
  openGraph: {
    title: "AxionGen | Launch Your Tech Career",
    description:
      "Accelerate your career with AxionGen's internship and placement programs. Learn from industry mentors, work on real-world projects, and get hired.",
    url: "https://axiongen.com",
    siteName: "AxionGen",
    images: [
      {
        url: "https://axiongen.com/images/banner/AxionGen-OG.png",
        width: 1200,
        height: 630,
        alt: "AxionGen - Internship & Placement for Tech Careers",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  category: "technology",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
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
      <HowWePrepare />
      <PerksBenefits />
      <RoadMap />
      <Testimonials />
      <div style={{ width: "100%", marginTop: "2rem" }}>
        <HiringPartner />
      </div>
    </>
  );
}
