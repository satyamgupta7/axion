import IntershipNetworking from "@/components/InternshipNetworking";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Networking Internship | AxionGen",
  description:
    "Kickstart your career with AxionGen's Networking Internship. Gain hands-on experience in network configuration, security, and infrastructure.",
  keywords: [
    "Networking Internship",
    "Internship in Networking",
    "Network Engineer Internship",
    "AxionGen Internship",
    "Computer Networking Internship",
    "Network Security Training",
    "Internship for engineering students",
    "Networking jobs for freshers",
  ],
};

const NetworkingPage = () => {
  return (
    <>
      <IntershipNetworking />
    </>
  );
};

export default NetworkingPage;
