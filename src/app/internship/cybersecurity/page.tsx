import IntershipCyberSecurity from "@/components/InternshipCyberSecurity";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cyber Security Internship | AxionGen",
  description:
    "Apply now for AxionGen's Cyber Security Internship. Gain hands-on experience, work on real-world projects, and kickstart your career in cybersecurity.",
  keywords: [
    "Cyber Security Internship",
    "Cybersecurity Internship Program",
    "AxionGen Internship",
    "Cybersecurity training",
    "Information Security Internship",
    "Cybersecurity career",
    "Internship for students",
    "Cybersecurity jobs for freshers",
  ],
};

const CyberSecurityPage = () => {
  return (
    <>
      <IntershipCyberSecurity />
    </>
  );
};

export default CyberSecurityPage;
