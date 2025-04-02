import Contact from "@/components/Contact";
import Placement from "@/components/Placement";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Placement | Axion",
  description: "This is Placement Page for Axion",
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
