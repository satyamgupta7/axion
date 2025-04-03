import Success from "@/components/Success";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Page | AxionGen",
  description: "This is Success Page for AxionGen",
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
