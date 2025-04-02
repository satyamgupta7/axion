import AboutSectionOne from "@/components/About/AboutSectionOne";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Axion",
  description: "This is About Page for Axion",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
