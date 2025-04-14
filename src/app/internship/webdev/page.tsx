import IntershipWebDev from "@/components/InternshipWebDev";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Internship | AxionGen",
  description:
    "Join AxionGen's Web Development Internship to learn HTML, CSS, JavaScript, and React. Build real-world projects and become job-ready.",
  keywords: [
    "Web Development Internship",
    "Frontend Development Internship",
    "HTML CSS JavaScript Internship",
    "React Internship",
    "AxionGen Internship",
    "Web Development Training",
    "Internship for developers",
    "Web Developer jobs for freshers",
  ],
};

const WebDevPage = () => {
  return (
    <>
      <IntershipWebDev />
    </>
  );
};

export default WebDevPage;
