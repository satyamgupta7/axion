import InternshipDataScience from "@/components/InternshipDataScience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Science Internship | Axion",
  description: "This is Data Science Page for Axion",
  // other metadata
};

const DataSciencePage = () => {
  return (
    <>
      <InternshipDataScience />
    </>
  );
};

export default DataSciencePage;
