import InternshipDataScience from "@/components/InternshipDataScience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Science Internship | AxionGen",
  description: "This is Data Science Page for AxionGen",
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
