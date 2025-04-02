import InternshipBusinessAnalyst from "@/components/InternshipBusinessAnalyst";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Analyst Internship | Axion",
  description: "This is Data Science Page for Axion",
  // other metadata
};

const BusinessAnalystPage = () => {
  return (
    <>
      <InternshipBusinessAnalyst />
    </>
  );
};

export default BusinessAnalystPage;
