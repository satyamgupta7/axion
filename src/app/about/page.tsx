import AboutSection from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AxionGen",
  description: "This is About Page for AxionGen",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <AboutSection />
    </>
  );
};

export default AboutPage;
