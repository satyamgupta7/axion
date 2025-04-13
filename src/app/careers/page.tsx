import Carriers from "@/components/Carriers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Internship Opportunities | Careers at AxionGen",
  description:
    "Explore exciting internship opportunities at AxionGen for roles like Full Stack Developer, Data Science, Data Analyst, Business Analyst, Networking, and Cyber Security. Launch your tech career with us today!",
  keywords: [
    "Internship at AxionGen",
    "Full Stack Developer Intern",
    "Data Science Internship",
    "Data Analyst Internship",
    "Business Analyst Internship",
    "Cyber Security Intern",
    "Networking Internship",
    "Tech Internships India",
    "Careers at AxionGen",
  ],
};

const CarriersPage = () => {
  return (
    <>
      <Carriers />
    </>
  );
};

export default CarriersPage;
