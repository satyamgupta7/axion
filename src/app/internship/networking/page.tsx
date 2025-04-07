import IntershipNetworking from "@/components/InternshipNetworking";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Internship | AxionGen",
  description: "This is Web Development Internship Page for AxionGen",
  // other metadata
};

const NetworkingPage = () => {
  return (
    <>
      <IntershipNetworking />
    </>
  );
};

export default NetworkingPage;
