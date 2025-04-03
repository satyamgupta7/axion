import InternshipBusinessAnalyst from "@/components/InternshipBusinessAnalyst";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Analyst Internship | AxionGen",
  description: "This is Data Science Page for AxionGen",
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
