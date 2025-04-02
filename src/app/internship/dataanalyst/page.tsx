import InternshipDataAnalyst from "@/components/InternshipDataAnalyst";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Analyst Internship | Axion",
  description: "This is Data Science Page for Axion",
  // other metadata
};

const DataAnalystPage = () => {
  return (
    <>
      <InternshipDataAnalyst />
    </>
  );
};

export default DataAnalystPage;
