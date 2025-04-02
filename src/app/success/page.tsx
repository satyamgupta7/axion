import Success from "@/components/Success";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Page | Axion",
  description: "This is Success Page for Axion",
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
