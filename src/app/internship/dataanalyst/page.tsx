import InternshipDataAnalyst from "@/components/InternshipDataAnalyst";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Analyst Internship | AxionGen",
  description:
    "Kickstart your data analytics career with AxionGen’s internship. Learn Excel, SQL, Tableau, and Python with real-world projects.",
  keywords: [
    "Data Analyst Internship",
    "AxionGen",
    "Data Science Training",
    "SQL",
    "Excel",
    "Python",
    "Tableau",
    "Internship Program",
  ],
  openGraph: {
    title: "Data Analyst Internship | AxionGen",
    description:
      "Kickstart your data analytics career with real-world tools like Excel, SQL, Tableau, and Python.",
    images: "/images/programs/DataAnalyst.JPG",
    url: "https://www.axiongen.com/internship/dataanalyst",
    siteName: "AxionGen",
    type: "website",
  },
};

const DataAnalystPage = () => {
  return (
    <>
      <InternshipDataAnalyst />
    </>
  );
};

export default DataAnalystPage;
