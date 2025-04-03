import AboutSectionOne from "@/components/About/AboutSectionOne";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AxionGen",
  description: "This is About Page for AxionGen",
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
