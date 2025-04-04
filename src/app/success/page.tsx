import Success from "@/components/Success";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inspiring Success Stories | AxionGen",
  description: "This is Success Stories of AxionGen",
  // other metadata
};

const SuccessPage = () => {
  return (
    <>
      <Success />
    </>
  );
};

export default SuccessPage;
