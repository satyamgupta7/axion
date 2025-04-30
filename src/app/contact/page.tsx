import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | AxionGen - Let's Connect",
  description:
    "Get in touch with AxionGen for collaboration, career opportunities, internship queries, and service inquiries. We're here to help you innovate and grow.",
  keywords:
    "Contact AxionGen, AxionGen Support, AxionGen Careers, Internship Queries, Work With AxionGen, Business Inquiries, Tech Services Support",
};

const ContactPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
