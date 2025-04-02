import InternshipDataScience from "@/components/InternshipDataScience";
import IntershipWebDev from "@/components/InternshipWebDev";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Internship | Axion",
  description: "This is Web Development Internship Page for Axion",
  // other metadata
};

const WebDevPage = () => {
  return (
    <>
      <IntershipWebDev />
    </>
  );
};

export default WebDevPage;
