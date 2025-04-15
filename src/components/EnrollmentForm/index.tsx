"use client";
import { useState, useEffect, FocusEventHandler } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { enrollmentStyles } from "./EnrollmentStyles";

interface FormData {
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  interestedRole: string;
  message: string;
}

const internshipRoles = [
  "Full Stack Developer Intern",
  "Data Science Intern",
  "Data Analyst Intern",
  "Business Analyst Intern",
  "Networking Intern",
  "Cyber Security Intern",
];

const EnrollmentForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [whatsappFocus, setWhatsappFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [messageFocus, setMessageFocus] = useState(false);
  const [selectFocus, setSelectFocus] = useState(false);
  const [submissionLoading, setSubmissionLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFormVisible(true);
    }, 500);

    return () => clearTimeout(timer); // Cleanup the timeout on unmount
  }, []);

  // Define focus event handlers to reduce repetition
  const handleInputFocus: (
    setState: (value: boolean) => void,
  ) => FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > = (setState) => () => {
    setState(true);
  };

  const handleInputBlur: (
    setState: (value: boolean) => void,
  ) => FocusEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  > = (setState) => () => {
    setState(false);
  };

  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    interestedRole: "",
    message: "",
  });

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbx8upVfxPvv6EWjPVgGr5FqEbADTmEyxW9XlilyOjMUnfHUs6Ob1Y587LqiIglpRZzZ/exec";

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionLoading(true);
    toast.loading("Submitting your application...", { id: "submit-loading" });

    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("phone", formData.phone);
    formPayload.append("whatsapp", formData.whatsapp);
    formPayload.append("email", formData.email);
    formPayload.append("interestedRole", formData.interestedRole);
    formPayload.append("message", formData.message);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formPayload,
      });

      if (!response.ok) {
        const text = await response.text();
        toast.error("Submission failed. Please try again.", {
          id: "submit-loading",
        });
        return;
      }

      const result = await response.json();
      toast.success("Application submitted successfully!", {
        id: "submit-loading",
      });
      setFormData({
        name: "",
        phone: "",
        whatsapp: "",
        email: "",
        interestedRole: "",
        message: "",
      });
    } catch (error) {
      toast.error(
        "Error submitting application. Please check your connection.",
        { id: "submit-loading" },
      );
    } finally {
      setSubmissionLoading(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, translateY: 20 },
    visible: { opacity: 1, translateY: 0 },
  };

  return (
    <motion.div
      style={enrollmentStyles.formSection}
      variants={formVariants}
      initial="hidden"
      animate={isFormVisible ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <div style={enrollmentStyles.formCard}>
        <label style={enrollmentStyles.formLabel}>Apply Now!</label>
        <form style={enrollmentStyles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name *"
            style={{
              ...enrollmentStyles.input,
              ...(nameFocus && enrollmentStyles.inputFocus),
            }}
            onFocus={handleInputFocus(setNameFocus)}
            onBlur={handleInputBlur(setNameFocus)}
            onChange={handleInputChange}
            value={formData.name}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone *"
            style={{
              ...enrollmentStyles.input,
              ...(phoneFocus && enrollmentStyles.inputFocus),
            }}
            onFocus={handleInputFocus(setPhoneFocus)}
            onBlur={handleInputBlur(setPhoneFocus)}
            onChange={handleInputChange}
            value={formData.phone}
            required
          />
          <input
            type="tel"
            name="whatsapp"
            placeholder="WhatsApp No *"
            style={{
              ...enrollmentStyles.input,
              ...(whatsappFocus && enrollmentStyles.inputFocus),
            }}
            onFocus={handleInputFocus(setWhatsappFocus)}
            onBlur={handleInputBlur(setWhatsappFocus)}
            onChange={handleInputChange}
            value={formData.whatsapp}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            style={{
              ...enrollmentStyles.input,
              ...(emailFocus && enrollmentStyles.inputFocus),
            }}
            onFocus={handleInputFocus(setEmailFocus)}
            onBlur={handleInputBlur(setEmailFocus)}
            onChange={handleInputChange}
            value={formData.email}
            required
          />
          <div className="mb-2">
            <select
              id="interestedRole"
              name="interestedRole"
              required
              className="w-full rounded-md border border-gray-300 p-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                ...enrollmentStyles.select,
                ...(selectFocus && enrollmentStyles.selectFocus),
              }}
              onFocus={handleInputFocus(setSelectFocus)}
              onBlur={handleInputBlur(setSelectFocus)}
              onChange={handleInputChange}
              value={formData.interestedRole}
            >
              <option value="">Choose your Internship Role *</option>
              {internshipRoles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            style={{
              ...enrollmentStyles.textarea,
              ...(messageFocus && enrollmentStyles.textareaFocus),
            }}
            onFocus={handleInputFocus(setMessageFocus)}
            onBlur={handleInputBlur(setMessageFocus)}
            onChange={handleInputChange}
            value={formData.message}
          />
          <motion.button
            type="submit"
            style={enrollmentStyles.button}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            disabled={submissionLoading}
          >
            {submissionLoading ? "Submitting..." : "SUBMIT"}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default EnrollmentForm;
