import IntershipCyberSecurity from "@/components/InternshipCyberSecurity";
import InternshipDataScience from "@/components/InternshipDataScience";
import IntershipWebDev from "@/components/InternshipWebDev";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Internship | AxionGen",
  description: "This is Web Development Internship Page for AxionGen",
  // other metadata
};

const CyberSecurityPage = () => {
  return (
    <>
      <IntershipCyberSecurity />
    </>
  );
};

export default CyberSecurityPage;
