import InternshipBusinessAnalyst from "@/components/InternshipBusinessAnalyst";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Analyst Internship | AxionGen Careers",
  description:
    "Apply for the Business Analyst Internship at AxionGen. Gain hands-on experience in data analysis, business strategy, and decision-making. Build your career with us.",
  keywords:
    "Business Analyst Internship, AxionGen Internship, Data Analysis Internship, Business Strategy Internship, Career Opportunities, Intern at AxionGen, Business Analyst Training",
};

const BusinessAnalystPage = () => {
  return (
    <>
      <InternshipBusinessAnalyst />
    </>
  );
};

export default BusinessAnalystPage;
