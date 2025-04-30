import InternshipDataScience from "@/components/InternshipDataScience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Science Internship | AxionGen Careers",
  description:
    "Apply for the Data Science Internship at AxionGen. Gain practical experience in data analysis, machine learning, AI projects, and real-world problem-solving with industry experts.",
  keywords:
    "Data Science Internship, Machine Learning Internship, AI Internship, Data Analyst Internship, AxionGen Careers, Data Science Training, Intern at AxionGen, Data Science Projects",
};

const DataSciencePage = () => {
  return (
    <>
      <InternshipDataScience />
    </>
  );
};

export default DataSciencePage;
