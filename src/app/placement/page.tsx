import Contact from "@/components/Contact";
import Placement from "@/components/Placement";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Placement Assistance | AxionGen",
  description:
    "AxionGen offers 100% placement assistance to help you kickstart your career. Get expert mentorship, resume building, mock interviews, and direct access to top recruiters through our dedicated placement support.",
  keywords:
    "Placement Assistance, Job Placement, Career Support, Resume Building, Mock Interviews, AxionGen Careers, Campus Placement, IT Placement Services, Interview Preparation, Job Ready Programs",
};

const PlacementPage = () => {
  return (
    <>
      <Placement />
    </>
  );
};

export default PlacementPage;
