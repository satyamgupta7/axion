import Contact from "@/components/Contact";
import Placement from "@/components/Placement";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Placement | AxionGen",
  description: "This is Placement Page for AxionGen",
  // other metadata
};

const PlacementPage = () => {
  return (
    <>
      <Placement />
    </>
  );
};

export default PlacementPage;
