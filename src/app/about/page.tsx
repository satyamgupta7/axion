import AboutSection from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AxionGen - Careers, Internships & Our Mission",
  description:
    "Learn about AxionGen, our mission, values, and the passionate team driving innovation. Discover career opportunities, internships, and how you can grow with us.",
  keywords:
    "AxionGen About Us, Careers at AxionGen, Internship Opportunities, Join AxionGen Team, Software Careers, Work at AxionGen, Company Culture, Technology Innovators",
};

const AboutPage = () => {
  return (
    <>
      <AboutSection />
    </>
  );
};

export default AboutPage;
