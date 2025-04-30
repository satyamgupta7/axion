import Success from "@/components/Success";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inspiring Success Stories | AxionGen",
  description:
    "Explore real success stories from AxionGen students and professionals who achieved their career dreams. Get inspired by their journeys and start your own success story today!",
  keywords:
    "Success Stories, Career Success, AxionGen Achievements, Student Testimonials, Career Growth, Success Journey, Alumni Stories, Job Placement Stories, AxionGen Reviews, Career Transformation",
};

const SuccessPage = () => {
  return (
    <>
      <Success />
    </>
  );
};

export default SuccessPage;
